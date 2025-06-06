import type {
  BaseOptions,
  ReadPosition,
  Direction,
  AllStreamResolvedEvent,
  Filter,
} from "../types";
import { FORWARDS, START } from "../constants";
import { Client } from "../Client";

import * as bridge from "@kurrent/bridge";
import { convertRustEvent } from "../utils/convertRustEvent";
import { convertBridgeError } from "../utils/convertBridgeError";

export interface ReadAllOptions extends BaseOptions {
  /**
   * The number of events to read.
   * @defaultValue Number.MAX_SAFE_INTEGER
   */
  maxCount?: number | bigint;
  /**
   * Starts the read at the given position.
   * @defaultValue START
   */
  fromPosition?: ReadPosition;
  /**
   * The best way to explain link resolution is when using system projections. When reading the stream `$streams` (which
   * contains all streams), each event is actually a link pointing to the first event of a stream. By enabling link
   * resolution feature, the server will also return the event targeted by the link.
   * @defaultValue false
   */
  resolveLinkTos?: boolean;
  /**
   * Sets the read direction of the streamconnection.
   * @defaultValue FORWARDS
   */
  direction?: Direction;
  /**
   * Filters events or streams based upon a predicate.
   */
  filter?: Filter;
}

declare module "../Client" {
  interface Client {
    /**
     * Reads events from the $all. You can read forwards or backwards.
     * You might need to be authenticated to execute the command successfully.
     * @param options - Reading options.
     */
    readAll(
      options?: ReadAllOptions
    ): AsyncIterableIterator<AllStreamResolvedEvent>;
  }
}

Client.prototype.readAll = function (
  this: Client,
  {
    maxCount = Number.MAX_SAFE_INTEGER,
    fromPosition = START,
    resolveLinkTos = false,
    direction = FORWARDS,
    ...baseOptions
  }: ReadAllOptions = {}
): AsyncIterableIterator<AllStreamResolvedEvent> {
  const options: bridge.RustReadAllOptions = {
    maxCount: BigInt(maxCount),
    fromPosition,
    resolvesLink: resolveLinkTos,
    direction,
    requiresLeader: baseOptions.requiresLeader ?? false,
    credentials: baseOptions.credentials,
    filter: baseOptions.filter,
  };

  let stream;
  try {
    stream = this.rustClient.readAll(options);
  } catch (error) {
    throw convertBridgeError(error);
  }

  const convert = async function* (
    stream: AsyncIterable<bridge.ResolvedEvent[]>
  ) {
    try {
      for await (const events of stream) {
        for (const event of events) {
          yield convertRustEvent<AllStreamResolvedEvent>(event);
        }
      }
    } catch (error) {
      throw convertBridgeError(error);
    }
  };

  return convert(stream);
};
