/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */

import {
  Attributes,
  Context,
  context,
  Span,
  SpanKind,
  SpanStatusCode,
  trace,
  TraceFlags,
  Tracer,
} from "@opentelemetry/api";
import {
  InstrumentationBase,
  InstrumentationConfig,
  InstrumentationNodeModuleDefinition,
} from "@opentelemetry/instrumentation";
import type * as kurrentdb from "@kurrent/kurrentdb-client";
import type {
  AppendResult,
  BinaryEventType,
  EventData,
  EventType,
  JSONEventType,
  ResolvedEvent,
  SubscribeToAllOptions,
  SubscribeToPersistentSubscriptionToAllOptions,
  SubscribeToPersistentSubscriptionToStreamOptions,
  SubscribeToStreamOptions,
} from "@kurrent/kurrentdb-client";
import type { ReadResp as StreamsReadResp } from "@kurrent/kurrentdb-client/generated/streams_pb";
import type { ReadResp as PersistentReadResp } from "@kurrent/kurrentdb-client/generated/persistent_pb";
import { KurrentAttributes } from "./attributes";
import type { PersistentSubscriptionImpl } from "@kurrent/kurrentdb-client/src/persistentSubscription/utils/PersistentSubscriptionImpl";
import type { Subscription } from "@kurrent/kurrentdb-client/src/streams/utils/Subscription";
import { INSTRUMENTATION_NAME, INSTRUMENTATION_VERSION } from "./version";
import type {
  AppendToStreamParams,
  PersistentSubscribeParameters,
  SubscribeParameters,
} from "./types";
import { hasConvertGrpcEventMethod, isJSONEventData } from "./utils";

const TRACE_ID = "$traceId" as any;
const SPAN_ID = "$spanId" as any;

export class Instrumentation extends InstrumentationBase {
  constructor(config: InstrumentationConfig = {}) {
    super(INSTRUMENTATION_NAME, INSTRUMENTATION_VERSION, config);
  }

  protected init() {
    return new InstrumentationNodeModuleDefinition(
      "@kurrent/kurrentdb-client",
      ["1.*"],
      this._onPatchMain(),
      this._onUnPatchMain()
    );
  }

  private _onPatchMain() {
    return (moduleExports: typeof kurrentdb) => {
      this.wrap(
        moduleExports.KurrentDBClient.prototype,
        "appendToStream",
        this._patchAppendToStream()
      );
      this.wrap(
        moduleExports.KurrentDBClient.prototype,
        "subscribeToStream",
        this._patchCatchUpSubscription()
      );
      this.wrap(
        moduleExports.KurrentDBClient.prototype,
        "subscribeToAll",
        this._patchCatchUpSubscription()
      );
      this.wrap(
        moduleExports.KurrentDBClient.prototype,
        "subscribeToPersistentSubscriptionToStream",
        this._patchPersistentSubscription()
      );
      this.wrap(
        moduleExports.KurrentDBClient.prototype,
        "subscribeToPersistentSubscriptionToAll",
        this._patchPersistentSubscription()
      );
      return moduleExports;
    };
  }

  private wrap<T extends object, K extends keyof T>(
    target: T,
    name: K,
    replacementFactory: (original: T[K], methodName: K) => T[K]
  ) {
    this._wrap(target, name, (originalMethod) =>
      replacementFactory(originalMethod, name)
    );
  }

  private _onUnPatchMain() {
    return (moduleExports: typeof kurrentdb) => {
      this._diag.debug("un-patching");

      this._unwrap(moduleExports.KurrentDBClient.prototype, "appendToStream");
      this._unwrap(
        moduleExports.KurrentDBClient.prototype,
        "subscribeToStream"
      );
      this._unwrap(
        moduleExports.KurrentDBClient.prototype,
        "subscribeToPersistentSubscriptionToStream"
      );
      this._unwrap(
        moduleExports.KurrentDBClient.prototype,
        "subscribeToPersistentSubscriptionToAll"
      );
    };
  }

