---
order: 2
---

# Appending events

When you start working with KurrentDB, your application streams are empty. The first meaningful operation is to add one or more events to the database using this API.

::: tip
Check the [Getting Started](getting-started.md) guide to learn how to configure and use the client SDK.
:::

## Append your first event

The simplest way to append an event to KurrentDB is to create an `EventData` object and call `appendToStream` method.

```ts {32-43}
import { v4 as uuid } from "uuid";

const event = jsonEvent({
  id: uuid(),
  type: "OrderPlaced",
  data: {
    orderId: "order-123",
    customerId: "customer-456",
    totalAmount: 99.99,
    status: "placed"
  },
});

await client.appendToStream("orders", event, {
  streamState: NO_STREAM,
});
```

`appendToStream` takes a collection or a single object that can be serialized in JSON or binary format, which allows you to save more than one event in a single batch.
 
Outside the example above, other options exist for dealing with different scenarios. 

::: tip
If you are new to Event Sourcing, please study the [Handling concurrency](#handling-concurrency) section below.
:::

## Working with EventData

Events appended to KurrentDB must be wrapped in an `EventData` object. This allows you to specify the event's content, the type of event, and whether it's in JSON format. In its simplest form, you need three arguments: **eventId**, **eventType**, and **eventData**.

### eventId

This takes the format of a `UUID` and is used to uniquely identify the event you are trying to append. If two events with the same `UUID` are appended to the same stream in quick succession, KurrentDB will only append one of the events to the stream. 

For example, the following code will only append a single event:

```ts
const event = jsonEvent({
  id: uuid(),
  type: "OrderPlaced",
  data: {
    orderId: "order-123",
    customerId: "customer-456",
    totalAmount: 99.99,
    status: "placed"
  },
});

await client.appendToStream("orders", event);

// attempt to append the same event again
await client.appendToStream("orders", event);
```

### eventType

Each event should be supplied with an event type. This unique string is used to identify the type of event you are saving. 

It is common to see the explicit event code type name used as the type as it makes serialising and de-serialising of the event easy. However, we recommend against this as it couples the storage to the type and will make it more difficult if you need to version the event at a later date.

### eventData

Representation of your event data. It is recommended that you store your events as JSON objects. This allows you to take advantage of all of KurrentDB's functionality, such as projections. That said, you can save events using whatever format suits your workflow. Eventually, the data will be stored as encoded bytes.

### userMetadata

Storing additional information alongside your event that is part of the event itself is standard practice. This can be correlation IDs, timestamps, access information, etc. KurrentDB allows you to store a separate byte array containing this information to keep it separate.

### contentType

The content type indicates whether the event is stored as JSON or binary format. You can use existing methods `jsonEvent` or `binaryEvent` to create the `EventData` object, which will set the content type accordingly.

## Handling concurrency

When appending events to a stream, you can supply a *stream state*. Your client uses this to inform KurrentDB of the state or version you expect the stream to be in when appending an event. If the stream isn't in that state, an exception will be thrown. 

For example, if you try to append the same record twice, expecting both times that the stream doesn't exist, you will get an exception on the second:

```ts{28-30}
const orderPlacedEvent = jsonEvent({
  id: uuid(),
  type: "OrderPlaced",
  data: {
    orderId: "order-123",
    customerId: "customer-456",
    totalAmount: 99.99,
    status: "placed"
  },
});

const paymentProcessedEvent = jsonEvent({
  id: uuid(),
  type: "PaymentProcessed",
  data: {
    orderId: "order-123",
    paymentId: "payment-789",
    amount: 99.99,
    paymentMethod: "credit_card"
  },
});

await client.appendToStream("order-123-stream", orderPlacedEvent, {
  streamState: NO_STREAM,
});

// attempt to append another event to the same stream expecting it to not exist
await client.appendToStream("order-123-stream", paymentProcessedEvent, {
  streamState: NO_STREAM,
});
```

There are several available expected revision options: 
- `any` - No concurrency check
- `no_stream` - Stream should not exist
- `stream_exists` - Stream should exist
- `bigint` - Stream should be at specific revision

This check can be used to implement optimistic concurrency. When retrieving a
stream from KurrentDB, note the current version number. When you save it back,
you can determine if somebody else has modified the record in the meantime.

```ts
const events = client.readStream("order-12345", {
  fromRevision: START,
  direction: FORWARDS,
});

// Get the current revision to use for optimistic concurrency
let revision: AppendStreamState = NO_STREAM;

for await (const { event } of events) {
  revision = event?.revision ?? revision;
}

// Two concurrent operations trying to update the same order
const paymentProcessedEvent = jsonEvent({
  id: uuid(),
  type: "PaymentProcessed",
  data: {
    orderId: "order-12345",
    paymentId: "payment-789",
    amount: 149.99,
    paymentMethod: "credit_card"
  },
});

const orderCancelledEvent = jsonEvent({
  id: uuid(),
  type: "OrderCancelled",
  data: {
    orderId: "order-12345",
    reason: "customer-request",
    comment: "Customer changed mind"
  },
});

// Process payment (succeeds)
await client.appendToStream("order-12345", paymentProcessedEvent, {
  streamState: revision,
});

// Cancel order (fails due to concurrency conflict)
await client.appendToStream("order-12345", orderCancelledEvent, {
  streamState: revision,
});
```

## User credentials

You can provide user credentials to append the data as follows. This will override the default credentials set on the connection.

```ts
const credentials = {
  username: "admin",
  password: "changeit",
};

await client.appendToStream("some-stream", event, {
  credentials,
});
```

## Atomic appends

KurrentDB provides two operations for appending events to one or more streams in a single atomic transaction: `appendRecords` and `multiStreamAppend`. Both guarantee that either all writes succeed or the entire operation fails, but they differ in how records are organized, ordered, and validated.

| | `appendRecords` | `multiStreamAppend` |
|---|---|---|
| **Available since** | KurrentDB 26.1 | KurrentDB 25.1 |
| **Record ordering** | Interleaved. Records from different streams can be mixed, and their exact order is preserved in the global log. | Grouped. All records for a stream are sent together; ordering across streams is not guaranteed. |
| **Consistency checks** | Decoupled. Can validate the state of any stream, including streams not being written to. | Coupled. Expected state is specified per stream being written to. |
| **Protocol** | Unary RPC. All records and checks sent in a single request. | Client-streaming RPC. Records are streamed per stream. |

::: warning
Metadata must be a valid JSON object, using string keys and string values only.
Binary metadata is not supported in this version to maintain compatibility with
KurrentDB's metadata handling. This restriction will be lifted in the next major
release.
:::

### appendRecords

::: note
This feature is only available in KurrentDB 26.1 and later.
:::

`appendRecords` appends events to one or more streams atomically. Each record specifies which stream it targets, and the exact order of records is preserved in the global log across all streams.

#### Single stream

The simplest usage appends events to a single stream:

```ts
import { jsonEvent, STREAM_STATE, NO_STREAM } from "@kurrent/kurrentdb-client";
import { v4 as uuid } from "uuid";

const records = [
  {
    streamName: "order-123",
    record: jsonEvent({
      id: uuid(),
      type: "OrderPlaced",
      data: { orderId: "123", amount: 99.99 },
    }),
  },
  {
    streamName: "order-123",
    record: jsonEvent({
      id: uuid(),
      type: "OrderShipped",
      data: { orderId: "123" },
    }),
  },
];

await client.appendRecords(records);
```

You can also pass consistency checks for optimistic concurrency:

```ts
await client.appendRecords(records, [
  { type: STREAM_STATE, streamName: "order-123", expectedState: NO_STREAM },
]);
```

#### Multiple streams

Records can target different streams and be interleaved freely. The global log preserves the exact order you specify:

```ts
const records = [
  {
    streamName: "order-stream",
    record: jsonEvent({
      id: uuid(),
      type: "OrderCreated",
      data: { orderId: "123" },
    }),
  },
  {
    streamName: "inventory-stream",
    record: jsonEvent({
      id: uuid(),
      type: "ItemReserved",
      data: { itemId: "abc", quantity: 2 },
    }),
  },
  {
    streamName: "order-stream",
    record: jsonEvent({
      id: uuid(),
      type: "OrderConfirmed",
      data: { orderId: "123" },
    }),
  },
];

await client.appendRecords(records);
```

#### Consistency checks

Consistency checks let you validate the state of any stream, including streams you are not writing to, before the append is committed. All checks are evaluated atomically: if any check fails, the entire operation is rejected and an `AppendConsistencyViolationError` is thrown with details about every failing check and the actual state observed.

```ts
import { STREAM_STATE, STREAM_EXISTS } from "@kurrent/kurrentdb-client";

const records = [
  {
    streamName: "order-stream",
    record: jsonEvent({
      id: uuid(),
      type: "OrderConfirmed",
      data: { orderId: "123" },
    }),
  },
];

const checks = [
  // ensure the inventory stream exists before confirming the order,
  // even though we are not writing to it
  {
    type: STREAM_STATE,
    streamName: "inventory-stream",
    expectedState: STREAM_EXISTS,
  },
];

await client.appendRecords(records, checks);
```

This decoupling of checks from writes enables [Dynamic Consistency Boundary](https://www.eventstore.com/blog/dynamic-consistency-boundary) patterns, where a business decision depends on the state of multiple streams but the resulting event is written to only one of them.

### multiStreamAppend

::: note
This feature is only available in KurrentDB 25.1 and later.
:::

`multiStreamAppend` appends events to one or more streams atomically. Records are grouped per stream using `AppendStreamRequest`, where each request specifies a stream name, an expected state, and the events for that stream.

```ts
import { jsonEvent } from "@kurrent/kurrentdb-client";
import { v4 as uuid } from "uuid";

const metadata = {
  source: "OrderProcessingSystem",
  version: "1.0",
};

const requests = [
  {
    streamName: "order-stream-1",
    expectedState: "any",
    events: [
      jsonEvent({
        id: uuid(),
        type: "OrderCreated",
        data: { orderId: "12345", amount: 99.99 },
        metadata,
      }),
    ],
  },
  {
    streamName: "inventory-stream-1",
    expectedState: "any",
    events: [
      jsonEvent({
        id: uuid(),
        type: "ItemReserved",
        data: { itemId: "ABC123", quantity: 2 },
        metadata,
      }),
    ],
  },
];

await client.multiStreamAppend(requests);
```

Each stream can only appear once in the request. The expected state is validated per stream before the transaction is committed.