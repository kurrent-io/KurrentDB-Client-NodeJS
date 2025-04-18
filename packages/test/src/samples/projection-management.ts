/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { v4 as uuid } from "uuid";

import { KurrentDBClient, isCommandError } from "@kurrent/kurrentdb-client";
import {
  createTestNode,
  delay,
  jsonTestEvents,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";

optionalDescribe(matchServerVersion`<=23.10`)(
  "[sample] projection-management",
  () => {
    const noop = (...args: unknown[]) => {
      // do nothing
    };
    const node = createTestNode();
    const log = console.log;

    let client!: KurrentDBClient;

    const createTestProjection = async (
      name: string = uuid(),
      retry = 5
    ): Promise<string> => {
      try {
        await client.createProjection(name, "fromAll().when()");
      } catch (error) {
        if (retry > 0) return createTestProjection(name, retry - 1);
        throw error;
      }

      return name;
    };

    beforeAll(async () => {
      await node.up();

      client = KurrentDBClient.connectionString(node.connectionString());

      await client.appendToStream("some-stream", jsonTestEvents());
      console.log = jest.fn(log);
    });

    afterAll(async () => {
      console.log = log;
      await node.down();
    });

    afterEach(() => {
      (console.log as jest.Mock).mockReset();
    });

    test("createClient", async () => {
      const ENDPOINT = node.uri;
      const ADMIN = "admin";
      const PASSWORD = "changeit";

      // region createClient
      const client = KurrentDBClient.connectionString`
        esdb+discover://${ADMIN}:${PASSWORD}@${ENDPOINT}?nodePreference=leader
    `;
      // endregion createClient

      noop(client);
    });

    test("CreateContinuous", async () => {
      // region CreateContinuous
      const name = `countEvents_Create_${uuid()}`;
      const projection = `
        fromAll()
            .when({
                $init() {
                    return {
                        count: 0,
                    };
                },
                $any(s, e) {
                    s.count += 1;
                }
            })
            .outputState();
    `;
      await client.createProjection(name, projection);
      // endregion CreateContinuous

      // region CreateContinuous_Conflict
      try {
        await client.createProjection(name, projection);
      } catch (err) {
        if (!isCommandError(err) || !err.message.includes("Conflict"))
          throw err;
        console.log(`${name} already exists`);
      }
      // endregion CreateContinuous_Conflict

      expect(console.log).toHaveBeenCalledTimes(1);
    });

    test("Enable", async () => {
      // region Enable
      await client.enableProjection("$by_category");
      // endregion Enable
    });

    test("EnableNotFound", async () => {
      // region EnableNotFound
      const projectionName = "projection that does not exist";

      try {
        await client.enableProjection(projectionName);
      } catch (err) {
        if (!isCommandError(err) || !err.message.includes("NotFound"))
          throw err;
        console.log(`${projectionName} does not exist`);
      }
      // endregion EnableNotFound
      expect(console.log).toHaveBeenCalledTimes(1);
    });

    test("Disable", async () => {
      // region Disable
      await client.disableProjection("$by_category");
      // endregion Disable
    });

    test("DisableNotFound", async () => {
      // region DisableNotFound
      const projectionName = "projection that does not exist";

      try {
        await client.disableProjection(projectionName);
      } catch (err) {
        if (!isCommandError(err) || !err.message.includes("NotFound"))
          throw err;
        console.log(`${projectionName} does not exist`);
      }
      // endregion DisableNotFound
      expect(console.log).toHaveBeenCalledTimes(1);
    });

    test("Delete", async () => {
      const name = await createTestProjection();

      // before https://github.com/kurrent-io/EventStore/pull/2944
      // writeCheckpoint had to be false (abort) to stop the projection
      await client.abortProjection(name);

      // region Delete
      // A projection must be disabled to allow it to be deleted.
      await client.disableProjection(name);

      // The projection can now be deleted
      await client.deleteProjection(name);
      // endregion Delete
    });

    test("DeleteNotFound", async () => {
      // region DeleteNotFound
      const projectionName = "projection that does not exist";

      try {
        await client.deleteProjection(projectionName);
      } catch (err) {
        if (!isCommandError(err) || !err.message.includes("NotFound"))
          throw err;
        console.log(`${projectionName} does not exist`);
      }
      // endregion DeleteNotFound
      expect(console.log).toHaveBeenCalledTimes(1);
    });

    test("Abort", async () => {
      const name = await createTestProjection();

      // region Abort
      await client.abortProjection(name);
      // endregion Abort
    });

    test("Abort_NotFound", async () => {
      // region Abort_NotFound
      const projectionName = "projection that does not exist";

      try {
        await client.abortProjection(projectionName);
      } catch (err) {
        if (!isCommandError(err) || !err.message.includes("NotFound"))
          throw err;
        console.log(`${projectionName} does not exist`);
      }
      // endregion Abort_NotFound
      expect(console.log).toHaveBeenCalledTimes(1);
    });

    test("Reset", async () => {
      const name = await createTestProjection();

      // region Reset
      await client.resetProjection(name);
      // endregion Reset
    });

    test("Reset_NotFound", async () => {
      // region Reset_NotFound
      const projectionName = "projection that does not exist";

      try {
        await client.resetProjection(projectionName);
      } catch (err) {
        if (!isCommandError(err) || !err.message.includes("NotFound"))
          throw err;
        console.log(`${projectionName} does not exist`);
      }
      // endregion Reset_NotFound
      expect(console.log).toHaveBeenCalledTimes(1);
    });

    test("Update", async () => {
      // region Update
      const name = `countEvents_Update_${uuid()}`;
      const projection = `
        fromAll()
            .when({
                $init() {
                    return {
                        count: 0,
                    };
                },
                $any(s, e) {
                    s.count += 1;
                }
            })
            .outputState();
    `;
      await client.createProjection(name, "fromAll().when()");
      await client.updateProjection(name, projection);
      // endregion Update
    });

    test("Update_NotFound", async () => {
      // region Update_NotFound
      const projectionName = "projection that does not exist";

      try {
        await client.updateProjection(projectionName, "fromAll().when()");
      } catch (err) {
        if (!isCommandError(err) || !err.message.includes("NotFound"))
          throw err;
        console.log(`${projectionName} does not exist`);
      }
      // endregion Update_NotFound
      expect(console.log).toHaveBeenCalledTimes(1);
    });

    test("ListAll", async () => {
      // region ListAll
      // This is currently not available in the nodejs client
      // endregion ListAll
    });

    test("ListContinuous", async () => {
      // region ListContinuous
      const projections = await client.listProjections();

      for (const { name, status, checkpointStatus, progress } of projections) {
        console.log(name, status, checkpointStatus, progress);
      }
      // endregion ListContinuous
    });

    test("GetStatus", async () => {
      const name = await createTestProjection();

      // region GetStatus
      const projection = await client.getProjectionStatus(name);

      console.log(
        projection.name,
        projection.status,
        projection.checkpointStatus,
        projection.progress
      );
      // endregion GetStatus
    });

    test("GetState", async () => {
      // region GetState
      interface CountProjectionState {
        count: number;
      }

      const name = `get_state_example`;
      const projection = `
        fromAll()
            .when({
                $init() {
                    return {
                        count: 0,
                    };
                },
                $any(s, e) {
                    s.count += 1;
                }
            })
            .transformBy((state) => state.count)
            .outputState();
    `;

      await client.createProjection(name, projection);

      // Give it some time to count event
      await delay(500);

      const state = await client.getProjectionState<CountProjectionState>(name);

      console.log(`Counted ${state.count} events.`);
      // endregion GetState

      expect(console.log).toBeCalledTimes(1);
      expect(typeof state.count).toBe("number");
    });

    test("GetResult", async () => {
      // region GetResult
      const name = `get_result_example`;
      const projection = `
        fromAll()
            .when({
                $init() {
                    return {
                        count: 0,
                    };
                },
                $any(s, e) {
                    s.count += 1;
                }
            })
            .transformBy((state) => state.count)
            .outputState();
    `;

      await client.createProjection(name, projection);

      // Give it some time to have a result.
      await delay(500);

      const result = await client.getProjectionResult<number>(name);

      console.log(`Counted ${result} events.`);
      // endregion GetResult
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(typeof result).toBe("number");
    });

    test("RestartSubSystem", async () => {
      // region RestartSubSystem
      await client.restartSubsystem();
      // endregion RestartSubSystem
    });
  }
);
