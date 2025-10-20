import { createTestNode } from "@test-utils";

import {
  DISPATCH_TO_SINGLE,
  KurrentDBClient,
  PersistentSubscriptionExistsError,
  persistentSubscriptionToStreamSettingsFromDefaults,
  PINNED,
  PINNED_BY_CORRELATION,
  ROUND_ROBIN,
  START,
} from "@kurrent/kurrentdb-client";

describe("createPersistentSubscriptionToStream", () => {
  const node = createTestNode();
  let client!: KurrentDBClient;

  beforeAll(async () => {
    await node.up();

    client = KurrentDBClient.connectionString(node.connectionString());
  });

  afterAll(async () => {
    await node.down();
  });

  describe("should create a persistent subscription", () => {
    test("from start", async () => {
      const STREAM_NAME = "stream_name_from_start";
      const GROUP_NAME = "group_name_from_start";
      await expect(
        client.createPersistentSubscriptionToStream(
          STREAM_NAME,
          GROUP_NAME,
          persistentSubscriptionToStreamSettingsFromDefaults({
            startFrom: START,
          })
        )
      ).resolves.toBeUndefined();
    });

    test("from end", async () => {
      const STREAM_NAME = "stream_name_from_end";
      const GROUP_NAME = "group_name_from_end";
      await expect(
        client.createPersistentSubscriptionToStream(
          STREAM_NAME,
          GROUP_NAME,
          persistentSubscriptionToStreamSettingsFromDefaults() // end is default
        )
      ).resolves.toBeUndefined();
    });

    test("from revision", async () => {
      const STREAM_NAME = "stream_name_from_revision";
      const GROUP_NAME = "group_name_from_revision";
      await expect(
        client.createPersistentSubscriptionToStream(
          STREAM_NAME,
          GROUP_NAME,
          persistentSubscriptionToStreamSettingsFromDefaults({
            startFrom: BigInt(1),
          })
        )
      ).resolves.toBeUndefined();
    });

    test.each([PINNED_BY_CORRELATION, PINNED, ROUND_ROBIN, DISPATCH_TO_SINGLE])(
      "consumer strategy: %s",
      async (strategy) => {
        const STREAM_NAME = `stream_name_from_revision_${strategy.toLowerCase()}`;
        const GROUP_NAME = `group_name_valid_consumer_strategy_${strategy.toLowerCase()}`;
        await expect(
          client.createPersistentSubscriptionToStream(
            STREAM_NAME,
            GROUP_NAME,
            persistentSubscriptionToStreamSettingsFromDefaults({
              consumerStrategyName: strategy,
            })
          )
        ).resolves.toBeUndefined();

        let persistentSubscription =
          await client.getPersistentSubscriptionToStreamInfo(
            STREAM_NAME,
            GROUP_NAME
          );

        expect(persistentSubscription.eventSource).toBe(STREAM_NAME);
        expect(persistentSubscription.settings.consumerStrategyName).toBe(
          strategy
        );
      }
    );
  });

  test("should throw an error if subscription exists", async () => {
    const STREAM_NAME = "stream_name_already_exists";
    const GROUP_NAME = "group_name_already_exists";

    await expect(
      client.createPersistentSubscriptionToStream(
        STREAM_NAME,
        GROUP_NAME,
        persistentSubscriptionToStreamSettingsFromDefaults()
      )
    ).resolves.toBeUndefined();

    await expect(
      client.createPersistentSubscriptionToStream(
        STREAM_NAME,
        GROUP_NAME,
        persistentSubscriptionToStreamSettingsFromDefaults()
      )
    ).rejects.toThrowError(PersistentSubscriptionExistsError);
  });
});
