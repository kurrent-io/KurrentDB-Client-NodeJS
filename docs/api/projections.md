---
order: 6
title: Projections
---

# Projection management

The client provides a way to manage projections in EventStoreDB. 

For a detailed explanation of projections, see the [server documentation](@server/features/projections/README.md).


## Create a projection

Creates a projection that runs until the last event in the store, and then continues processing new events as they are appended to the store. The query parameter contains the JavaScript you want created as a projection.
Projections have explicit names, and you can enable or disable them via this name.

```ts
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
      .outputState()`;

await client.createProjection(name, projection);
```

Trying to create projections with the same name will result in an error:

```ts
try {
  await client.createProjection(name, projection);
} catch (err) {
  if (!isCommandError(err) || !err.message.includes("Conflict"))
    throw err;
  console.log(`${name} already exists`);
}
```

## Restart the subsystem

It is possible to restart the entire projection subsystem using the projections management client API. The user must be in the `$ops` or `$admin` group to perform this operation.

```ts
await client.restartSubsystem();
```

## Enable a projection

This Enables an existing projection by name. Once enabled, the projection will
start to process events even after restarting the server or the projection
subsystem. You must have access to a projection to enable it, see the [ACL documentation](@server/security/user-authorization.md).

```ts
await client.enableProjection("$by_category");
```

You can only enable an existing projection. When you try to enable a non-existing projection, you'll get an error:

 ```ts
const projectionName = "projection that does not exist";

try {
  await client.enableProjection(projectionName);
} catch (err) {
  if (!isCommandError(err) || !err.message.includes("NotFound"))
    throw err;
  console.log(`${projectionName} does not exist`);
}
```

## Disable a projection

Disables a projection, this will save the projection checkpoint.
Once disabled, the projection will not process events even after restarting the server or the projection subsystem.
You must have access to a projection to disable it, see the [ACL documentation](@server/security/user-authorization.md).

```ts
await client.disableProjection("$by_category");
```

You can only disable an existing projection. When you try to disable a non-existing projection, you'll get an error:

```ts
const projectionName = "projection that does not exist";

try {
  await client.disableProjection(projectionName);
} catch (err) {
  if (!isCommandError(err) || !err.message.includes("NotFound"))
    throw err;
  console.log(`${projectionName} does not exist`);
}
```

## Delete a projection

```ts
// A projection must be disabled to allow it to be deleted.
await client.disableProjection(name);

// The projection can now be deleted
await client.deleteProjection(name);
```

## Abort a projection

Aborts a projection, this will not save the projection's checkpoint.

```ts
await client.abortProjection(name);
```

You can only abort an existing projection. When you try to abort a non-existing projection, you'll get an error:

```ts
try {
    client.abort("projection that does not exists").get();
} catch (ExecutionException ex) {
    if (ex.getMessage().contains("NotFound")) {
        System.out.println(ex.getMessage());
    }
}
```

## Reset a projection

Resets a projection, which causes deleting the projection checkpoint. This will force the projection to start afresh and re-emit events. Streams that are written to from the projection will also be soft-deleted.

```ts
await client.resetProjection(name);
```

Resetting a projection that does not exist will result in an error.

```ts
const projectionName = "projection that does not exist";

try {
  await client.resetProjection(projectionName);
} catch (err) {
  if (!isCommandError(err) || !err.message.includes("NotFound"))
    throw err;
  console.log(`${projectionName} does not exist`);
}
```

## Update a projection

Updates a projection with a given name. The query parameter contains the new JavaScript. Updating system projections using this operation is not supported at the moment.

```ts
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
      .outputState()`;

await client.createProjection(name, "fromAll().when()");
await client.updateProjection(name, projection);
```

You can only update an existing projection. When you try to update a non-existing projection, you'll get an error:

```ts
const projectionName = "projection that does not exist";

try {
  await client.updateProjection(projectionName, "fromAll().when()");
} catch (err) {
  if (!isCommandError(err) || !err.message.includes("NotFound"))
    throw err;
  console.log(`${projectionName} does not exist`);
}
```

## List all projections

