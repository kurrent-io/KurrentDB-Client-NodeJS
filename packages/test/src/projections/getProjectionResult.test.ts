/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  createTestNode,
  delay,
  jsonTestEvents,
  matchServerVersion,
} from "@test-utils";

import {
  RUNNING,
  KurrentDBClient,
  jsonEvent,
  NotFoundError,
  UnknownError,
} from "@kurrent/kurrentdb-client";

describe("getProjectionResult", () => {
  const node = createTestNode();
  let client!: KurrentDBClient;

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());

    await client.enableProjection("$by_category");
  });

  afterAll(async () => {
    await node.down();
  });

  describe("gets the result of a projection", () => {
    test("without partition", async () => {
      const PROJECTION_NAME = "count events";
      const EVENT_TYPE = "count_this";
      const STREAM_NAME = "some_stream_name";
      const projection = `
        fromStream("${STREAM_NAME}")
          .when({
            $init() {
              return 0;
            },
            ${EVENT_TYPE}(state, event) {
              return state + 1
            }
          });
    `;

      const count = 12;

      await client.createProjection(PROJECTION_NAME, projection);

      await client.appendToStream(
        STREAM_NAME,
        jsonTestEvents(count, EVENT_TYPE)
      );

      await delay(5000);

      const state = await client.getProjectionResult<number>(PROJECTION_NAME);

      expect(state).toBe(count);
    });

    test("with partition", async () => {
      const PARTITION_PROJECTION_NAME = "partition_projection";
      const COUNTER_PROJECTION_NAME = "cat_activity_counter";

      const STREAM_NAME = "What cat is doing";

      const NAPPED_EVENT = "napped";
      const SNACKED_EVENT = "snacked";

      type CatActivity = typeof NAPPED_EVENT | typeof SNACKED_EVENT;
      type CatCounter = Record<CatActivity, number>;

      const SMUDGES = "Smudges";
      const PEANUT_BUTTER = "PeanutButter";
      const MR_WHISKERS = "MrWhiskers";

      const paritionProjection = `
        fromStream("${STREAM_NAME}")
          .when({
            $any: function(state, ev) {
              linkTo('cat-' + ev.data.catName, ev)
            }
          });
      `;

      const countProjection = `
        fromCategory('cat')
          .foreachStream()
          .when({
            "$init": function(state, ev) {
              return { naps: 0, snacks: 0 };
            },
            "${NAPPED_EVENT}": function(state, ev) {
              state.naps++;
            },
            "${SNACKED_EVENT}": function(state, ev) {
              state.snacks++;
            }
          });
      `;

      const createCatEvent = (catName: string, type: string) => {
        return jsonEvent({
          type,
          data: {
            catName,
          },
        });
      };

      await client.createProjection(
        PARTITION_PROJECTION_NAME,
        paritionProjection,
        { emitEnabled: true }
      );

      const partitionStats = await client.getProjectionStatus(
        PARTITION_PROJECTION_NAME
      );

      expect(partitionStats.projectionStatus).toBe(RUNNING);

      await client.createProjection(COUNTER_PROJECTION_NAME, countProjection);

      const counterStats = await client.getProjectionStatus(
        COUNTER_PROJECTION_NAME
      );

      expect(counterStats.projectionStatus).toBe(RUNNING);

      const byCategoryStats = await client.getProjectionStatus("$by_category");

      expect(byCategoryStats.projectionStatus).toBe(RUNNING);

      await client.appendToStream(STREAM_NAME, [
        createCatEvent(MR_WHISKERS, NAPPED_EVENT),
        createCatEvent(SMUDGES, NAPPED_EVENT),
        createCatEvent(MR_WHISKERS, SNACKED_EVENT),
        createCatEvent(PEANUT_BUTTER, NAPPED_EVENT),
        createCatEvent(MR_WHISKERS, NAPPED_EVENT),
        createCatEvent(PEANUT_BUTTER, SNACKED_EVENT),
      ]);

      await delay(5000);

      const result = await client.getProjectionResult<CatCounter>(
        COUNTER_PROJECTION_NAME,
        { partition: `cat-${MR_WHISKERS}` }
      );

      expect(result).toMatchObject({
        naps: 2,
        snacks: 1,
      });
    });
  });

  describe("errors", () => {
    test("projection doesnt exist", async () => {
      const PROJECTION_NAME = "doesnt exist";

      await expect(
        client.getProjectionResult(PROJECTION_NAME)
      ).rejects.toThrowError(
        matchServerVersion`>=24.6` ? NotFoundError : UnknownError
      );
    });
  });
});
