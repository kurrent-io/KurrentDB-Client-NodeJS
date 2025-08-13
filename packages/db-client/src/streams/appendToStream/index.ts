import { StreamsService } from "../../../generated/kurrentdb/protocols/v1/streams_grpc_pb";
import { StreamsServiceService } from "../../../generated/kurrentdb/protocols/v2/streams/streams_grpc_pb";
import { Client } from "../../Client";
import { ANY } from "../../constants";
import type {
  BaseOptions,
  AppendResult,
  AppendStreamState,
  EventData,
  EventType,
  MultiAppendResult,
  AppendStreamRequest,
} from "../../types";
import { UnsupportedError } from "../../utils";

import { append } from "./append";
import { batchAppend } from "./batchAppend";
import { multiStreamAppend } from "./multiStreamAppend";

export interface AppendToStreamOptions extends BaseOptions {
  /**
   * Asks the server to check the stream is at specific revision before writing events.
   * @defaultValue ANY
   */
  streamState?: AppendStreamState;
  /**
   * The batch size, in bytes.
   * @defaultValue 3 * 1024 * 1024
   */
  batchAppendSize?: number;
}

declare module "../../Client" {
  interface Client {
    /**
     * Appends events to a given stream.
     * @param streamName - A stream name.
     * @param events - Events or event to write.
     * @param options - Writing options.
     */
    appendToStream<KnownEventType extends EventType = EventType>(
      streamName: string,
      events: EventData<KnownEventType> | EventData<KnownEventType>[],
      options?: AppendToStreamOptions
    ): Promise<AppendResult>;

    multiStreamAppend<KnownEventType extends EventType = EventType>(
      requests: AppendStreamRequest<KnownEventType>[]
    ): Promise<MultiAppendResult>;
  }
}

Client.prototype.appendToStream = async function <
  KnownEventType extends EventType = EventType
>(
  this: Client,
  streamName: string,
  event: EventData<KnownEventType> | EventData<KnownEventType>[],
  {
    streamState = ANY,
    batchAppendSize = 3 * 1024 * 1024,
    ...baseOptions
  }: AppendToStreamOptions = {}
): Promise<AppendResult> {
  const events = Array.isArray(event) ? event : [event];

  if (
    !baseOptions.credentials &&
    (await this.supports(StreamsService.batchAppend))
  ) {
    return batchAppend.call(this, streamName, events, {
      streamState: streamState,
      batchAppendSize,
      ...baseOptions,
    });
  }

  return append.call(this, streamName, events, {
    streamState: streamState,
    batchAppendSize,
    ...baseOptions,
  });
};

Client.prototype.multiStreamAppend = async function (
  this: Client,
  requests: AppendStreamRequest[]
): Promise<MultiAppendResult> {
  if (!(await this.supports(StreamsServiceService.multiStreamAppendSession))) {
    throw new UnsupportedError("multiStreamAppend", "25.1");
  }
  return multiStreamAppend.call(this, requests);
};
