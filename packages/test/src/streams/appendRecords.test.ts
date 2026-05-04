/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  collect,
  createTestNode,
  jsonTestEvents,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";

import {
  KurrentDBClient,
  NO_STREAM,
  STREAM_EXISTS,
  STREAM_STATE,
  UnsupportedError,
  AppendConsistencyViolationError,
  AppendRecordInput,
  ConsistencyCheck,
  jsonEvent,
} from "@kurrent/kurrentdb-client";

import { randomUUID as v4 } from "crypto";

describe("appendRecords", () => {
  const supported = matchServerVersion`>=26.0`;
  const node = createTestNode();
  let client!: KurrentDBClient;

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());
  });

  afterAll(async () => {
    await node.down();
  });

  const record = (
    streamName: string,
    data: Record<string, unknown> = { key: "value" }
  ): AppendRecordInput => ({
    streamName,
    record: jsonEvent({ type: "test-event-type", data }),
  });

  const recordWithMetadata = (
    streamName: string,
    metadata: Record<string, string>
  ): AppendRecordInput => ({
    streamName,
    record: jsonEvent({
      type: "test-event-type",
      data: { key: "value" },
      metadata,
    }),
  });

  const seedStream = async (streamName: string, count: number) => {
    const records: AppendRecordInput[] = jsonTestEvents(count).map((event) => ({
      streamName,
      record: event,
    }));
    return client.appendRecords(records);
  };

  const check = (
    streamName: string,
    expectedState: ConsistencyCheck["expectedState"]
  ): ConsistencyCheck => ({
    type: STREAM_STATE,
    streamName,
    expectedState,
  });

  optionalDescribe(supported)("Supported (>=26.1)", () => {
    // ── Basic append operations ────────────────────────────────────────

    describe("basic operations", () => {
      test("append records to single stream", async () => {
        const STREAM = v4();
        const events = jsonTestEvents(3);
        const records: AppendRecordInput[] = events.map((event) => ({
          streamName: STREAM,
          record: event,
        }));

        const result = await client.appendRecords(records);

        expect(result.position).toBeGreaterThanOrEqual(BigInt(0));
        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(STREAM);
        expect(result.responses[0].revision).toBeGreaterThanOrEqual(BigInt(0));

        const readEvents = await collect(client.readStream(STREAM));
        expect(readEvents).toHaveLength(3);
      });

      test("append records to multiple streams", async () => {
        const STREAM_1 = v4();
        const STREAM_2 = v4();
        const metadata = { name: "test-user" };

        const records: AppendRecordInput[] = [
          recordWithMetadata(STREAM_1, metadata),
          recordWithMetadata(STREAM_1, metadata),
          recordWithMetadata(STREAM_1, metadata),
          recordWithMetadata(STREAM_2, metadata),
          recordWithMetadata(STREAM_2, metadata),
        ];

        const result = await client.appendRecords(records);

        expect(result.position).toBeGreaterThanOrEqual(BigInt(0));
        expect(result.responses).toHaveLength(2);

        const stream1Events = await collect(client.readStream(STREAM_1));
        const stream2Events = await collect(client.readStream(STREAM_2));

        expect(stream1Events).toHaveLength(3);
        expect(stream2Events).toHaveLength(2);

        expect(stream1Events[0].event?.metadata).toEqual(
          expect.objectContaining({
            "$schema.format": "Json",
            "$schema.name": "test-event-type",
            name: "test-user",
          })
        );
      });

      test("interleaved tracks revisions", async () => {
        const STREAM_1 = v4();
        const STREAM_2 = v4();

        const records: AppendRecordInput[] = [
          record(STREAM_1, { order: 1 }),
          record(STREAM_2, { order: 2 }),
          record(STREAM_1, { order: 3 }),
          record(STREAM_2, { order: 4 }),
          record(STREAM_1, { order: 5 }),
        ];

        const result = await client.appendRecords(records);

        expect(result.position).toBeGreaterThanOrEqual(BigInt(0));
        expect(result.responses).toHaveLength(2);

        const revStream1 = result.responses.find(
          (r) => r.streamName === STREAM_1
        )!;
        const revStream2 = result.responses.find(
          (r) => r.streamName === STREAM_2
        )!;

        expect(revStream1.revision).toBe(BigInt(2));
        expect(revStream2.revision).toBe(BigInt(1));

        const stream1Events = await collect(client.readStream(STREAM_1));
        const stream2Events = await collect(client.readStream(STREAM_2));

        expect(stream1Events).toHaveLength(3);
        expect(stream2Events).toHaveLength(2);
      });

      test("invalid metadata (binary metadata)", async () => {
        const records: AppendRecordInput[] = [
          {
            streamName: v4(),
            record: jsonEvent({
              type: "test",
              data: { key: "value" },
              metadata: Buffer.from("binary metadata"),
            }),
          },
        ];

        await expect(client.appendRecords(records)).rejects.toThrow(
          "appendRecords requires metadata to be a plain object with string keys and string values."
        );
      });
    });

    // ── WriteOnly: WhenExpectingAny ────────────────────────────────────

    describe("write only - expecting any (no checks)", () => {
      test("succeeds when stream has revision", async () => {
        const STREAM = v4();
        await seedStream(STREAM, 3);

        const result = await client.appendRecords([record(STREAM)]);

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(STREAM);
      });

      test("succeeds when stream not found", async () => {
        const STREAM = v4();

        const result = await client.appendRecords([record(STREAM)]);

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(STREAM);
      });

      test("succeeds when stream is deleted", async () => {
        const STREAM = v4();
        await client.appendToStream(STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.deleteStream(STREAM);

        const result = await client.appendRecords([record(STREAM)]);

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(STREAM);
      });

      test("fails when stream is tombstoned", async () => {
        const STREAM = v4();
        await client.appendToStream(STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.tombstoneStream(STREAM);

        await expect(client.appendRecords([record(STREAM)])).rejects.toThrow();
      });
    });

    // ── WriteOnly: WhenExpectingNoStream ───────────────────────────────

    describe("write only - expecting no stream", () => {
      test("succeeds when stream not found", async () => {
        const STREAM = v4();

        const result = await client.appendRecords(
          [record(STREAM)],
          [check(STREAM, NO_STREAM)]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(STREAM);
      });

      test("succeeds when stream is deleted", async () => {
        const STREAM = v4();
        await client.appendToStream(STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.deleteStream(STREAM);

        const result = await client.appendRecords(
          [record(STREAM)],
          [check(STREAM, NO_STREAM)]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(STREAM);
      });

      test("fails when stream has revision", async () => {
        const STREAM = v4();
        await seedStream(STREAM, 3);

        try {
          await client.appendRecords(
            [record(STREAM)],
            [check(STREAM, NO_STREAM)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(STREAM);
          }
        }
      });

      test("fails when stream is tombstoned", async () => {
        const STREAM = v4();
        await client.appendToStream(STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.tombstoneStream(STREAM);

        await expect(
          client.appendRecords([record(STREAM)], [check(STREAM, NO_STREAM)])
        ).rejects.toThrow();
      });
    });

    // ── WriteOnly: WhenExpectingRevision ───────────────────────────────

    describe("write only - expecting revision", () => {
      const EXPECTED_REVISION = BigInt(10);

      test("succeeds when stream has revision", async () => {
        const STREAM = v4();
        await seedStream(STREAM, 11);

        const result = await client.appendRecords(
          [record(STREAM)],
          [check(STREAM, EXPECTED_REVISION)]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(STREAM);
      });

      test("fails when stream not found", async () => {
        const STREAM = v4();

        try {
          await client.appendRecords(
            [record(STREAM)],
            [check(STREAM, EXPECTED_REVISION)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(STREAM);
          }
        }
      });

      test("fails when stream has wrong revision", async () => {
        const STREAM = v4();
        await seedStream(STREAM, 5);

        try {
          await client.appendRecords(
            [record(STREAM)],
            [check(STREAM, EXPECTED_REVISION)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(STREAM);
          }
        }
      });

      test("fails when stream is deleted", async () => {
        const STREAM = v4();
        await client.appendToStream(STREAM, jsonTestEvents(3), {
          streamState: NO_STREAM,
        });
        await client.deleteStream(STREAM);

        await expect(
          client.appendRecords(
            [record(STREAM)],
            [check(STREAM, EXPECTED_REVISION)]
          )
        ).rejects.toThrow(AppendConsistencyViolationError);
      });

      test("fails when stream is tombstoned", async () => {
        const STREAM = v4();
        await client.appendToStream(STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.tombstoneStream(STREAM);

        await expect(
          client.appendRecords(
            [record(STREAM)],
            [check(STREAM, EXPECTED_REVISION)]
          )
        ).rejects.toThrow();
      });
    });

    // ── WriteOnly: WhenExpectingExists ─────────────────────────────────

    describe("write only - expecting exists", () => {
      test("succeeds when stream has revision", async () => {
        const STREAM = v4();
        await seedStream(STREAM, 3);

        const result = await client.appendRecords(
          [record(STREAM)],
          [check(STREAM, STREAM_EXISTS)]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(STREAM);
      });

      test("fails when stream not found", async () => {
        const STREAM = v4();

        try {
          await client.appendRecords(
            [record(STREAM)],
            [check(STREAM, STREAM_EXISTS)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(STREAM);
          }
        }
      });

      test("fails when stream is deleted", async () => {
        const STREAM = v4();
        await client.appendToStream(STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.deleteStream(STREAM);

        await expect(
          client.appendRecords([record(STREAM)], [check(STREAM, STREAM_EXISTS)])
        ).rejects.toThrow(AppendConsistencyViolationError);
      });

      test("fails when stream is tombstoned", async () => {
        const STREAM = v4();
        await client.appendToStream(STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.tombstoneStream(STREAM);

        await expect(
          client.appendRecords([record(STREAM)], [check(STREAM, STREAM_EXISTS)])
        ).rejects.toThrow();
      });
    });

    // ── CheckOnly: WhenExpectingNoStream ───────────────────────────────

    describe("check only - expecting no stream", () => {
      test("succeeds when stream not found", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();

        const result = await client.appendRecords(
          [record(WRITE_STREAM)],
          [check(CHECK_STREAM, NO_STREAM)]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(WRITE_STREAM);
      });

      test("succeeds when stream is deleted", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await client.appendToStream(CHECK_STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.deleteStream(CHECK_STREAM);

        const result = await client.appendRecords(
          [record(WRITE_STREAM)],
          [check(CHECK_STREAM, NO_STREAM)]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(WRITE_STREAM);
      });

      test("succeeds when stream is tombstoned", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await client.appendToStream(CHECK_STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.tombstoneStream(CHECK_STREAM);

        const result = await client.appendRecords(
          [record(WRITE_STREAM)],
          [check(CHECK_STREAM, NO_STREAM)]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(WRITE_STREAM);
      });

      test("fails when stream has revision", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await seedStream(CHECK_STREAM, 3);

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_STREAM, NO_STREAM)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(CHECK_STREAM);
          }
        }
      });
    });

    // ── CheckOnly: WhenExpectingRevision ───────────────────────────────

    describe("check only - expecting revision", () => {
      const EXPECTED_REVISION = BigInt(10);

      test("succeeds when stream has revision", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await seedStream(CHECK_STREAM, 11);

        const result = await client.appendRecords(
          [record(WRITE_STREAM)],
          [check(CHECK_STREAM, EXPECTED_REVISION)]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(WRITE_STREAM);
      });

      test("fails when stream not found", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_STREAM, EXPECTED_REVISION)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(CHECK_STREAM);
          }
        }
      });

      test("fails when stream has wrong revision", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await seedStream(CHECK_STREAM, 5);

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_STREAM, EXPECTED_REVISION)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(CHECK_STREAM);
          }
        }
      });

      test("fails when stream is deleted", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await client.appendToStream(CHECK_STREAM, jsonTestEvents(3), {
          streamState: NO_STREAM,
        });
        await client.deleteStream(CHECK_STREAM);

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_STREAM, EXPECTED_REVISION)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(CHECK_STREAM);
          }
        }
      });

      test("fails when stream is tombstoned", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await client.appendToStream(CHECK_STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.tombstoneStream(CHECK_STREAM);

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_STREAM, EXPECTED_REVISION)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(CHECK_STREAM);
          }
        }
      });
    });

    // ── CheckOnly: WhenExpectingExists ─────────────────────────────────

    describe("check only - expecting exists", () => {
      test("succeeds when stream has revision", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await seedStream(CHECK_STREAM, 3);

        const result = await client.appendRecords(
          [record(WRITE_STREAM)],
          [check(CHECK_STREAM, STREAM_EXISTS)]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(WRITE_STREAM);
      });

      test("fails when stream not found", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_STREAM, STREAM_EXISTS)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(CHECK_STREAM);
          }
        }
      });

      test("fails when stream is deleted", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await client.appendToStream(CHECK_STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.deleteStream(CHECK_STREAM);

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_STREAM, STREAM_EXISTS)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(CHECK_STREAM);
          }
        }
      });

      test("fails when stream is tombstoned", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();
        await client.appendToStream(CHECK_STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.tombstoneStream(CHECK_STREAM);

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_STREAM, STREAM_EXISTS)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].streamName).toBe(CHECK_STREAM);
          }
        }
      });
    });

    // ── CheckOnly: WhenMultipleChecks ──────────────────────────────────

    describe("check only - multiple checks", () => {
      test("succeeds when all checks pass", async () => {
        const WRITE_STREAM = v4();
        const CHECK_A = v4();
        const CHECK_B = v4();

        await seedStream(CHECK_A, 3);
        await seedStream(CHECK_B, 5);

        const result = await client.appendRecords(
          [record(WRITE_STREAM)],
          [check(CHECK_A, BigInt(2)), check(CHECK_B, BigInt(4))]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(WRITE_STREAM);
      });

      test("succeeds when all mixed check types pass", async () => {
        const WRITE_STREAM = v4();
        const REVISION_STREAM = v4();
        const EXISTS_STREAM = v4();
        const NO_STREAM_NAME = v4();

        await seedStream(REVISION_STREAM, 3);
        await seedStream(EXISTS_STREAM, 1);

        const result = await client.appendRecords(
          [record(WRITE_STREAM)],
          [
            check(REVISION_STREAM, BigInt(2)),
            check(EXISTS_STREAM, STREAM_EXISTS),
            check(NO_STREAM_NAME, NO_STREAM),
          ]
        );

        expect(result.responses).toHaveLength(1);
        expect(result.responses[0].streamName).toBe(WRITE_STREAM);
      });

      test("fails when one of multiple checks fails", async () => {
        const WRITE_STREAM = v4();
        const CHECK_A = v4();
        const CHECK_B = v4();

        await seedStream(CHECK_A, 3);
        // CHECK_B not seeded — will fail

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_A, BigInt(2)), check(CHECK_B, BigInt(5))]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].checkIndex).toBe(1);
            expect(error.violations[0].streamName).toBe(CHECK_B);
          }
        }
      });

      test("fails when all checks fail", async () => {
        const WRITE_STREAM = v4();
        const CHECK_A = v4();
        const CHECK_B = v4();

        // Neither stream seeded

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_A, BigInt(3)), check(CHECK_B, STREAM_EXISTS)]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(2);

            const violationA = error.violations.find(
              (v) => v.streamName === CHECK_A
            )!;
            const violationB = error.violations.find(
              (v) => v.streamName === CHECK_B
            )!;

            expect(violationA.checkIndex).toBe(0);
            expect(violationB.checkIndex).toBe(1);
          }
        }
      });

      test("fails when first check fails and second passes", async () => {
        const WRITE_STREAM = v4();
        const CHECK_A = v4();
        const CHECK_B = v4();

        // CHECK_A not seeded — will fail
        await seedStream(CHECK_B, 6);

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_A, BigInt(3)), check(CHECK_B, BigInt(5))]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].checkIndex).toBe(0);
            expect(error.violations[0].streamName).toBe(CHECK_A);
          }
        }
      });

      test("fails when two of three checks fail", async () => {
        const WRITE_STREAM = v4();
        const CHECK_A = v4();
        const CHECK_B = v4();
        const CHECK_C = v4();

        await seedStream(CHECK_A, 3);
        // CHECK_B not seeded — will fail
        await seedStream(CHECK_C, 2);

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [
              check(CHECK_A, BigInt(2)),
              check(CHECK_B, STREAM_EXISTS),
              check(CHECK_C, BigInt(10)),
            ]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(2);

            const violationB = error.violations.find(
              (v) => v.streamName === CHECK_B
            )!;
            const violationC = error.violations.find(
              (v) => v.streamName === CHECK_C
            )!;

            expect(violationB.checkIndex).toBe(1);
            expect(violationC.checkIndex).toBe(2);
          }
        }
      });

      test("fails with mixed violation states", async () => {
        const WRITE_STREAM = v4();
        const DELETED_STREAM = v4();
        const TOMBSTONED_STREAM = v4();
        const MISSING_STREAM = v4();

        await client.appendToStream(DELETED_STREAM, jsonTestEvents(3), {
          streamState: NO_STREAM,
        });
        await client.deleteStream(DELETED_STREAM);

        await client.appendToStream(TOMBSTONED_STREAM, jsonTestEvents(), {
          streamState: NO_STREAM,
        });
        await client.tombstoneStream(TOMBSTONED_STREAM);
        // MISSING_STREAM not seeded

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [
              check(DELETED_STREAM, STREAM_EXISTS),
              check(TOMBSTONED_STREAM, STREAM_EXISTS),
              check(MISSING_STREAM, BigInt(10)),
            ]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(3);

            const deletedViolation = error.violations.find(
              (v) => v.streamName === DELETED_STREAM
            )!;
            const tombstonedViolation = error.violations.find(
              (v) => v.streamName === TOMBSTONED_STREAM
            )!;
            const missingViolation = error.violations.find(
              (v) => v.streamName === MISSING_STREAM
            )!;

            expect(deletedViolation.checkIndex).toBe(0);
            expect(tombstonedViolation.checkIndex).toBe(1);
            expect(missingViolation.checkIndex).toBe(2);
          }
        }
      });

      test("fails when check on write target and separate check fails", async () => {
        const CHECK_STREAM = v4();
        const WRITE_STREAM = v4();

        // CHECK_STREAM not seeded — will fail
        await seedStream(WRITE_STREAM, 4);

        try {
          await client.appendRecords(
            [record(WRITE_STREAM)],
            [check(CHECK_STREAM, BigInt(5)), check(WRITE_STREAM, BigInt(3))]
          );
          fail("Expected AppendConsistencyViolationError");
        } catch (error) {
          expect(error).toBeInstanceOf(AppendConsistencyViolationError);
          if (error instanceof AppendConsistencyViolationError) {
            expect(error.violations).toHaveLength(1);
            expect(error.violations[0].checkIndex).toBe(0);
            expect(error.violations[0].streamName).toBe(CHECK_STREAM);
          }
        }
      });
    });
  });

  optionalDescribe(!supported)("not supported (<26.0)", () => {
    test("throw unsupported error", async () => {
      try {
        await client.appendRecords([record(v4())]);
      } catch (error) {
        expect(error).toBeInstanceOf(UnsupportedError);
      }
    });
  });
});
