import * as bridge from "@kurrent/bridge";

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
  const options: bridge.RustReadStreamOptions = {
    maxCount: BigInt(maxCount),
    fromRevision,
    resolvesLink: resolveLinkTos,
    direction,
    requiresLeader: baseOptions.requiresLeader ?? true,
    credentials: baseOptions.credentials,
  };
  switch (fromRevision) {
    case START: {
      break;
    }

    case END: {
      break;
    }

    default: {
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

      options.fromRevision = fromRevision;

      break;
    }
  }

  let stream;
  try {
    stream = this.rustClient.readStream(streamName, options);
  } catch (error) {
    throw convertBridgeError(error, streamName);
  }

  const convert = async function* (
    stream: AsyncIterable<bridge.ResolvedEvent[]>
  ) {
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

  return convert(stream);
};




/**
 * Support Emitter pattern
 */

// /* eslint-disable  @typescript-eslint/no-explicit-any */
// 
// import * as bridge from "@kurrent/db-client-bridge";
// import { Client } from "../Client";
// import { FORWARDS, START, END } from "../constants";
// import type {
//   BaseOptions,
//   Direction,
//   EventType,
//   ReadRevision,
//   ResolvedEvent,
// } from "../types";
// import { InvalidArgumentError } from "../utils";
// import { convertRustEvent } from "../utils/convertRustEvent";
// import { convertBridgeError } from "../utils/convertBridgeError";
// import { EventEmitter } from "node:events";
// import {StreamReader} from "../types/streamReader";
// 
// export interface ReadStreamOptions extends BaseOptions {
//   maxCount?: number | bigint;
//   fromRevision?: ReadRevision;
//   resolveLinkTos?: boolean;
//   direction?: Direction;
// }
// 
// declare module "../Client" {
//   interface Client {
//     readStream<KnownEventType extends EventType = EventType>(
//         streamName: string,
//         options?: ReadStreamOptions
//     ): StreamReader<ResolvedEvent<KnownEventType>>;
//   }
// }
// 
// class ConvertedStream<Event>
//     extends EventEmitter
//     implements AsyncIterable<Event>
// {
//   constructor(
//       private originalStream: bridge.StreamReader,
//       private streamName: string
//   ) {
//     super();
// 
//     originalStream.on("data", (data: bridge.ResolvedEvent[]) => {
//       try {
//         data.forEach(event => {
//           const converted = convertRustEvent(event) as Event;
//           this.emit("data", converted);
//         });
//       } catch (error) {
//         this.emit("error", convertBridgeError(error, this.streamName));
//       }
//     });
// 
//     originalStream.on("error", (error: Error) => {
//       this.emit("error", convertBridgeError(error, this.streamName));
//     });
// 
//     originalStream.on("end", () => this.emit("end"));
//   }
// 
//   async *[Symbol.asyncIterator](): AsyncIterator<Event> {
//     try {
//       for await (const batch of this.originalStream) {
//         for (const event of batch) {
//           yield convertRustEvent(event) as Event;
//         }
//       }
//     } catch (error) {
//       throw convertBridgeError(error, this.streamName);
//     }
//   }
// 
//   on(event: "data", listener: (data: Event) => void): this;
//   on(event: "error", listener: (error: Error) => void): this;
//   on(event: "end", listener: () => void): this;
//   on(event: string | symbol, listener: (...args: any[]) => void): this {
//     super.on(event, listener);
//     return this;
//   }
// }
// 
// Client.prototype.readStream = function <
//     KnownEventType extends EventType = EventType
// >(
//     this: Client,
//     streamName: string,
//     {
//       maxCount = Number.MAX_SAFE_INTEGER,
//       fromRevision = START,
//       resolveLinkTos = false,
//       direction = FORWARDS,
//       ...baseOptions
//     }: ReadStreamOptions = {}
// ): StreamReader<ResolvedEvent<KnownEventType>> {
//   const options: bridge.RustReadStreamOptions = {
//     maxCount: BigInt(maxCount),
//     fromRevision,
//     resolvesLink: resolveLinkTos,
//     direction,
//     requiresLeader: baseOptions.requiresLeader ?? true,
//     credentials: baseOptions.credentials,
//   };
// 
//   switch (fromRevision) {
//     case START:
//     case END:
//       break;
//     default: {
//       const lowerBound = BigInt("0");
//       const upperBound = BigInt("0xffffffffffffffff");
// 
//       if (fromRevision < lowerBound) {
//         throw new InvalidArgumentError(
//             `fromRevision value must be a non-negative integer. Value Received: ${fromRevision}`
//         );
//       }
// 
//       if (fromRevision > upperBound) {
//         throw new InvalidArgumentError(
//             `fromRevision value must be a non-negative integer, range from 0 to 18446744073709551615. Value Received: ${fromRevision}`
//         );
//       }
// 
//       options.fromRevision = fromRevision;
//     }
//   }
// 
//   let rawStream: bridge.StreamReader;
//   try {
//     rawStream = this.rustClient.readStream(streamName, options);
//   } catch (error) {
//     throw convertBridgeError(error, streamName);
//   }
// 
//   return new ConvertedStream<ResolvedEvent<KnownEventType>>(
//       rawStream,
//       streamName
//   );
// };
