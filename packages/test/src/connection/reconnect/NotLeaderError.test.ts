import { createTestCluster, getCurrentConnection } from "@test-utils";
import {
  jsonEvent,
  KurrentDBClient,
  NotLeaderError,
  FOLLOWER,
  EndPoint,
} from "@kurrent/kurrentdb-client";

// This test can take time.
jest.setTimeout(120_000);

describe("reconnect", () => {
  test("NotLeaderError (should reconnect to leader)", async () => {
    const cluster = createTestCluster();

    await cluster.up();

    const client = KurrentDBClient.connectionString(
      cluster.connectionStringWithOverrides({
        defaultDeadline: 100_000_000,
        nodePreference: "follower",
      })
    );

    // make successful append to follower node
    const firstAppend = await client.appendToStream(
      "my_stream",
      jsonEvent({ type: "first-append", data: { message: "test" } }),
      // batch append triggers reconnect as soon as stream drops, so we need to force regular append
      { credentials: { username: "admin", password: "changeit" } }
    );
    expect(firstAppend).toBeDefined();

    let leader!: EndPoint;
    try {
      // state that append requires leader, causing failure
      const secondAppend = await client.appendToStream(
        "my_stream",
        jsonEvent({ type: "failed-append", data: { message: "test" } }),
        {
          requiresLeader: true,
          // batch append triggers reconnect as soon as stream drops, so we need to force regular append
          credentials: { username: "admin", password: "changeit" },
        }
      );
      expect(secondAppend).toBe("Unreachable");
    } catch (error) {
      expect(error).toBeInstanceOf(NotLeaderError);

      if (error instanceof NotLeaderError) {
        leader = error.leader;
      }
    }

    // next append should succeed, as it has connected to another node
    const reconnectedAppend = await client.appendToStream(
      "my_stream",
      jsonEvent({ type: "reconnect-append", data: { message: "test" } }),
      {
        requiresLeader: true,
        // batch append triggers reconnect as soon as stream drops, so we need to force regular append
        credentials: { username: "admin", password: "changeit" },
      }
    );
    expect(reconnectedAppend).toBeDefined();

    const { address, port } = await getCurrentConnection(client);

    expect(address).toEqual(leader.address);
    expect(port).toEqual(port);

    await cluster.down();
  });
});
