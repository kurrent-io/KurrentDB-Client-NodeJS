/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { pipeline, Writable, Readable } from "stream";
import { promisify } from "util";

import {
  createTestNode,
  Defer,
  delay,
  jsonTestEvents,
  matchServerVersion,
  TestEventData,
} from "@test-utils";
import {
  KurrentDBClient,
  jsonEvent,
  ResolvedEvent,
  END,
  streamNameFilter,
  START,
  FORWARDS,
  AllStreamResolvedEvent,
} from "@kurrent/kurrentdb-client";

const asyncPipeline = promisify(pipeline);

describe("subscribeToAll", () => {
  const node = createTestNode();
  let client!: KurrentDBClient;

  const STREAM_NAME_A = "stream_name_a";
  const STREAM_NAME_B = "stream_name_b";

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());

    await client.appendToStream(STREAM_NAME_A, jsonTestEvents(4));
    await client.appendToStream(STREAM_NAME_B, jsonTestEvents(4));
  });

  afterAll(async () => {
    await node.down();
  });

  describe("should subscribe to $all", () => {
    test("from start", async () => {
      const defer = new Defer();
      const FINISH_TEST = "from-start-finish";

      const events: ResolvedEvent[] = [];
      const filteredEvents: ResolvedEvent[] = [];

      const onError = jest.fn((error) => {
        defer.reject(error);
      });
      const onClose = jest.fn();
      const onConfirmation = jest.fn();
      const onEnd = jest.fn(defer.resolve);

      const onEvent = jest.fn(async (event: ResolvedEvent) => {
        events.push(event);

        if (!event.event?.type.startsWith("$")) {
          filteredEvents.push(event);
        }

        if (event.event?.type === FINISH_TEST) {
          await delay(500);
          subscription.unsubscribe();
        }
      });

      const caughtUp = jest.fn();

      const subscription = client
        .subscribeToAll()
        .on("error", onError)
        .on("data", onEvent)
        .on("close", onClose)
        .on("confirmation", onConfirmation)
        .on("caughtUp", caughtUp)
        .on("end", onEnd);

      const finishEvent = jsonEvent({
        type: FINISH_TEST,
        data: {
          message: "lets wrap this up",
        },
      });

      await client.appendToStream(STREAM_NAME_A, [
        ...jsonTestEvents(3),
        finishEvent,
      ]);

      await defer.promise;

      expect(onError).not.toBeCalled();
      expect(onConfirmation).toBeCalledTimes(1);
      expect(onEvent).toHaveBeenCalled();

      if (matchServerVersion`>=23.10`) {
        expect(caughtUp).toBeCalledTimes(1);
      }

      // 8 set up events, 4 after subscribed
      expect(filteredEvents.length).toBe(12);
      // plus system events
      expect(events.length).toBeGreaterThan(12);
    });

    test("from end", async () => {
      const defer = new Defer();
      const FINISH_TEST = "from-end-finish";

      const events: ResolvedEvent[] = [];
      const filteredEvents: ResolvedEvent[] = [];

      const onError = jest.fn((error) => {
        defer.reject(error);
      });
      const onClose = jest.fn();
      const onConfirmation = jest.fn();
      const onEnd = jest.fn(defer.resolve);
      const onEvent = jest.fn((event: ResolvedEvent) => {
        events.push(event);

        if (!event.event?.type.startsWith("$")) {
          filteredEvents.push(event);
        }

        if (event.event?.type === FINISH_TEST) {
          subscription.unsubscribe();
        }
      });

      const onCaughtUp = jest.fn();

      const subscription = client
        .subscribeToAll({ fromPosition: END })
        .on("error", onError)
        .on("data", onEvent)
        .on("close", onClose)
        .on("confirmation", onConfirmation)
        .on("caughtUp", onCaughtUp)
        .on("end", onEnd);

      const finishEvent = jsonEvent({
        type: FINISH_TEST,
        data: {
          message: "lets wrap this up",
        },
      });

      await delay(500);

      await client.appendToStream(STREAM_NAME_A, [
        ...jsonTestEvents(3),
        finishEvent,
      ]);

      await defer.promise;

      expect(onError).not.toBeCalled();
      expect(onConfirmation).toBeCalledTimes(1);
      expect(onEvent).toHaveBeenCalled();

      if (matchServerVersion`>=23.10`) {
        expect(onCaughtUp).toBeCalledTimes(1);
      }

      // only 4 after subscribed
      expect(filteredEvents.length).toBe(4);
      // plus system events (if any)
      expect(events.length).toBeGreaterThanOrEqual(4);
    });

    test("from position", async () => {
      const defer = new Defer();
      const FINISH_TEST = "from-position-finish";
      const MARKER_EVENT = "marker_event";

      const appendResult = await client.appendToStream(
        STREAM_NAME_B,
        jsonEvent({
          type: MARKER_EVENT,
          data: { message: "mark my words" },
        })
      );

      await client.appendToStream(STREAM_NAME_A, jsonTestEvents(3));

      const events: ResolvedEvent[] = [];
      const filteredEvents: ResolvedEvent[] = [];

      const onError = jest.fn((error) => {
        defer.reject(error);
      });
      const onClose = jest.fn();
      const onConfirmation = jest.fn();
      const onEnd = jest.fn(defer.resolve);
      const onEvent = jest.fn(async (event: ResolvedEvent) => {
        events.push(event);

        if (!event.event?.type.startsWith("$")) {
          filteredEvents.push(event);
        }

        if (event.event?.type === FINISH_TEST) {
          await delay(500);
          subscription.unsubscribe();
        }
      });
      const onCaughtUp = jest.fn();

      const subscription = client
        .subscribeToAll({
          fromPosition: appendResult.position,
        })
        .on("error", onError)
        .on("data", onEvent)
        .on("close", onClose)
        .on("confirmation", onConfirmation)
        .on("caughtUp", onCaughtUp)
        .on("end", onEnd);

      const finishEvent = jsonEvent({
        type: FINISH_TEST,
        data: {
          message: "lets wrap this up",
        },
      });

      await client.appendToStream(STREAM_NAME_A, [
        ...jsonTestEvents(3),
        finishEvent,
      ]);

      await defer.promise;

      expect(onError).not.toBeCalled();
      expect(onConfirmation).toBeCalledTimes(1);
      expect(onEvent).toHaveBeenCalled();
      if (matchServerVersion`>=23.10`) {
        expect(onCaughtUp).toBeCalledTimes(1);
      }

      // 3 before subscribed, 4 after subscribed
      expect(filteredEvents.length).toBe(7);
      // plus system events (if any)
      expect(events.length).toBeGreaterThanOrEqual(7);
    });
  });

  describe("should return a readable stream", () => {
    test("async iterator", async () => {
      const STREAM_NAME = "async_iter_sync_fun";
      const FINISH_TEST = "finish_async_iterator_sync_fun";
      const MARKER_EVENT = "async_iter_sync_fun_marker";
      const doSomething = jest.fn();
      const doSomethingElse = jest.fn();

      const markerEvent = jsonEvent({
        type: MARKER_EVENT,
        data: {
          message: "mark",
        },
      });

      const finishEvent = jsonEvent({
        type: FINISH_TEST,
        data: {
          message: "lets wrap this up",
        },
      });

      const appendResult = await client.appendToStream(
        STREAM_NAME_B,
        markerEvent
      );

      client.appendToStream(STREAM_NAME, [...jsonTestEvents(8), finishEvent]);

      const subscription = client.subscribeToAll({
        fromPosition: appendResult.position,
      });

      for await (const event of subscription) {
        doSomething(event);

        if (!event.event?.type.startsWith("$")) {
          doSomethingElse(event);
        }

        if (event.event?.type === FINISH_TEST) {
          break;
        }
      }

      expect(doSomething).toBeCalled();
      expect(doSomethingElse).toBeCalledTimes(9);
    });

    test("async iterator with async function", async () => {
      const STREAM_NAME = "async_iter_async_fun";
      const FINISH_TEST = "finish_async_iterator_async_fun";
      const MARKER_EVENT = "async_iter_async_fun_marker";
      const doSomething = jest.fn();
      const doSomethingElse = jest.fn();

      const markerEvent = jsonEvent({
        type: MARKER_EVENT,
        data: {
          message: "mark",
        },
      });

      const finishEvent = jsonEvent({
        type: FINISH_TEST,
        data: {
          message: "lets wrap this up",
        },
      });

      const appendResult = await client.appendToStream(
        STREAM_NAME_B,
        markerEvent
      );

      const subscription = client.subscribeToAll({
        fromPosition: appendResult.position,
      });

      client.appendToStream(STREAM_NAME, [...jsonTestEvents(99), finishEvent]);

      const readEvents = new Set<number>();

      for await (const event of subscription) {
        doSomething(event);

        if (!event.event?.type.startsWith("$")) {
          doSomethingElse(event);
        }

        if (event.event?.type === "test") {
          // example of awaiting an async function when iterating over the async iterator
          await delay(10);

          if (event.event.isJson) {
            readEvents.add(
              (event.event.data as unknown as TestEventData).index
            );
          }
        }

        if (event.event?.type === FINISH_TEST) {
          break;
        }
      }

      expect(doSomething).toBeCalled();
      // unique numbers from 0 -> 98
      expect(readEvents.size).toBe(99);
      expect(doSomethingElse).toBeCalledTimes(100);
    });

    test("after the fact event listeners", async () => {
      const STREAM_NAME = "after_the_fact";
      const FINISH_TEST = "finish_after_the_fact";
      const MARKER_EVENT = "after_the_fact_marker";

      const markerEvent = jsonEvent({
        type: MARKER_EVENT,
        data: {
          message: "mark",
        },
      });

      const finishEvent = jsonEvent({
        type: FINISH_TEST,
        data: {
          message: "lets wrap this up",
        },
      });

      const defer = new Defer();

      await client.appendToStream(STREAM_NAME, jsonTestEvents(8));

      const appendResult = await client.appendToStream(
        STREAM_NAME,
        markerEvent
      );

      const eventListenerOne = jest.fn();
      const eventListenerTwo = jest.fn();
      const endListener = jest.fn(defer.resolve);
      const onceListener = jest.fn();
      const offListener = jest.fn();
      const caughtUpListener = jest.fn();

      const subscription = client
        .subscribeToAll({
          fromPosition: appendResult.position,
        })
        .on("data", eventListenerOne)
        .on("data", async (event) => {
          eventListenerTwo(event);

          if (event.event?.type === FINISH_TEST) {
            await delay(500);
            subscription.unsubscribe();
          }
        })
        .on("data", offListener)
        .once("data", onceListener)
        .on("end", endListener)
        .on("caughtUp", caughtUpListener)
        .off("data", offListener);

      await client.appendToStream(STREAM_NAME, [
        ...jsonTestEvents(5),
        finishEvent,
      ]);

      await defer.promise;

      expect(eventListenerOne).toBeCalledTimes(6);
      expect(eventListenerTwo).toBeCalledTimes(6);
      expect(onceListener).toBeCalledTimes(1);
      expect(endListener).toBeCalledTimes(1);
      expect(offListener).not.toBeCalled();
      if (matchServerVersion`>=23.10`) {
        expect(caughtUpListener).toBeCalledTimes(1);
      }
    });

    test("pipeline", async () => {
      const STREAM_NAME = "pipeline test";
      const FINISH_TEST = "finish_pipeline";

      await client.appendToStream(STREAM_NAME, [
        ...jsonTestEvents(8),
        jsonEvent({
          type: FINISH_TEST,
          data: {
            message: "lets wrap this up",
          },
        }),
      ]);

      const subscription = client.subscribeToStream(STREAM_NAME);

      const writeStream = new (class extends Writable {
        public ids: string[] = [];
        _write({ event }: ResolvedEvent, _encoding: string, done: () => void) {
          this.ids.push(event!.id);
          if (event?.type === FINISH_TEST) {
            subscription.unsubscribe().then(done);
          } else {
            done();
          }
        }
      })({ objectMode: true });

      await asyncPipeline(subscription as Readable, writeStream);

      expect(writeStream.ids).toHaveLength(9);
    });
  });

  describe("should handle stream truncation properly", () => {
    test.only("caught up received when no events pass the filter", async () => {
      const STREAM_NAME = "json_stream_name";
      const defer = new Defer();
      let caughtUpReceived = false;
      let eventCount = 0;

      await client.appendToStream(STREAM_NAME, jsonTestEvents(10));

      const subscribe = client.subscribeToAll({
        fromPosition: START,
        filter: streamNameFilter({ prefixes: ["passthrough-filter"] }),
      });

      subscribe
        .on("data", (resolvedEvent) => {
          eventCount++;
        })
        .on("caughtUp", () => {
          caughtUpReceived = true;
          subscribe.unsubscribe();
          defer.resolve();
        })
        .on("error", (error) => {
          defer.reject(error);
        });

      try {
        await defer.promise;
        expect(caughtUpReceived).toBe(true);
        expect(eventCount).toBe(0);
      } catch (error) {
        throw error;
      }
    })

    test.only("subscribeToAll with filter on truncated stream", async () => {
      const TRUNCATED_STREAM = "truncated_stream_test";
      const TRUNCATE_BEFORE = 20;
      const CREATED_EVENTS = 25;
      const deferAll = new Defer();
      const deferStream = new Defer();
      let caughtUpReceivedAll = false;
      let caughtUpReceivedStream = false;

      var collected_subscribe_to_all: AllStreamResolvedEvent[] = []
      var collected_subscribe_to_stream: ResolvedEvent[] = []
      var collected_read_all: AllStreamResolvedEvent[] = []
      var collected_read_stream: ResolvedEvent[] = []

      await client.appendToStream(TRUNCATED_STREAM, jsonTestEvents(CREATED_EVENTS));

      await client.setStreamMetadata(TRUNCATED_STREAM, { truncateBefore: TRUNCATE_BEFORE });

      const subscription_all = client.subscribeToAll({
        fromPosition: START,
        filter: streamNameFilter({ prefixes: [TRUNCATED_STREAM] }),
      });

      subscription_all
        .on("data", (resolvedEvent) => {
          collected_subscribe_to_all.push(resolvedEvent);
        })
        .on("caughtUp", () => {
          caughtUpReceivedAll = true;
          subscription_all.unsubscribe();
          deferAll.resolve();
        })
        .on("error", (error) => {
          deferAll.reject(error);
        });

      const subscription_stream = client.subscribeToStream(TRUNCATED_STREAM, {
        fromRevision: START,
      });

      subscription_stream
        .on("data", (resolvedEvent) => {
          collected_subscribe_to_stream.push(resolvedEvent);
        })
        .on("caughtUp", () => {
          caughtUpReceivedStream = true;
          subscription_stream.unsubscribe();
          deferStream.resolve();
        })
        .on("error", (error) => {
          deferStream.reject(error);
        });

      const read_all_events = client.readAll({
        direction: FORWARDS,
        fromPosition: START,
        filter: streamNameFilter({ prefixes: [TRUNCATED_STREAM] }),
      });

      for await (const resolvedEvent of read_all_events) {
        collected_read_all.push(resolvedEvent);
      }

      const read_stream_events = client.readStream(TRUNCATED_STREAM, {
        direction: FORWARDS,
        fromRevision: START,
      });

      for await (const resolvedEvent of read_stream_events) {
        collected_read_stream.push(resolvedEvent);
      }

      try {
        await Promise.all([deferAll.promise, deferStream.promise]);
        
        expect(caughtUpReceivedAll).toBe(true);
        expect(caughtUpReceivedStream).toBe(true);

        expect(collected_subscribe_to_all.length).toBe(25);
        expect(collected_read_all.length).toBe(25);

        // After truncation, the counts will be different - the truncation is stored in the stream metadata,
        // and the metadata is not applied when reading/subscribing to $all
        // so your $all reads and subscriptions will still include all the events until they are scavenged
        expect(collected_subscribe_to_stream.length).toBe(CREATED_EVENTS - TRUNCATE_BEFORE);
        expect(collected_read_stream.length).toBe(CREATED_EVENTS - TRUNCATE_BEFORE);

        expect(collected_subscribe_to_all.at(-1)?.event?.revision).toBe(24n);
        expect(collected_read_all.at(-1)?.event?.revision).toBe(24);
        expect(collected_subscribe_to_stream.at(-1)?.event?.revision).toBe(24n);
        expect(collected_read_stream.at(-1)?.event?.revision).toBe(24);
      } catch (error) {
        throw error;
      }
    });
  });
});
