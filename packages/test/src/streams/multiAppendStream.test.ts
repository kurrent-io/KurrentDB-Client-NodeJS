/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  createTestNode,
  jsonTestEvents,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";

import {
  KurrentDBClient,
  ANY,
  AppendStreamRequest,
  UnsupportedError,
} from "@kurrent/kurrentdb-client";

import { v4 } from "uuid";

describe("MultiAppendStream", () => {
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

  optionalDescribe(supported)(
    "should successfully append to multiple streams",
    () => {
      test("json events", async () => {
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

        const result = await client.multiAppend(requests);
        expect(result).toBeDefined();
        expect(result.success).toBeTruthy();
      });
    }
  );

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
        await client.multiAppend(requests);
      } catch (error) {
        expect(error).toBeInstanceOf(UnsupportedError);
      }
    });
  });
});
