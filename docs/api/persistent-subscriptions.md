---
order: 5
head:
  - - title
    - {}
    - Persistent Subscriptions | NodeJS | Clients | Kurrent Docs
---

# Persistent Subscriptions

Persistent subscriptions are similar to catch-up subscriptions, but there are two key differences:

- The subscription checkpoint is maintained by the server. It means that when
your client reconnects to the persistent subscription, it will automatically
resume from the last known position.
- It's possible to connect more than one event consumer to the same persistent
subscription. In that case, the server will load-balance the consumers,
depending on the defined strategy, and distribute the events to them.

Because of those, persistent subscriptions are defined as subscription groups
that are defined and maintained by the server. Consumer then connect to a
particular subscription group, and the server starts sending event to the
consumer.

You can read more about persistent subscriptions in the [server documentation](@server/features/persistent-subscriptions.md).

## Creating a Subscription Group

The first step in working with a persistent subscription is to create a
subscription group. Note that attempting to create a subscription group multiple
times will result in an error. Admin permissions are required to create a
persistent subscription group.

The following examples demonstrate how to create a subscription group for a
persistent subscription. You can subscribe to a specific stream or to the `$all`
stream, which includes all events.

### Subscribing to a Specific Stream

```ts
import { persistentSubscriptionToStreamSettingsFromDefaults } from "@eventstore/db-client";

await client.createPersistentSubscriptionToStream(
  "stream-name",
  "group-name",
  persistentSubscriptionToStreamSettingsFromDefaults()
);
```

### Subscribing to `$all`

```ts
import { persistentSubscriptionToAllSettingsFromDefaults, streamNameFilter } from "@eventstore/db-client";

await client.createPersistentSubscriptionToAll(
  "group-name",
  persistentSubscriptionToAllSettingsFromDefaults(),
  {
    filter: streamNameFilter({ prefixes: ["test"] })
  }
);
```