Returns a list of all projections, user defined & system projections.
See the [projection details](#projection-details) section for an explanation of the returned values.

::: note
This is currently not available in the nodejs client
::: 

## List continuous projections

Returns a list of all continuous projections.
See the [projection details](#projection-details) section for an explanation of the returned values.

```ts
const projections = await client.listProjections();

for (const { name, status, checkpointStatus, progress } of projections) {
  console.log(name, status, checkpointStatus, progress);
}
```

## Get status

Gets the status of a named projection.
See the [projection details](#projection-details) section for an explanation of the returned values.

```ts
const projection = await client.getProjectionStatus(name);

console.log(
  projection.name,
  projection.status,
  projection.checkpointStatus,
  projection.progress
);
```

## Get state

Retrieves the state of a projection.

```ts
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
      .outputState()`;


await client.createProjection(name, projection);

// Give it some time to count event
await delay(500);

const state = await client.getProjectionState<CountProjectionState>(name);

console.log(`Counted ${state.count} events.`);
```

## Get result

Retrieves the result of the named projection and partition.

```ts
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
      .outputState()`;


await client.createProjection(name, projection);

// Give it some time to have a result.
await delay(500);

const result = await client.getProjectionResult<number>(name);

console.log(`Counted ${result} events.`);
```

## Projection Details

The `list`, and `getStatus` methods return detailed statistics and information
about projections. Below is an explanation of the fields included in the
projection details:

| Field                                | Description                                                                                                                                                                                           |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`, `effectiveName`              | The name of the projection                                                                                                                                                                            |
| `status`                             | A human readable string of the current statuses of the projection (see below)                                                                                                                         |
| `stateReason`                        | A human readable string explaining the reason of the current projection state                                                                                                                         |
| `checkpointStatus`                   | A human readable string explaining the current operation performed on the checkpoint : `requested`, `writing`                                                                                         |
| `mode`                               | `Continuous`, `OneTime` , `Transient`                                                                                                                                                                 |
| `coreProcessingTime`                 | The total time, in ms, the projection took to handle events since the last restart                                                                                                                    |
| `progress`                           | The progress, in %, indicates how far this projection has processed event, in case of a restart this could be -1% or some number. It will be updated as soon as a new event is appended and processed |
| `writesInProgress`                   | The number of write requests to emitted streams currently in progress, these writes can be batches of events                                                                                          |
| `readsInProgress`                    | The number of read requests currently in progress                                                                                                                                                     |
| `partitionsCached`                   | The number of cached projection partitions                                                                                                                                                            |
| `position`                           | The Position of the last processed event                                                                                                                                                              |
| `lastCheckpoint`                     | The Position of the last checkpoint of this projection                                                                                                                                                |
| `eventsProcessedAfterRestart`        | The number of events processed since the last restart of this projection                                                                                                                              |
| `bufferedEvents`                     | The number of events in the projection read buffer                                                                                                                                                    |
| `writePendingEventsBeforeCheckpoint` | The number of events waiting to be appended to emitted streams before the pending checkpoint can be written                                                                                           |
| `writePendingEventsAfterCheckpoint`  | The number of events to be appended to emitted streams since the last checkpoint                                                                                                                      |
| `version`                            | This is used internally, the version is increased when the projection is edited or reset                                                                                                              |
| `epoch`                              | This is used internally, the epoch is increased when the projection is reset                                                                                                                          |

The `status` string is a combination of the following values.

The first 3 are the most common one, as the other one are transient values while
the projection is initialised or stopped

| Value              | Description                                                                                                             |
|--------------------|-------------------------------------------------------------------------------------------------------------------------|
| Running            | The projection is running and processing events                                                                         |
| Stopped            | The projection is stopped and is no longer processing new events                                                        |
| Faulted            | An error occurred in the projection, `StateReason` will give the fault details, the projection is not processing events |
| Initial            | This is the initial state, before the projection is fully initialised                                                   |
| Suspended          | The projection is suspended and will not process events, this happens while stopping the projection                     |
| LoadStateRequested | The state of the projection is being retrieved, this happens while the projection is starting                           |
| StateLoaded        | The state of the projection is loaded, this happens while the projection is starting                                    |
| Subscribed         | The projection has successfully subscribed to its readers, this happens while the projection is starting                |
| FaultedStopping    | This happens before the projection is stopped due to an error in the projection                                         |
| Stopping           | The projection is being stopped                                                                                         |
| CompletingPhase    | This happens while the projection is stopping                                                                           |
| PhaseCompleted     | This happens while the projection is stopping                                                                           |
