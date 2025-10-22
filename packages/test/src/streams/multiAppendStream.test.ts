/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  binaryTestEvents,
  collect,
  createTestNode,
  jsonTestEvents,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";

import {
  KurrentDBClient,
  ANY,
  UnsupportedError,
  AppendStreamRequest,
  STREAM_EXISTS,
  WrongExpectedVersionError,
  StreamTombstonedError,
  jsonEvent,
  binaryEvent,
} from "@kurrent/kurrentdb-client";

import { v4 } from "uuid";

describe("multiAppend", () => {
  const supported = matchServerVersion`>=25.0`;
  const node = createTestNode();
  let client!: KurrentDBClient;

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());
  });

  afterAll(async () => {
    await node.down();
  });

  optionalDescribe(supported)("Supported (>=25.1)", () => {
    test("invalid metadata (binary metadata)", async () => {
      const STREAM_NAME = v4().toString();

      const requests: AppendStreamRequest[] = [];

      requests.push({
        streamName: STREAM_NAME,
        events: [
          jsonEvent({
            type: "test",
            data: { key: "value" },
            metadata: Buffer.from("binary metadata"),
          }),
        ],
        expectedState: ANY,
      });

      await expect(client.multiStreamAppend(requests)).rejects.toThrow(
        "multiStreamAppend requires metadata to be a plain object with string keys and string values."
      );
    });

    test("invalid metadata (non plain object)", async () => {
      const STREAM_NAME = v4().toString();

      const requests: AppendStreamRequest[] = [];

      requests.push({
        streamName: STREAM_NAME,
        events: [
          jsonEvent({
            type: "test",
            data: {
              stringKey: "stringValue",
              numberKey: 42,
            },
          }),
        ],
        expectedState: ANY,
      });

      try {
        await client.multiStreamAppend(requests);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        await expect(client.multiStreamAppend(requests)).rejects.toThrow(
          "multiStreamAppend requires metadata to be a plain object with string keys and string values."
        );
      }
    });

    test("json events", async () => {
      const STREAM_NAME_1 = v4().toString();
      const STREAM_NAME_2 = v4().toString();
      const expectedMetadata = {
        name: "multiAppendTest",
        empty: "",
      };

      const requests: AppendStreamRequest[] = [];

      requests.push({
        streamName: STREAM_NAME_1,
        events: jsonTestEvents(4, "test", expectedMetadata),
        expectedState: ANY,
      });

      requests.push({
        streamName: STREAM_NAME_2,
        events: jsonTestEvents(4, "test", expectedMetadata),
        expectedState: ANY,
      });

      const result = await client.multiStreamAppend(requests);
      expect(result).toBeDefined();
      expect(result.position).toBeGreaterThanOrEqual(BigInt(0));
      expect(result.responses).toBeDefined();
      expect(result.responses.length).toBe(2);

      const stream1Events = await collect(client.readStream(STREAM_NAME_1));
      const stream2Events = await collect(client.readStream(STREAM_NAME_2));

      expect(stream1Events.length).toBe(4);
      expect(stream2Events.length).toBe(4);

      for (const { event } of [...stream1Events, ...stream2Events]) {
        expect(event).toBeDefined();
        expect(event?.metadata).toEqual(
          expect.objectContaining({
            "$schema.format": "Json",
            "$schema.name": "test",
            name: "multiAppendTest",
            empty: "",
          })
        );
      }
    });

    test("stream deleted", async () => {
      const STREAM_NAME = v4().toString();

      await client.tombstoneStream(STREAM_NAME);

      const requests: AppendStreamRequest[] = [];

      requests.push({
        streamName: STREAM_NAME,
        events: jsonTestEvents(),
        expectedState: STREAM_EXISTS,
      });

      try {
        await client.multiStreamAppend(requests);
      } catch (error) {
        expect(error).toBeInstanceOf(StreamTombstonedError);
      }
    });

    test("stream revision conflict", async () => {
      const STREAM_NAME = v4().toString();

      const requests: AppendStreamRequest[] = [];

      requests.push({
        streamName: STREAM_NAME,
        events: jsonTestEvents(),
        expectedState: STREAM_EXISTS,
      });

      try {
        await client.multiStreamAppend(requests);
      } catch (error) {
        expect(error).toBeInstanceOf(WrongExpectedVersionError);
      }
    });
  });

  optionalDescribe(!supported)("not supported (<25.0)", () => {
    test("throw unsupported error", async () => {
      const STREAM_NAME_1 = v4().toString();
      const STREAM_NAME_2 = v4().toString();
      const requests: AppendStreamRequest[] = [];

      requests.push({
        streamName: STREAM_NAME_1,
        events: jsonTestEvents(),
        expectedState: ANY,
      });

      requests.push({
        streamName: STREAM_NAME_2,
        events: jsonTestEvents(),
        expectedState: ANY,
      });

      try {
        await client.multiStreamAppend(requests);
      } catch (error) {
        expect(error).toBeInstanceOf(UnsupportedError);
      }
    });
  });
});
