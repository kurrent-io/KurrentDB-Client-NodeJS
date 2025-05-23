/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode, matchServerVersion } from "@test-utils";

import {
  ABORTED,
  KurrentDBClient,
  NotFoundError,
  RUNNING,
  STOPPED,
  UnknownError,
} from "@kurrent/kurrentdb-client";

describe("enableProjection", () => {
  const node = createTestNode();
  let client!: KurrentDBClient;

  const projection = `
  fromAll()
    .when({
      $init: function (state, ev) {
        return {
          last: ev,
        };
      },
    });
  `;

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());
  });

  afterAll(async () => {
    await node.down();
  });

  test("enables the projection", async () => {
    const PROJECTION_NAME = "projection_to_enable";

    await client.createProjection(PROJECTION_NAME, projection);

    await client.disableProjection(PROJECTION_NAME);

    const beforeDetails = await client.getProjectionStatus(PROJECTION_NAME);

    expect(beforeDetails).toBeDefined();

    if (matchServerVersion`>=21.10`) {
      expect(beforeDetails.projectionStatus).toBe(STOPPED);
    } else {
      // Incorrect projection status was switched (ABORTED -> STOPPED) in
      // https://github.com/kurrent-io/EventStore/pull/2944
      expect([STOPPED, ABORTED]).toContain(beforeDetails.projectionStatus);
    }

    await client.enableProjection(PROJECTION_NAME);

    const afterDetails = await client.getProjectionStatus(PROJECTION_NAME);

    expect(afterDetails).toBeDefined();
    expect(afterDetails.projectionStatus).toBe(RUNNING);
  });

  test("projection doesnt exist", async () => {
    const PROJECTION_NAME = "doesnt exist";

    await expect(client.enableProjection(PROJECTION_NAME)).rejects.toThrowError(
      matchServerVersion`>=24.6` ? NotFoundError : UnknownError
    );
  });
});
