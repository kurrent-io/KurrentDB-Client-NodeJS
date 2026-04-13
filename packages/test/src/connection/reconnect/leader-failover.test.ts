import {
  collect,
  createTestCluster,
  delay,
  getCurrentConnection,
} from "@test-utils";
import {
  jsonEvent,
  KurrentDBClient,
  LEADER,
  FOLLOWER,
  START,
} from "@kurrent/kurrentdb-client";

jest.setTimeout(120_000);

describe("reconnect", () => {
  describe("leader failover - write operations (gRPC path)", () => {
    const cluster = createTestCluster();

    beforeAll(async () => {
      await cluster.up();
    });

    afterAll(async () => {
      await cluster.down();
    });

    test("should reconnect after leader is killed and resurrected as follower", async () => {
      // 1. Client connects to leader
      // 2. Leader goes down
      // 3. New leader elected
      // 4. Old leader comes back as follower
      // 5. Client should NOT reconnect to the old (now follower) node

      const client = KurrentDBClient.connectionString(
        cluster.connectionStringWithOverrides({
          nodePreference: LEADER,
          defaultDeadline: 100_000_000,
        })
      );

      // Establish connection to the current leader
      const firstAppend = await client.appendToStream(
        "resurrect-stream",
        jsonEvent({ type: "before-kill", data: { message: "test" } }),
        { credentials: { username: "admin", password: "changeit" } }
      );
      expect(firstAppend).toBeDefined();

      const leaderConnection = await getCurrentConnection(client);

      // Kill the leader
      await cluster.killNode(leaderConnection);
      await delay(5_000);

      // First operation should fail
      try {
        await client.appendToStream(
          "resurrect-stream",
          jsonEvent({ type: "should-fail", data: { message: "test" } }),
          { credentials: { username: "admin", password: "changeit" } }
        );
      } catch (error) {
        // Expected failure
      }

      // Resurrect the killed leader (it comes back as follower)
      await cluster.resurrect();
      await delay(5_000);

      // Subsequent operations should succeed on the new leader
      const afterResurrect = await client.appendToStream(
        "resurrect-stream",
        jsonEvent({
          type: "after-resurrect",
          data: { message: "test" },
        }),
        { credentials: { username: "admin", password: "changeit" } }
      );
      expect(afterResurrect).toBeDefined();
    });
  });

  describe("leader failover - read operations (Rust bridge path)", () => {
    const cluster = createTestCluster();

    beforeAll(async () => {
      await cluster.up();
    });

    afterAll(async () => {
      await cluster.down();
    });

    test("readStream with requiresLeader should reconnect after NotLeader", async () => {
      // This tests the Rust bridge code path, which does NOT go through
      // handleError() and therefore may not trigger reconnection.

      // Connect to a follower to reliably trigger NotLeader
      const client = KurrentDBClient.connectionString(
        cluster.connectionStringWithOverrides({
          nodePreference: FOLLOWER,
          defaultDeadline: 100_000_000,
        })
      );

      // Seed some data first (append doesn't require leader by default)
      await client.appendToStream(
        "read-reconnect-stream",
        [
          jsonEvent({ type: "seed-1", data: { i: 1 } }),
          jsonEvent({ type: "seed-2", data: { i: 2 } }),
          jsonEvent({ type: "seed-3", data: { i: 3 } }),
        ],
        { credentials: { username: "admin", password: "changeit" } }
      );

      // Read with requiresLeader: true should fail on follower
      try {
        const events = await collect(
          client.readStream("read-reconnect-stream", {
            maxCount: 10,
            fromRevision: START,
            requiresLeader: true,
          })
        );
        expect(events).toBe("unreachable");
      } catch (error) {
        // Expected: NotLeaderError from the Rust bridge
      }

      // The critical test: can we read successfully after the NotLeader error?
      // If the Rust bridge doesn't handle reconnection, this will fail
      // with the same NotLeader error
      const events = await collect(
        client.readStream("read-reconnect-stream", {
          maxCount: 10,
          fromRevision: START,
          requiresLeader: true,
        })
      );

      expect(events).toHaveLength(3);
    });

    test("readAll with requiresLeader should reconnect after NotLeader", async () => {
      // Same test but for readAll, which also goes through the Rust bridge

      const client = KurrentDBClient.connectionString(
        cluster.connectionStringWithOverrides({
          nodePreference: FOLLOWER,
          defaultDeadline: 100_000_000,
        })
      );

      // Read $all with requiresLeader: true should fail on follower
      try {
        const events = await collect(
          client.readAll({
            maxCount: 1,
            fromPosition: START,
            requiresLeader: true,
          })
        );
        expect(events).toBe("unreachable");
      } catch (error) {
        // Expected: NotLeaderError from the Rust bridge
      }

      // After the error, subsequent reads should work
      const events = await collect(
        client.readAll({
          maxCount: 1,
          fromPosition: START,
          requiresLeader: true,
        })
      );

      expect(events.length).toBeGreaterThanOrEqual(1);
    });

    test("readStream should keep working after leader node is killed", async () => {
      // Connect to leader, kill it, verify reads still work after reconnection.
      // The Rust bridge has its own connection, so after the first error triggers
      // internal reconnection, subsequent reads may need a couple of attempts
      // while the cluster stabilizes.

      const client = KurrentDBClient.connectionString(
        cluster.connectionStringWithOverrides({
          nodePreference: LEADER,
          defaultDeadline: 100_000_000,
        })
      );

      // Seed data
      await client.appendToStream(
        "read-failover-stream",
        [
          jsonEvent({ type: "seed-1", data: { i: 1 } }),
          jsonEvent({ type: "seed-2", data: { i: 2 } }),
        ],
        { credentials: { username: "admin", password: "changeit" } }
      );

      // Verify read works
      const beforeEvents = await collect(
        client.readStream("read-failover-stream", {
          maxCount: 10,
          fromRevision: START,
        })
      );
      expect(beforeEvents).toHaveLength(2);

      // Kill the leader
      const leaderConnection = await getCurrentConnection(client);
      await cluster.killNode(leaderConnection);
      await delay(5_000);

      // Read should fail (node is dead), triggering Rust client reconnection
      try {
        await collect(
          client.readStream("read-failover-stream", {
            maxCount: 10,
            fromRevision: START,
          })
        );
      } catch (error) {
        // Expected failure
      }

      // Resurrect and wait
      await cluster.resurrect();
      await delay(5_000);

      // The Rust client needs to re-discover after the error.
      // Allow a few attempts for the cluster to stabilize.
      let afterEvents;
      for (let attempt = 0; attempt < 5; attempt++) {
        try {
          afterEvents = await collect(
            client.readStream("read-failover-stream", {
              maxCount: 10,
              fromRevision: START,
            })
          );
          break;
        } catch {
          await delay(2_000);
        }
      }

      expect(afterEvents).toHaveLength(2);
    });

    test("repeated reads with requiresLeader should not get permanently stuck", async () => {
      // Multiple sequential reads all failing with NotLeader
      // without recovery, even though the first error should trigger reconnection

      const client = KurrentDBClient.connectionString(
        cluster.connectionStringWithOverrides({
          nodePreference: FOLLOWER,
          defaultDeadline: 100_000_000,
        })
      );

      // Seed data
      await client.appendToStream(
        "stuck-read-stream",
        jsonEvent({ type: "seed", data: { message: "test" } }),
        { credentials: { username: "admin", password: "changeit" } }
      );

      // First read with requiresLeader triggers NotLeader
      try {
        await collect(
          client.readStream("stuck-read-stream", {
            maxCount: 10,
            fromRevision: START,
            requiresLeader: true,
          })
        );
      } catch (error) {
        // Expected
      }

      // Now make 10 sequential reads, all requiring leader
      // If the Rust bridge is stuck, ALL of these will fail
      for (let i = 0; i < 10; i++) {
        const events = await collect(
          client.readStream("stuck-read-stream", {
            maxCount: 10,
            fromRevision: START,
            requiresLeader: true,
          })
        );
        expect(events).toHaveLength(1);
      }
    });
  });

  describe("concurrent operations during NotLeader", () => {
    const cluster = createTestCluster();
    let client!: KurrentDBClient;

    beforeAll(async () => {
      await cluster.up();
    });

    afterAll(async () => {
      await cluster.down();
    });

    test("multiple rapid write operations after NotLeader should all eventually succeed", async () => {
      // Connect to a follower to reliably trigger NotLeader errors
      client = KurrentDBClient.connectionString(
        cluster.connectionStringWithOverrides({
          nodePreference: FOLLOWER,
          defaultDeadline: 100_000_000,
        })
      );

      // First append succeeds (goes to follower, no requiresLeader)
      const firstAppend = await client.appendToStream(
        "concurrent-stream",
        jsonEvent({ type: "setup", data: { message: "test" } }),
        { credentials: { username: "admin", password: "changeit" } }
      );
      expect(firstAppend).toBeDefined();

      // Trigger NotLeader error with requiresLeader
      try {
        await client.appendToStream(
          "concurrent-stream",
          jsonEvent({ type: "trigger-not-leader", data: {} }),
          {
            requiresLeader: true,
            credentials: { username: "admin", password: "changeit" },
          }
        );
        expect("should not reach").toBe("here");
      } catch (error) {
        // Expected: NotLeaderError triggers reconnection
      }

      // Now fire multiple operations rapidly in parallel
      // If handleError has a race condition, some of these could fail
      const results = await Promise.allSettled([
        client.appendToStream(
          "concurrent-stream",
          jsonEvent({ type: "concurrent-1", data: {} }),
          {
            requiresLeader: true,
            credentials: { username: "admin", password: "changeit" },
          }
        ),
        client.appendToStream(
          "concurrent-stream",
          jsonEvent({ type: "concurrent-2", data: {} }),
          {
            requiresLeader: true,
            credentials: { username: "admin", password: "changeit" },
          }
        ),
        client.appendToStream(
          "concurrent-stream",
          jsonEvent({ type: "concurrent-3", data: {} }),
          {
            requiresLeader: true,
            credentials: { username: "admin", password: "changeit" },
          }
        ),
      ]);

      // All operations should succeed since the client should have
      // reconnected to the leader after the first NotLeader error
      for (const result of results) {
        expect(result.status).toBe("fulfilled");
      }
    });

    test("mixed read and write operations after NotLeader", async () => {
      // Tests that both code paths (gRPC writes and Rust bridge reads)
      // recover after a NotLeader error.
      // The gRPC channel and Rust bridge have independent connections,
      // so each must encounter and recover from NotLeader separately.

      client = KurrentDBClient.connectionString(
        cluster.connectionStringWithOverrides({
          nodePreference: FOLLOWER,
          defaultDeadline: 100_000_000,
        })
      );

      // Seed data
      await client.appendToStream(
        "mixed-ops-stream",
        jsonEvent({ type: "seed", data: { i: 1 } }),
        { credentials: { username: "admin", password: "changeit" } }
      );

      // Trigger NotLeader via write (reconnects gRPC channel)
      try {
        await client.appendToStream(
          "mixed-ops-stream",
          jsonEvent({ type: "trigger", data: {} }),
          {
            requiresLeader: true,
            credentials: { username: "admin", password: "changeit" },
          }
        );
      } catch (error) {
        // Expected
      }

      // Trigger NotLeader on the Rust bridge too (it has its own connection)
      try {
        await collect(
          client.readStream("mixed-ops-stream", {
            maxCount: 10,
            fromRevision: START,
            requiresLeader: true,
          })
        );
      } catch (error) {
        // Expected: Rust bridge is still on follower
      }

      // Now both code paths have reconnected — reads should work
      const events = await collect(
        client.readStream("mixed-ops-stream", {
          maxCount: 10,
          fromRevision: START,
          requiresLeader: true,
        })
      );

      expect(events).toHaveLength(1);
    });
  });
});