  private _patchAppendToStream(): (
    original: Function,
    operation: keyof kurrentdb.KurrentDBClient
  ) => (...args: AppendToStreamParams) => Promise<AppendResult> {
    const instrumentation = this;
    const tracer = instrumentation.tracer;

    return function appendToStream(
      original: Function,
      operation: keyof kurrentdb.KurrentDBClient
    ) {
      return async function (
        this: kurrentdb.KurrentDBClient,
        ...args: AppendToStreamParams
      ): Promise<AppendResult> {
        const [streamName, events, options] = [...args];
        let actualEvents: EventData<JSONEventType | BinaryEventType>[];

        const uri = await this.resolveUri();
        const { hostname, port } = Instrumentation.getServerAddress(uri);

        const attributes: Attributes = {
          [KurrentAttributes.KURRENT_DB_STREAM]: streamName,
          [KurrentAttributes.SERVER_ADDRESS]: hostname,
          [KurrentAttributes.SERVER_PORT]: port,
          [KurrentAttributes.DATABASE_SYSTEM]: INSTRUMENTATION_NAME,
          [KurrentAttributes.DATABASE_OPERATION]: operation,
        };

        if (options?.credentials) {
          attributes[KurrentAttributes.DATABASE_USER] =
            options.credentials.username;
        }

        const span = tracer.startSpan(KurrentAttributes.STREAM_APPEND, {
          kind: SpanKind.CLIENT,
          attributes,
        });

        if (Array.isArray(events)) {
          actualEvents = events;
        } else {
          actualEvents = [events];
        }

        const traceId = span.spanContext().traceId;
        const spanId = span.spanContext().spanId;

        actualEvents.forEach((event) => {
          const metadata = (event.metadata = event.metadata || {});
          if (isJSONEventData(event) && typeof metadata === "object") {
            event.metadata = {
              ...metadata,
              [TRACE_ID]: traceId,
              [SPAN_ID]: spanId,
            };
          }
        });

        try {
          const result = await original.apply(this, [
            streamName,
            actualEvents,
            options,
          ]);
          return result;
        } catch (error) {
          throw Instrumentation.handleError(error, span);
        } finally {
          span.end();
        }
      };
    };
  }

  static applySubscriptionInstrumentation<KnownEventType>(
    spanName: string,
    subscription:
      | Subscription<KnownEventType>
      | PersistentSubscriptionImpl<KnownEventType>,
    uri: string,
    operation: string,
    options: SubscribeToStreamOptions | SubscribeToAllOptions | undefined,
    tracer: Tracer
  ) {
    if (!hasConvertGrpcEventMethod(subscription)) return;

    const originalConvertGrpcEvent = subscription.convertGrpcEvent;

    subscription.convertGrpcEvent = function (
      grpcEvent: StreamsReadResp.ReadEvent | PersistentReadResp.ReadEvent
    ) {
      const resolved = originalConvertGrpcEvent.apply(subscription, [
        grpcEvent,
      ]);

      const resolvedEvent = resolved as ResolvedEvent;
      const metadata = resolvedEvent?.event?.metadata;

      if (typeof metadata !== "object" || metadata === null) return resolved;

      const parentContext = Instrumentation.restoreContext(metadata);

      const { hostname, port } = Instrumentation.getServerAddress(uri);

      const subscriptionId = subscription.id;

      const attributes: Attributes = {
        [KurrentAttributes.KURRENT_DB_STREAM]: resolvedEvent?.event?.streamId,
        [KurrentAttributes.KURRENT_DB_EVENT_ID]: resolvedEvent?.event?.id,
        [KurrentAttributes.KURRENT_DB_EVENT_TYPE]: resolvedEvent?.event?.type,
        [KurrentAttributes.KURRENT_DB_SUBSCRIPTION_ID]: subscriptionId,
        [KurrentAttributes.SERVER_ADDRESS]: hostname,
        [KurrentAttributes.SERVER_PORT]: port,
        [KurrentAttributes.DATABASE_SYSTEM]: INSTRUMENTATION_NAME,
        [KurrentAttributes.DATABASE_OPERATION]: operation,
        [KurrentAttributes.DATABASE_USER]: options?.credentials?.username,
      };

      const span = tracer.startSpan(
        spanName,
        {
          attributes,
          kind: SpanKind.CONSUMER,
        },
        parentContext
      );

      try {
        return resolved;
      } catch (error) {
        throw Instrumentation.handleError(error, span);
      } finally {
        span.end();
      }
    };
  }

