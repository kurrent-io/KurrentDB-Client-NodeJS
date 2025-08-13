/** @jest-environment ./src/utils/enableVersionCheck.ts */

/**
 * Download and start aspire dashboard from https://aspiredashboard.com/
 * You can also use Jaeger or any other OpenTelemetry compatible dashboard.
 */

import {
  InMemorySpanExporter,
  NodeTracerProvider,
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-node";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { KurrentDBInstrumentation } from "@kurrent/opentelemetry";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { resourceFromAttributes } from "@opentelemetry/resources";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";
import {
  createTestNode,
  Defer,
  matchServerVersion,
  optionalDescribe,
} from "@test-utils";

import * as kurrentdb from "@kurrent/kurrentdb-client";
import { KurrentAttributes } from "@kurrent/opentelemetry/src/attributes";
import { v4 } from "uuid";
import { SpanStatusCode } from "@opentelemetry/api";

const memoryExporter = new InMemorySpanExporter();
const otlpExporter = new OTLPTraceExporter({ url: "http://localhost:4317" }); // change this to your OTLP receiver address
const consoleExporter = new ConsoleSpanExporter();

const provider = new NodeTracerProvider({
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: "kurrentdb",
    [ATTR_SERVICE_VERSION]: "1.0.0",
  }),
  spanProcessors: [
    new SimpleSpanProcessor(memoryExporter),
    new SimpleSpanProcessor(consoleExporter),
    new SimpleSpanProcessor(otlpExporter),
  ],
});

const instrumentation = new KurrentDBInstrumentation();

registerInstrumentations({
  instrumentations: [instrumentation],
  tracerProvider: provider,
});

instrumentation.disable();

const getSpans = (spanName: string, streamName: string) => {
  return memoryExporter
    .getFinishedSpans()
    .filter(
      (span) =>
        span.name === spanName &&
        span.attributes[KurrentAttributes.KURRENT_DB_STREAM] === streamName
    );
};

