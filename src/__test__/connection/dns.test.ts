import { jsonTestEvents, optionalDescribe } from "../utils";

import {
  EventStoreDBClient,
  jsonEvent,
  NodePreference,
  NotLeaderError,
} from "../..";

optionalDescribe(process.env.EVENTSTORE_CLOUD_ID != null)(
  "dns discover",
  () => {
    const STREAM_NAME = "test_stream_name";
    const { EVENTSTORE_CLOUD_ID } = process.env;
    const event = jsonEvent({
      eventType: "test",
      payload: { message: "test" },
    });

    describe.each([
      [
        "connectionString",
        (nodePreference?: NodePreference) =>
          EventStoreDBClient.connectionString`esdb+discover://${EVENTSTORE_CLOUD_ID!}.mesdb.eventstore.cloud${
            nodePreference ? `?nodePreference=${nodePreference}` : ""
          }`,
      ],
      [
        "new client",
        (nodePreference?: NodePreference) =>
          new EventStoreDBClient({
            discover: {
              address: `${EVENTSTORE_CLOUD_ID!}.mesdb.eventstore.cloud`,
              port: 2113,
            },
            nodePreference,
          }),
      ],
    ])("%s", (clientType, createClient) => {
      test("should successfully connect", async () => {
        const client = createClient();

        const appendResult = await client.appendToStream(STREAM_NAME, event);
        const readResult = await client.readStream(STREAM_NAME, 10);

        expect(appendResult).toBeDefined();
        expect(readResult).toBeDefined();
      });

      describe("should connect to specified preference", () => {
        test("leader", async () => {
          const client = createClient("leader");
          const appendResult = await client.appendToStream(
            `${clientType}-leader-test`,
            jsonTestEvents(),
            { requiresLeader: true }
          );

          expect(appendResult).toBeDefined();
        });

        test("follower", async () => {
          const client = createClient("follower");

          try {
            const appendResult = await client.appendToStream(
              `${clientType}-leader-test`,
              jsonTestEvents(),
              { requiresLeader: true }
            );
            expect(appendResult).toBe("unreachable");
          } catch (error) {
            expect(error).toBeInstanceOf(NotLeaderError);
          }
        });
      });
    });
  }
);
