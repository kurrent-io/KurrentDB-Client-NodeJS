import { randomUUID } from "crypto";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

import { StreamsClient } from "../../../generated/kurrentdb/protocols/v1/streams_grpc_pb";
import {
  BatchAppendReq,
  BatchAppendResp,
} from "../../../generated/kurrentdb/protocols/v1/streams_pb";
import {
  Empty,
  UUID,
} from "../../../generated/kurrentdb/protocols/v1/shared_pb";

import type { Client } from "../../Client";
import type { AppendResult, EventData } from "../../types";
import {
  debug,
  createUUID,
  parseUUID,
  convertToCommandError,
  backpressuredWrite,
  createStreamIdentifier,
  InternalOptions,
} from "../../utils";

import {
  unpackToCommandError,
  unpackWrongExpectedVersion,
} from "./unpackError";

import type { AppendToStreamOptions } from ".";

type PromiseBank = Map<
  string,
  [resolve: (r: AppendResult) => void, reject: (error: Error) => void]
>;

const streamCache = new WeakMap<
  StreamsClient,
  Promise<ReturnType<StreamsClient["batchAppend"]>>
>();

const promiseBanks = new WeakMap<
  ReturnType<StreamsClient["batchAppend"]>,
  PromiseBank
>();

export const batchAppend = async function (
  this: Client,
  streamName: string,
  events: EventData[],
  {
    streamState,
    batchAppendSize,
    ...baseOptions
  }: InternalOptions<AppendToStreamOptions>
): Promise<AppendResult> {
  const correlationId = randomUUID();

  const stream = await this.GRPCStreamCreator(
    StreamsClient,
    "appendToStream",
    (client) => {
      const promiseBank: PromiseBank = new Map();

      const batchStream = client
        .batchAppend(
          ...this.callArguments(baseOptions, {
            deadline: Infinity,
          })
        )
        .on("data", (resp: BatchAppendResp) => {
          const resultingId = parseUUID(resp.getCorrelationId()!);
          const entry = promiseBank.get(resultingId);

          if (!entry) {
            debug.command_grpc(
              "batchAppend: dropping response for unknown correlationId %s",
              resultingId
            );
            return;
          }

          const [resolve, reject] = entry;
          promiseBank.delete(resultingId);

          if (resp.hasError()) {
            const grpcError = resp.getError()!;

            if (!this.throwOnAppendFailure) {
              const wrongExpectedVersion =
                unpackWrongExpectedVersion(grpcError);

              if (wrongExpectedVersion) {
                const nextExpectedRevision =
                  wrongExpectedVersion.hasCurrentStreamRevision()
                    ? BigInt(wrongExpectedVersion.hasCurrentStreamRevision())
                    : BigInt(-1);

                return resolve({
                  success: false,
                  nextExpectedRevision,
                  position: undefined,
                });
              }
            }

            return reject(
              unpackToCommandError(
                grpcError,
                Buffer.from(
                  resp.getStreamIdentifier()!.getStreamName()
                ).toString("utf8")
              )
            );
          }

          const success = resp.getSuccess()!;
          const nextExpectedRevision = BigInt(success.getCurrentRevision());
          const grpcPosition = success.getPosition();
          const position = grpcPosition
            ? {
                commit: BigInt(grpcPosition.getCommitPosition()),
                prepare: BigInt(grpcPosition.getPreparePosition()),
              }
            : undefined;

          return resolve({
            success: true,
            nextExpectedRevision,
            position,
          });
        })
        .on("error", (error) => {
          for (const [_, reject] of promiseBank.values()) {
            reject(convertToCommandError(error));
          }
          promiseBank.clear();
        });

      promiseBanks.set(batchStream, promiseBank);

      return batchStream;
    },
    streamCache
  )();

  const promiseBank = promiseBanks.get(stream);
  if (!promiseBank) {
    throw new Error(
      "batchAppend could not find the promise bank for the stream."
    );
  }

  return new Promise(async (resolve, reject) => {
    promiseBank.set(correlationId, [resolve, reject]);

    // Anything that throws in here — most easily a non-serializable event
    // payload reaching JSON.stringify in eventBatcher — happens while the
    // stream is healthy, so the "error" handler above never runs and never
    // settles this entry. The Promise constructor also discards an async
    // executor's rejection, so without this catch the caller awaits forever
    // and the failure surfaces only as an unhandledRejection.
    try {
      const correlationUUID = createUUID(correlationId);
      const options = new BatchAppendReq.Options();
      const identifier = createStreamIdentifier(streamName);
      const deadline = Timestamp.fromDate(
        this.createDeadline(baseOptions.deadline)
      );

      options.setStreamIdentifier(identifier);
      options.setDeadline21100(deadline);

      switch (streamState) {
        case "any": {
          options.setAny(new Empty());
          break;
        }
        case "no_stream": {
          options.setNoStream(new Empty());
          break;
        }
        case "stream_exists": {
          options.setStreamExists(new Empty());
          break;
        }
        default: {
          options.setStreamPosition(streamState.toString(10));
          break;
        }
      }

      for (const batch of eventBatcher(
        events,
        correlationUUID,
        options,
        batchAppendSize
      )) {
        debug.command_grpc("batchAppend: %g", batch);
        await backpressuredWrite(stream, batch);
      }
    } catch (error) {
      promiseBank.delete(correlationId);
      reject(convertToCommandError(error as Error));
    }
  });
};

function* eventBatcher(
  events: EventData[],
  correlationId: UUID,
  options: BatchAppendReq.Options,
  maxBatchSize: number
) {
  const createAppendRequest = (addOptions = false) => {
    const appendRequest = new BatchAppendReq();
    if (addOptions) {
      appendRequest.setOptions(options);
    }
    appendRequest.setCorrelationId(correlationId);
    appendRequest.setIsFinal(false);
    return appendRequest;
  };

  let appendRequest = createAppendRequest(true);
  let batchSize = 0;

  for (const event of events) {
    const message = new BatchAppendReq.ProposedMessage();

    const id = new UUID();
    id.setString(event.id);
    message.setId(id);
    message.getMetadataMap().set("type", event.type);
    message.getMetadataMap().set("content-type", event.contentType);

    switch (event.contentType) {
      case "application/json": {
        const data = JSON.stringify(event.data);
        message.setData(Buffer.from(data, "utf8").toString("base64"));
        break;
      }
      case "application/octet-stream": {
        message.setData(event.data);
        break;
      }
    }

    if (event.metadata) {
      if (event.metadata.constructor === Uint8Array) {
        message.setCustomMetadata(event.metadata);
      } else {
        const metadata = JSON.stringify(event.metadata);
        message.setCustomMetadata(
          Buffer.from(metadata, "utf8").toString("base64")
        );
      }
    }

    const messageSize = message.serializeBinary().length;

    if (batchSize + messageSize >= maxBatchSize) {
      yield appendRequest;
      appendRequest = createAppendRequest(false);
      batchSize = 0;
    }

    batchSize += messageSize;
    appendRequest.addProposedMessages(message);
  }

  appendRequest.setIsFinal(true);

  yield appendRequest;
}
