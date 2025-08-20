import { createTestNode } from "@test-utils";

import {
  KurrentDBClient,
  PersistentSubscriptionExistsError,
  persistentSubscriptionToStreamSettingsFromDefaults,
  PINNED_BY_CORRELATION,
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

    test.only("valid consumer strategy", async () => {
      const STREAM_NAME = "stream_name_from_revision";
      const GROUP_NAME = "group_name_valid_consumer_strategy";
      await expect(
        client.createPersistentSubscriptionToStream(
          STREAM_NAME,
          GROUP_NAME,
          persistentSubscriptionToStreamSettingsFromDefaults({
            consumerStrategyName: PINNED_BY_CORRELATION,
          })
        )
      ).resolves.toBeUndefined();

      let persistentSubscriptions =
        await client.listAllPersistentSubscriptions();

      persistentSubscriptions = persistentSubscriptions.filter(
        (ps) => ps.groupName === GROUP_NAME && ps.eventSource === STREAM_NAME
      );

      expect(persistentSubscriptions).toHaveLength(1);
      expect(persistentSubscriptions[0].eventSource).toBe(STREAM_NAME);
      expect(persistentSubscriptions[0].settings.consumerStrategyName).toBe(
        PINNED_BY_CORRELATION
      );
    });

    test("invalid consumer strategy", async () => {
      const STREAM_NAME = "stream_name_from_revision";
      const GROUP_NAME = "group_name_invalid_consumer_strategy";
      await expect(
        client.createPersistentSubscriptionToStream(
          STREAM_NAME,
          GROUP_NAME,
          persistentSubscriptionToStreamSettingsFromDefaults({
            consumerStrategyName: "strategy_does_not_exists",
          })
        )
      ).rejects.toThrow(Error);
    });
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
