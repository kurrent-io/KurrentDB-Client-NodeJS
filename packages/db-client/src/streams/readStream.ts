import { Client } from "../Client";
import { FORWARDS, START, END } from "../constants";
import type {
  BaseOptions,
  Direction,
  EventType,
  ReadRevision,
  ResolvedEvent,
} from "../types";
import { InvalidArgumentError } from "../utils";
import { convertRustEvent } from "../utils/convertRustEvent";
import { convertBridgeError } from "../utils/convertBridgeError";

export interface ReadStreamOptions extends BaseOptions {
  /**
   * The number of events to read.
   * @defaultValue Number.MAX_SAFE_INTEGER
   */
  maxCount?: number | bigint;
  /**
   * Starts the read at the given event revision.
   * @defaultValue START
   */
  fromRevision?: ReadRevision;
  /**
   * The best way to explain link resolution is when using system projections. When reading the stream `$streams` (which
   * contains all streams), each event is actually a link pointing to the first event of a stream. By enabling link
   * resolution feature, the server will also return the event targeted by the link.
   * @defaultValue false
   */
  resolveLinkTos?: boolean;
  /**
   * Sets the read direction of the stream.
   * @defaultValue FORWARDS
   */
  direction?: Direction;
}

declare module "../Client" {
  interface Client {
    /**
     * Reads events from a given stream.
     * @param streamName - A stream name.
     * @param options - Reading options.
     */
    readStream<KnownEventType extends EventType = EventType>(
      streamName: string,
      options?: ReadStreamOptions
    ): AsyncIterableIterator<ResolvedEvent<KnownEventType>>;
  }
}

Client.prototype.readStream = function <
  KnownEventType extends EventType = EventType
>(
  this: Client,
  streamName: string,
  {
    maxCount = Number.MAX_SAFE_INTEGER,
    fromRevision = START,
    resolveLinkTos = false,
    direction = FORWARDS,
    ...baseOptions
  }: ReadStreamOptions = {}
): AsyncIterableIterator<ResolvedEvent<KnownEventType>> {
  if (
    fromRevision !== START &&
    fromRevision !== END &&
    typeof fromRevision === "bigint"
  ) {
    const lowerBound = BigInt("0");
    const upperBound = BigInt("0xffffffffffffffff");

    if (fromRevision < lowerBound) {
      throw new InvalidArgumentError(
        `fromRevision value must be a non-negative integer. Value Received: ${fromRevision}`
      );
    }

    if (fromRevision > upperBound) {
      throw new InvalidArgumentError(
        `fromRevision value must be a non-negative integer, range from 0 to 18446744073709551615. Value Received: ${fromRevision}`
      );
    }
  }

  const convert = async function* (
    this: Client
  ): AsyncIterableIterator<ResolvedEvent<KnownEventType>> {
    const credentials = await this.resolveBridgeCredentials(
      baseOptions.credentials
    );

    let stream;
    try {
      stream = this.rustClient.readStream(streamName, {
        credentials,
        direction,
        fromRevision,
        maxCount: BigInt(maxCount),
        requiresLeader: baseOptions.requiresLeader ?? false,
        resolvesLink: resolveLinkTos,
      });
    } catch (error) {
      throw convertBridgeError(error, streamName);
    }

    try {
      for await (const events of stream) {
        for (const event of events) {
          yield convertRustEvent(event);
        }
      }
    } catch (error) {
      throw convertBridgeError(error, streamName);
    }
  };

  return convert.call(this);
};