  private _patchCatchUpSubscription(): (
    original: Function,
    operation: keyof kurrentdb.KurrentDBClient
  ) => (...args: any) => any {
    const instrumentation = this;
    const tracer = instrumentation.tracer;

    return function subscribe<KnownEventType extends EventType = EventType>(
      original: Function,
      operation: keyof kurrentdb.KurrentDBClient
    ) {
      return function (
        this: kurrentdb.KurrentDBClient,
        ...args: SubscribeParameters
      ) {
        let options:
          | SubscribeToStreamOptions
          | SubscribeToAllOptions
          | undefined;

        if (operation == "subscribeToStream") {
          options = args[1] as SubscribeToStreamOptions;
        } else {
          options = args[0] as SubscribeToAllOptions;
        }

        const subscription: Subscription<KnownEventType> = original.apply(
          this,
          args
        );

        this.resolveUri().then((uri) =>
          Instrumentation.applySubscriptionInstrumentation(
            KurrentAttributes.STREAM_SUBSCRIBE,
            subscription,
            uri,
            operation,
            options,
            tracer
          )
        );

        return subscription;
      };
    };
  }

  private _patchPersistentSubscription(): (
    original: Function,
    operation: keyof kurrentdb.KurrentDBClient
  ) => (...args: any) => any {
    const instrumentation = this;
    const tracer = instrumentation.tracer;

    return function subscribe<E>(
      original: Function,
      operation: keyof kurrentdb.KurrentDBClient
    ) {
      return function (
        this: kurrentdb.KurrentDBClient,
        ...args: PersistentSubscribeParameters
      ) {
        let options:
          | SubscribeToPersistentSubscriptionToAllOptions
          | SubscribeToPersistentSubscriptionToStreamOptions
          | undefined;

        if (operation === "subscribeToPersistentSubscriptionToStream") {
          options = args[2] as SubscribeToPersistentSubscriptionToStreamOptions;
        } else {
          options = args[1] as SubscribeToPersistentSubscriptionToStreamOptions;
        }

        const subscription: PersistentSubscriptionImpl<E> = original.apply(
          this,
          args
        );

        this.resolveUri().then((uri) =>
          Instrumentation.applySubscriptionInstrumentation(
            KurrentAttributes.STREAM_SUBSCRIBE,
            subscription,
            uri,
            operation,
            options,
            tracer
          )
        );
        return subscription;
      };
    };
  }

  private static restoreContext = (
    metadata: kurrentdb.MetadataType,
    isRemote = true
  ): Context => {
    const traceId = metadata[TRACE_ID] as string;
    const spanId = metadata[SPAN_ID] as string;

    return trace.setSpanContext(context.active(), {
      traceId,
      spanId,
      traceFlags: TraceFlags.SAMPLED,
      isRemote,
    });
  };

  private static handleError = (error: any, span: Span) => {
    span.recordException(error);
    span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
    throw error;
  };

  private static getServerAddress = (resolvedUri: string) => {
    const uri = new URL(`http://${resolvedUri}`); // the protocol is not important because we are only interested in the hostname and port

    const hostname = uri.hostname;
    const port = uri.port;

    return { hostname, port };
  };
}