::: note
As from EventStoreDB 21.10, the ability to subscribe to `$all` supports
[server-side filtering](subscriptions.md#server-side-filtering). You can create
a subscription group for `$all` similarly to how you would for a specific
stream:
:::

## Connecting a consumer

Once you have created a subscription group, clients can connect to it. A
subscription in your application should only have the connection in your code,
you should assume that the subscription already exists.

The most important parameter to pass when connecting is the buffer size. This
represents how many outstanding messages the server should allow this client. If
this number is too small, your subscription will spend much of its time idle as
it waits for an acknowledgment to come back from the client. If it's too big,
you waste resources and can start causing time out messages depending on the
speed of your processing.

### Connecting to one stream

The code below shows how to connect to an existing subscription group for a specific stream:

```ts
import { PARK } from "@eventstore/db-client";

const subscription = client.subscribeToPersistentSubscriptionToStream("stream-name", "group-name");

try {
  for await (const event of subscription) {
    try {
      console.log(`handling event ${event.event?.type} with retryCount ${event.retryCount}`);

      // handle event

      await subscription.ack(event);
    } catch (error) {
      await subscription.nack(PARK, error.toString(), event);
    }
  }
} catch (error) {
  console.log(`Subscription was dropped. ${error}`);
}
```

### Connecting to $all

The code below shows how to connect to an existing subscription group for `$all`:

```ts
const subscription = client.subscribeToPersistentSubscriptionToAll("group-name");

try {
  for await (const event of subscription) {
    console.log(`handling event ${event.event?.type} with retryCount ${event.retryCount}`);

    // handle event

    await subscription.ack(event);
  }
} catch (error) {
  console.log(`Subscription was dropped. ${error}`);
}
```

The `subscribeToPersistentSubscriptionToAll` method is identical to the `subscribeToPersistentSubscriptionToStream` method, except that you don't need to specify a stream name.

## Acknowledgements

Clients must acknowledge (or not acknowledge) messages in the competing consumer model.

If processing is successful, you must send an Ack (acknowledge) to the server to
let it know that the message has been handled. If processing fails for some
reason, then you can Nack (not acknowledge) the message and tell the server how
to handle the failure.

```ts
import { PARK } from "@eventstore/db-client";

const subscription = client.subscribeToPersistentSubscriptionToStream("stream-name", "group-name");

try {
  for await (const event of subscription) {
    try {
      console.log(
        `handling event ${event.event?.type} with retryCount ${event.retryCount}`
      );

      // handle event

      await subscription.ack(event);
    } catch (error) {
      await subscription.nack(PARK, error.toString(), event);
    }
  }
} catch (error) {
  console.log(`Subscription was dropped. ${error}`);
}
```

The _Nack event action_ describes what the server should do with the message:

| Action    | Description                                                          |
|:----------|:---------------------------------------------------------------------|
| `park`    | Park the message and do not resend. Put it on poison queue.          |
| `retry`   | Explicitly retry the message.                                        |
| `skip`    | Skip this message do not resend and do not put in poison queue.      |
| `stop`    | Stop the subscription.                                               |

## Consumer strategies

When creating a persistent subscription, you can choose between a number of consumer strategies.

### RoundRobin (default)

Distributes events to all clients evenly. If the client `bufferSize` is reached,
the client won't receive more events until it acknowledges or not acknowledges
events in its buffer.

This strategy provides equal load balancing between all consumers in the group.

### DispatchToSingle

Distributes events to a single client until the `bufferSize` is reached. After
that, the next client is selected in a round-robin style, and the process
repeats.

This option can be seen as a fall-back scenario for high availability, when a
single consumer processes all the events until it reaches its maximum capacity.
When that happens, another consumer takes the load to free up the main consumer
resources.

### Pinned

For use with an indexing projection such as the system `$by_category` projection.

EventStoreDB inspects the event for its source stream id, hashing the id to one
of 1024 buckets assigned to individual clients. When a client disconnects, its
buckets are assigned to other clients. When a client connects, it is assigned
some existing buckets. This naively attempts to maintain a balanced workload.

The main aim of this strategy is to decrease the likelihood of concurrency and
ordering issues while maintaining load balancing. This is **not a guarantee**,
and you should handle the usual ordering and concurrency issues.

## Updating a subscription group

You can edit the settings of an existing subscription group while it is running,
you don't need to delete and recreate it to change settings. When you update the
subscription group, it resets itself internally, dropping the connections and
having them reconnect. You must have admin permissions to update a persistent
subscription group.

```ts
import { persistentSubscriptionToStreamSettingsFromDefaults } from "@eventstore/db-client";

await client.updatePersistentSubscriptionToStream(
  "stream-name",
  "group-name",
  persistentSubscriptionToStreamSettingsFromDefaults({
    resolveLinkTos: true,
    checkPointLowerBound: 20,
  })
);
```

## Persistent subscription settings

Both the create and update methods take some settings for configuring the persistent subscription.

The following table shows the configuration options you can set on a persistent subscription.

| Option                  | Description                                                                                                                       | Default                                   |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| `resolveLinkTos`        | Whether the subscription should resolve link events to their linked events.                                                       | `false`                                   |
| `fromStart`             | The exclusive position in the stream or transaction file the subscription should start from.                                      | `null` (start from the end of the stream) |
| `extraStatistics`       | Whether to track latency statistics on this subscription.                                                                         | `false`                                   |
| `messageTimeout`        | The amount of time after which to consider a message as timed out and retried.                                                    | `30` (seconds)                            |
| `maxRetryCount`         | The maximum number of retries (due to timeout) before a message is considered to be parked.                                       | `10`                                      |
| `liveBufferSize`        | The size of the buffer (in-memory) listening to live messages as they happen before paging occurs.                                | `500`                                     |
| `readBatchSize`         | The number of events read at a time when paging through history.                                                                  | `20`                                      |
| `historyBufferSize`     | The number of events to cache when paging through history.                                                                        | `500`                                     |
| `checkpointLowerBound`  | The minimum number of messages to process before a checkpoint may be written.                                                     | `10` seconds                              |
| `checkpointUpperBound`  | The maximum number of messages not checkpoint before forcing a checkpoint.                                                        | `1000`                                    |
| `maxSubscriberCount`    | The maximum number of subscribers allowed.                                                                                        | `0` (unbounded)                           |
| `namedConsumerStrategy` | The strategy to use for distributing events to client consumers. See the [consumer strategies](#consumer-strategies) in this doc. | `RoundRobin`                              |

## Deleting a subscription group

Remove a subscription group with the delete operation. Like the creation of groups, you rarely do this in your runtime code and is undertaken by an administrator running a script.

```ts
await client.deletePersistentSubscriptionToStream("stream-name", "subscription-group");
```
