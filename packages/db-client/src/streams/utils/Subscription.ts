import { Transform, TransformCallback, TransformOptions } from "stream";

import type { ClientReadableStream, ServiceError } from "@grpc/grpc-js";

import type { ReadResp } from "../../../generated/streams_pb";

import type {
  CaughtUp,
  FellBehind,
  Filter,
  Position,
  ReadableSubscription,
} from "../../types";
import {
  ConvertGrpcEvent,
  convertToCommandError,
  isClientCancellationError,
} from "../../utils";

type CreateGRPCStream = () => Promise<ClientReadableStream<ReadResp>>;

export class Subscription<E>
  extends Transform
  implements ReadableSubscription<E>
{
  protected convertGrpcEvent: ConvertGrpcEvent<ReadResp.ReadEvent, E>;
  #grpcStream: Promise<ClientReadableStream<ReadResp>>;
  #checkpointReached?: Filter["checkpointReached"];
  public id?: string;

  constructor(
    createGRPCStream: CreateGRPCStream,
    convertGrpcEvent: ConvertGrpcEvent<ReadResp.ReadEvent, E>,
    options: TransformOptions,
    checkpointReached?: Filter["checkpointReached"]
  ) {
    super({ ...options, objectMode: true });
    this.convertGrpcEvent = convertGrpcEvent;
    this.#grpcStream = createGRPCStream();
    this.#checkpointReached = checkpointReached;
    this.initialize();
  }

  private initialize = async () => {
    try {
      (await this.#grpcStream)
        .on("error", (err: ServiceError) => {
          if (isClientCancellationError(err)) return;
          const error = convertToCommandError(err);
          this.emit("error", error);
        })
        .pipe(this);
    } catch (error) {
      this.emit("error", error);
    }
  };

  async _transform(
    resp: ReadResp,
    _encoding: string,
    next: TransformCallback
  ): Promise<void> {
    if (resp.hasConfirmation?.()) {
      this.id = resp.getConfirmation()?.getSubscriptionId();
      this.emit("confirmation");
    }

    if (resp.hasCaughtUp?.()) {
      const info: CaughtUp = {};
      const grpc = resp.getCaughtUp()!;

      if (grpc.hasTimestamp()) {
        info.date = grpc.getTimestamp()!.toDate();
        if (grpc.hasStreamRevision()) {
          info.revision = BigInt(grpc.getStreamRevision()!);
        } else if (grpc.hasPosition()) {
          const position = grpc.getPosition()!;
          info.position = {
            commit: BigInt(position.getCommitPosition()),
            prepare: BigInt(position.getPreparePosition()),
          };
        }
      }

      this.emit("caughtUp", info);
    }

    if (resp.hasFellBehind?.()) {
      const info: FellBehind = {};
      const grpc = resp.getFellBehind()!;

      if (grpc.hasTimestamp()) {
        info.date = grpc.getTimestamp()!.toDate();
        if (grpc.hasStreamRevision()) {
          info.revision = BigInt(grpc.getStreamRevision()!);
        } else if (grpc.hasPosition()) {
          const position = grpc.getPosition()!;
          info.position = {
            commit: BigInt(position.getCommitPosition()),
            prepare: BigInt(position.getPreparePosition()),
          };
        }
      }

      this.emit("fellBehind", info);
    }

    if (resp.hasCheckpoint?.() && this.#checkpointReached) {
      const checkpoint = resp.getCheckpoint()!;
      const position: Position = {
        commit: BigInt(checkpoint.getCommitPosition()),
        prepare: BigInt(checkpoint.getPreparePosition()),
      };
      await this.#checkpointReached(this, position);
    }

    if (resp.hasEvent?.()) {
      const resolved = this.convertGrpcEvent(resp.getEvent()!);
      return next(null, resolved);
    }

    next();
  }

  public async unsubscribe(): Promise<void> {
    const stream = await this.#grpcStream;
    return new Promise((resolve) => {
      // https://github.com/grpc/grpc-node/issues/1464
      // https://github.com/grpc/grpc-node/issues/1652
      setImmediate(() => {
        stream.cancel();
        resolve();
      });
    });
  }
}
