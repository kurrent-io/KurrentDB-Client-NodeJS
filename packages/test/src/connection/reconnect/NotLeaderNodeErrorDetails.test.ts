/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  createTestCluster,
  getCurrentConnection,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";
import {
  jsonEvent,
  KurrentDBClient,
  NotLeaderError,
  FOLLOWER,
  ANY,
  EndPoint,
} from "@kurrent/kurrentdb-client";

import { randomUUID as v4 } from "crypto";

// This test can take time.
jest.setTimeout(120_000);

describe("reconnect", () => {
  const supported = matchServerVersion`>=26.0`;

  optionalDescribe(supported)("NotLeaderNodeErrorDetails", () => {
    const cluster = createTestCluster();

    beforeAll(async () => {
      await cluster.up();
    });

    afterAll(async () => {
      await cluster.down();
    });

    const event = () => jsonEvent({ type: "test", data: { message: "test" } });

    test.each([
      [
        "appendRecords",
        (client: KurrentDBClient, streamName: string) =>
          client.appendRecords([{ streamName, record: event() }]),
      ],
      [
        "multiStreamAppend",
        (client: KurrentDBClient, streamName: string) =>
          client.multiStreamAppend([
            { streamName, expectedState: ANY, events: [event()] },
          ]),
      ],
    ])("%s should reconnect to leader", async (_, append) => {
      const STREAM_NAME = v4().toString();
      const client = KurrentDBClient.connectionString(
        cluster.connectionStringWithOverrides({
          defaultDeadline: 100_000_000,
          nodePreference: FOLLOWER,
        })
      );

      let leader!: EndPoint;
      try {
        // the server requires the leader for v2 appends
        const followerAppend = await append(client, STREAM_NAME);
        expect(followerAppend).toBe("Unreachable");
      } catch (error) {
        expect(error).toBeInstanceOf(NotLeaderError);

        if (error instanceof NotLeaderError) {
          leader = error.leader;
        }
      }

      expect(cluster.endpoints).toContainEqual(leader);

      const reconnectedAppend = await append(client, STREAM_NAME);
      expect(reconnectedAppend).toBeDefined();

      const { address, port } = await getCurrentConnection(client);

      expect(address).toEqual(leader.address);
      expect(port).toEqual(leader.port);
    });
  });
});
