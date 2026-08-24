/** @jest-environment ./src/utils/enableVersionCheck.ts */
import type { Duplex } from "stream";

import {
  createTestNode,
  jsonTestEvents,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";
import { KurrentDBClient, jsonEvent } from "@kurrent/kurrentdb-client";
import { StreamsClient } from "@kurrent/kurrentdb-client/generated/kurrentdb/protocols/v1/streams_grpc_pb";

describe("appendToStream - batch append", () => {
  const supported = matchServerVersion`>=21.10`;

  const node = createTestNode();
  let client!: KurrentDBClient;
  let batchSpy!: jest.SpiedFunction<KurrentDBClient["GRPCStreamCreator"]>;
  let executeSpy!: jest.SpiedFunction<KurrentDBClient["execute"]>;

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());
    batchSpy = spyOn.call(client, "GRPCStreamCreator");
    executeSpy = spyOn.call(client, "execute");
  });

  afterAll(async () => {
    await node.down();
  });

  afterEach(() => {
    batchSpy.mockClear();
    executeSpy.mockClear();
  });

  optionalDescribe(!supported)("Not Supported (<21.10)", () => {
    test("Uses normal append", async () => {
      const STREAM_NAME = "uses_normal_append";

      const result = await client.appendToStream(STREAM_NAME, jsonTestEvents());
      expect(result).toBeDefined();
      expect(result.nextExpectedRevision).toBeGreaterThanOrEqual(0);

      expect(batchSpy).not.toHaveBeenCalled();
      expect(executeSpy).toHaveBeenCalledWith(
        StreamsClient,
        "appendToStream",
        expect.any(Function)
      );
    });
  });

  optionalDescribe(supported)("Supported (>=21.10)", () => {
    test("Uses batch append", async () => {
      const STREAM_NAME = "uses_batch_append";

      const result = await client.appendToStream(STREAM_NAME, jsonTestEvents());
      expect(result).toBeDefined();
      expect(result.nextExpectedRevision).toBeGreaterThanOrEqual(0);

      expect(batchSpy).toHaveBeenCalledWith(
        StreamsClient,
        "appendToStream",
        expect.any(Function),
        expect.any(WeakMap)
      );
    });

    test("Uses normal append if a credentials are passed", async () => {
      const STREAM_NAME = "uses_normal_append_if_creds_are_passed";

      const result = await client.appendToStream(
        STREAM_NAME,
        jsonTestEvents(),
        { credentials: { username: "admin", password: "changeit" } }
      );
      expect(result).toBeDefined();
      expect(result.nextExpectedRevision).toBeGreaterThanOrEqual(0);

      expect(batchSpy).not.toHaveBeenCalled();
      expect(executeSpy).toHaveBeenCalledWith(
        StreamsClient,
        "appendToStream",
        expect.any(Function)
      );
    });

    test("Batches events into batches", async () => {
      await client.appendToStream("open_stream", jsonTestEvents());

      const stream = await extractBatchStream.call(
        client,
        ...batchSpy.mock.calls[0]
      );

      const writeSpy = jest.spyOn(stream, "write");

      const result = await client.appendToStream(
        "small_batch_size",
        jsonTestEvents(5_000),
        { batchAppendSize: 1024 }
      );

      expect(result).toBeDefined();
      expect(result.nextExpectedRevision).toBeGreaterThanOrEqual(0);

      expect(writeSpy).toHaveBeenCalledTimes(
        // (test event is 128 bytes)
        // (size * event count) / requested batch size
        (128 * 5_000) / 1024
      );
    });

    test("A stream error does not reject in-flight appends on sibling streams", async () => {
      const clientA = KurrentDBClient.connectionString(node.connectionString());
      const clientB = KurrentDBClient.connectionString(node.connectionString());
      const aSpy = jest.spyOn(
        clientA,
        "GRPCStreamCreator" as never
      ) as unknown as jest.SpiedFunction<KurrentDBClient["GRPCStreamCreator"]>;

      try {
        await clientA.appendToStream("sibling_a_warmup", jsonTestEvents());
        await clientB.appendToStream("sibling_b_warmup", jsonTestEvents());

        const aStream = await extractBatchStream.call(
          clientA,
          ...aSpy.mock.calls[0]
        );

        let aSettled = false;
        let bSettled = false;
        const aAppend = clientA
          .appendToStream("sibling_a_during_a_error", jsonTestEvents())
          .finally(() => {
            aSettled = true;
          });
        const bAppend = clientB
          .appendToStream("sibling_b_during_a_error", jsonTestEvents())
          .finally(() => {
            bSettled = true;
          });

        await new Promise((r) => setImmediate(r));

        expect(aSettled).toBe(false);
        expect(bSettled).toBe(false);

        aStream.emit("error", new Error("simulated transport error"));

        await expect(aAppend).rejects.toThrow();

        const bResult = await bAppend;
        expect(bResult.success).toBe(true);
      } finally {
        await clientA.dispose();
        await clientB.dispose();
      }
    });

    test("An event that cannot be serialized rejects instead of hanging", async () => {
      const unhandled: unknown[] = [];
      const collectUnhandled = (reason: unknown) => unhandled.push(reason);
      process.on("unhandledRejection", collectUnhandled);

      try {
        let settled = false;
        const append = client
          .appendToStream("unserializable_event", [
            // A bigint is not JSON-serializable, and is easy to end up with by
            // accident here: this client hands revisions and positions back as
            // bigints, so round-tripping one into an event payload throws in
            // eventBatcher. The stream itself stays healthy throughout, so the
            // "error" handler never runs and cannot settle this append.
            jsonEvent({
              type: "unserializable",
              data: { revision: BigInt(0) } as never,
            }),
          ])
          .finally(() => {
            settled = true;
          });

        await expect(append).rejects.toThrow(/BigInt/);
        expect(settled).toBe(true);

        // Give an orphaned rejection a turn of the loop to surface.
        await new Promise((r) => setImmediate(r));
        expect(unhandled).toEqual([]);
      } finally {
        process.off("unhandledRejection", collectUnhandled);
      }
    });

    test("A non-Error thrown while building the batch rejects with an Error", async () => {
      let settled = false;
      const append = client
        .appendToStream("non_error_throw", [
          // JSON.stringify calls toJSON on the payload, and that user code is
          // free to throw anything at all — a bare string here. Passing the
          // raw value on to convertToCommandError blows up inside the catch
          // (it probes the value with the `in` operator), which leaves this
          // append hanging, so the value is wrapped in an Error first.
          jsonEvent({
            type: "non_error_throw",
            data: {
              toJSON() {
                throw "toJSON refused to serialize";
              },
            } as never,
          }),
        ])
        .finally(() => {
          settled = true;
        });

      const error = await append.catch((reason: unknown) => reason);

      expect(settled).toBe(true);
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toMatch(/toJSON refused to serialize/);

      // The failure was local to this append: the shared batch stream is still
      // usable afterwards.
      const result = await client.appendToStream(
        "non_error_throw_recovery",
        jsonTestEvents()
      );
      expect(result.success).toBe(true);
    });
  });
});

/* eslint-disable @typescript-eslint/no-explicit-any */

function spyOn(this: KurrentDBClient, method: string) {
  return jest.spyOn(this, method as never) as any;
}

function extractBatchStream(
  this: KurrentDBClient,
  clientConstructor: any,
  name: any,
  _: any,
  cache: any
): Promise<Duplex> {
  return this.GRPCStreamCreator(
    clientConstructor,
    name,
    () => {
      throw "Creator shouldn't be called as it will take the client from the cache";
    },
    cache
  )();
}
