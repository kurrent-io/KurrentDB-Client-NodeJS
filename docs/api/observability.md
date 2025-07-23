---
order: 8
head:
  - - title
    - {}
    - Observability | NodeJS | Clients | Kurrent Docs
---

# Observability

The Node.js client provides observability capabilities through OpenTelemetry
integration. This enables you to monitor, trace, and troubleshoot your event
store operations with distributed tracing support.

## Prerequisites

You'll need to add OpenTelemetry dependencies to your project:

```bash
npm install --save @opentelemetry/api @opentelemetry/sdk-trace-node @opentelemetry/instrumentation @eventstore/opentelemetry
```

For exporters, you might also want to install:

```bash
npm install --save @opentelemetry/sdk-trace-node

npm install --save @opentelemetry/exporter-trace-otlp-http

npm install --save @opentelemetry/semantic-conventions
```

## Basic Configuration

Configure OpenTelemetry by creating and registering the SDK with appropriate
exporters. Here's a minimal setup:

```ts
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { EventStoreDBInstrumentation } = require('@eventstore/opentelemetry');

const provider = new NodeTracerProvider();
provider.register();

registerInstrumentations({
  instrumentations: [
    new EventStoreDBInstrumentation(),
  ],
});
```

## Trace Exporters

OpenTelemetry supports various exporters to send trace data to different
observability platforms. You can find a list of available exporters in the
[OpenTelemetry Registry](https://opentelemetry.io/ecosystem/registry/?component=exporter&language=js).

You can configure multiple exporters simultaneously:

```ts
import { InMemorySpanExporter, SimpleSpanProcessor, ConsoleSpanExporter } from "@opentelemetry/sdk-trace-node";
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';

const memoryExporter = new InMemorySpanExporter();
const otlpExporter = new OTLPTraceExporter({ url: "http://localhost:4317" }); // change this to your OTLP receiver address
const consoleExporter = new ConsoleSpanExporter();

provider.addSpanProcessor(new SimpleSpanProcessor(memoryExporter));
provider.addSpanProcessor(new SimpleSpanProcessor(consoleExporter));
provider.addSpanProcessor(new SimpleSpanProcessor(otlpExporter));
```

For detailed configuration options, refer to the
[OpenTelemetry Node.js documentation](https://opentelemetry.io/docs/languages/js/).

## Understanding Traces

### What Gets Traced

The Node.js client automatically creates traces for append and subscription
operations when the EventStoreDB instrumentation is registered.

### Trace Attributes

Each trace includes metadata to help with debugging and monitoring:

| Attribute                         | Description                            | Example                               |
| --------------------------------- | -------------------------------------- | ------------------------------------- |
| `db.user`                         | Database user name                     | `admin`                               |
| `db.system`                       | Database system identifier             | `eventstoredb`                        |
| `db.operation`                    | Type of operation performed            | `streams.append`, `streams.subscribe` |
| `db.eventstoredb.stream`          | Stream name or identifier              | `user-events-123`                     |
| `db.eventstoredb.subscription.id` | Subscription identifier                | `user-events-123-sub`                 |
| `db.eventstoredb.event.id`        | Event identifier                       | `event-456`                           |
| `db.eventstoredb.event.type`      | Event type identifier                  | `user.created`                        |
| `server.address`                  | EventStoreDB server address            | `localhost`                           |
| `server.port`                     | EventStoreDB server port               | `2113`                                |
| `exception.type`                  | Exception type if an error occurred    |                                       |
| `exception.message`               | Exception message if an error occurred |                                       |
| `exception.stacktrace`            | Stack trace