describe("[sample] opentelemetry", () => {
  const node = createTestNode();
  const moduleName = "@kurrent/opentelemetry";

  // @ts-expect-error the moduleExports property is private. This is needed to make the test work with auto-mocking
  instrumentation._modules[0].moduleExports = kurrentdb;

  beforeAll(async () => {
    await node.up();
  });

  beforeAll(async () => {
    await node.up();
    instrumentation.enable();
  });

  afterAll(async () => {
    instrumentation.disable();
    await node.down();
  });

  afterEach(() => {
    memoryExporter.reset();
  });

  optionalDescribe(matchServerVersion`>=25.0`)("multistream append", () => {
    test("append then subscribe", async () => {
      // Arrange
      const defer = new Defer();

      const { KurrentDBClient, jsonEvent } = await import(
        "@kurrent/kurrentdb-client"
      );

      const handleError = jest.fn((error) => {
        defer.reject(error);
      });
      const handleClose = jest.fn();
      const handleEvent = jest.fn((event: kurrentdb.ResolvedEvent) => {
        expect(event).toBeDefined();
      });
      const handleCaughtUp = jest.fn(async () => {
        try {
          expect(handleEvent).toHaveBeenCalledTimes(3);
          await subscription.unsubscribe();
        } catch (error) {
          defer.reject(error);
        }
      });
      const handleEnd = jest.fn(defer.resolve);
      const handleConfirmation = jest.fn();

      const client = KurrentDBClient.connectionString(node.connectionString());

      const firstOrderReq: kurrentdb.AppendStreamRequest = {
        streamName: `order-${v4()}`,
        events: [
          jsonEvent({
            type: "OrderPlaced",
            data: { id: v4() },
          }),
          jsonEvent({
            type: "PaymentProcessed",
            data: { id: v4() },
          }),
        ],
        expectedState: kurrentdb.ANY,
      };

      const secondOrderReq: kurrentdb.AppendStreamRequest = {
        streamName: `order-${v4()}`,
        events: [
          jsonEvent({
            type: "OrderPlaced",
            data: { customerId: "cust-456" },
          }),
        ],
        expectedState: kurrentdb.ANY,
      };

      // Act
      const appendResponse = await client.multiStreamAppend([
        firstOrderReq,
        secondOrderReq,
      ]);

      expect(appendResponse.success).toBeTruthy();

      const subscription = client
        .subscribeToAll({
          filter: kurrentdb.streamNameFilter({
            prefixes: ["order-"],
          }),
        })
        .on("error", handleError)
        .on("data", handleEvent)
        .on("close", handleClose)
        .on("confirmation", handleConfirmation)
        .on("caughtUp", handleCaughtUp)
        .on("end", handleEnd);

      await defer.promise;

      // Assert
      expect(handleError).not.toHaveBeenCalled();
      expect(handleConfirmation).toHaveBeenCalledTimes(1);
      expect(handleEvent).toHaveBeenCalledTimes(3);
      expect(handleCaughtUp).toHaveBeenCalled();

      const firstOrderAppendSpans = getSpans(
        KurrentAttributes.STREAM_APPEND,
        firstOrderReq.streamName
      );
      const secondOrderAppendSpans = getSpans(
        KurrentAttributes.STREAM_APPEND,
        secondOrderReq.streamName
      );
      const firstOrderSubscribeSpans = getSpans(
        KurrentAttributes.STREAM_SUBSCRIBE,
        firstOrderReq.streamName
      );
      const secondOrderSubscribeSpans = getSpans(
        KurrentAttributes.STREAM_SUBSCRIBE,
        secondOrderReq.streamName
      );

      expect(firstOrderAppendSpans).toHaveLength(1);
      expect(secondOrderAppendSpans).toHaveLength(1);
      expect(firstOrderSubscribeSpans).toHaveLength(2);
      expect(secondOrderSubscribeSpans).toHaveLength(1);

      expect(firstOrderSubscribeSpans[0].parentSpanId).toBe(
        firstOrderAppendSpans[0].spanContext().spanId
      );
      expect(firstOrderSubscribeSpans[1].parentSpanId).toBe(
        firstOrderAppendSpans[0].spanContext().spanId
      );
      expect(secondOrderSubscribeSpans[0].parentSpanId).toBe(
        secondOrderAppendSpans[0].spanContext().spanId
      );

      expect(firstOrderAppendSpans[0].attributes).toMatchObject({
        [KurrentAttributes.KURRENT_DB_STREAM]: firstOrderReq.streamName,
        [KurrentAttributes.SERVER_ADDRESS]: node.endpoints[0].address,
        [KurrentAttributes.SERVER_PORT]: node.endpoints[0].port.toString(),
        [KurrentAttributes.DATABASE_SYSTEM]: moduleName,
        [KurrentAttributes.DATABASE_OPERATION]: KurrentAttributes.STREAM_APPEND,
      });
    });

    test("append with failures", async () => {
      // Arrange
      const defer = new Defer();

      const { KurrentDBClient, jsonEvent } = await import(
        "@kurrent/kurrentdb-client"
      );

      const client = KurrentDBClient.connectionString(node.connectionString());

      const firstOrderReq: kurrentdb.AppendStreamRequest = {
        streamName: `order-${v4()}`,
        events: [
          jsonEvent({
            type: "OrderPlaced",
            data: { id: v4() },
          }),
          jsonEvent({
            type: "PaymentProcessed",
            data: { id: v4() },
          }),
        ],
        expectedState: kurrentdb.ANY,
      };

      const secondOrderReq: kurrentdb.AppendStreamRequest = {
        streamName: `order-${v4()}`,
        events: [
          jsonEvent({
            type: "OrderPlaced",
            data: { customerId: "cust-456" },
          }),
        ],
        expectedState: kurrentdb.STREAM_EXISTS,
      };

      // Act
      const appendResponse = await client.multiStreamAppend([
        firstOrderReq,
        secondOrderReq,
      ]);

      expect(appendResponse.success).toBeFalsy();

      // Assert
      const firstOrderAppendSpans = getSpans(
        KurrentAttributes.STREAM_APPEND,
        firstOrderReq.streamName
      );
      const secondOrderAppendSpans = getSpans(
        KurrentAttributes.STREAM_APPEND,
        secondOrderReq.streamName
      );

      expect(firstOrderAppendSpans).toHaveLength(1);
      expect(secondOrderAppendSpans).toHaveLength(1);

      expect(firstOrderAppendSpans[0].attributes).toMatchObject({
        [KurrentAttributes.KURRENT_DB_STREAM]: firstOrderReq.streamName,
        [KurrentAttributes.SERVER_ADDRESS]: node.endpoints[0].address,
        [KurrentAttributes.SERVER_PORT]: node.endpoints[0].port.toString(),
        [KurrentAttributes.DATABASE_SYSTEM]: moduleName,
        [KurrentAttributes.DATABASE_OPERATION]: KurrentAttributes.STREAM_APPEND,
      });

      expect(secondOrderAppendSpans[0].status.code).toBe(SpanStatusCode.ERROR);
      expect(secondOrderAppendSpans[0].events.length).toBe(1);
      expect(secondOrderAppendSpans[0].events[0].name).toBe("exception");
      expect(secondOrderAppendSpans[0].events[0].attributes).toMatchObject({
        "exception.type": "wrong_expected_revision",
        revision: secondOrderReq.expectedState.toLocaleString(),
      });
    });
  });
});
