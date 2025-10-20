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

  test("json events", async () => {
    const STREAM_NAME = v4().toString();

    const requests: AppendStreamRequest[] = [];

    requests.push({
      streamName: STREAM_NAME,
      events: binaryTestEvents(),
      expectedState: ANY,
    });

    try {
      await client.multiStreamAppend(requests);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "multiStreamAppend requires server version 25.1 or higher."
      );
    }
  });

  optionalDescribe(supported)("Supported (>=25.1)", () => {
    test("json events", async () => {
      const STREAM_NAME_1 = v4().toString();
      const STREAM_NAME_2 = v4().toString();
      const expectedMetadata = {
        timestamp: new Date().toISOString(),
        int: 1,
        float: 1.1,
        string: "test",
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
            "$record.timestamp": expect.any(String),
            "$schema.format": "Json",
            "$schema.name": "test",
            ...expectedMetadata,
          })
        );
      }
    });
  });

  optionalDescribe(supported)("Supported (>=25.1)", () => {
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
  });

  optionalDescribe(supported)("Supported (>=25.1)", () => {
    test.only("stream revision conflict", async () => {
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
