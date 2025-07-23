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
  streamState NO_STREAM,
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

```ts {6,9,26-28,41-43}
const events = client.readStream("order-stream", {
  fromRevision: START,
  direction: FORWARDS,
});

let revision: AppendStreamState = NO_STREAM;

for await (const { event } of events) {
  revision = event?.revision ?? revision;
}

const orderPlacedEvent = jsonEvent({
  id: uuid(),
  type: "OrderPlaced",
  data: {
    orderId: "order-456",
    customerId: "customer-789",
    totalAmount: 149.99,
    items: [
      { productId: "prod-123", quantity: 2, price: 49.99 },
      { productId: "prod-456", quantity: 1, price: 49.99 }
    ]
  },
});

await client.appendToStream("order-stream", orderPlacedEvent, {
  streamState revision,
});

const paymentProcessedEvent = jsonEvent({
  id: uuid(),
  type: "PaymentProcessed",
  data: {
    orderId: "order-456",
    paymentId: "payment-789",
    amount: 149.99,
    paymentMethod: "credit_card"
  },
});

await client.appendToStream("order-stream", paymentProcessedEvent, {
  streamState revision,
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