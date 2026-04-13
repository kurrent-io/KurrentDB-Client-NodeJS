import {
  NotLeaderError,
  StreamNotFoundError,
  StreamDeletedError,
  AccessDeniedError,
  UnavailableError,
  DeadlineExceededError,
  UnknownError,
} from "./CommandError";
import { ServiceError } from "@grpc/grpc-js";

export const convertBridgeError = (error: Error, streamName?: string) => {
  const stream = streamName ?? "unknown stream";
  const serviceError = error as ServiceError;

  switch (error.name) {
    case "StreamNotFoundError":
      return new StreamNotFoundError(serviceError, stream);
    case "StreamDeletedError":
      return StreamDeletedError.fromStreamName(stream);
    case "NotLeaderError":
      return new NotLeaderError(serviceError);
    case "AccessDeniedError":
      return new AccessDeniedError(serviceError);
    case "UnavailableError":
      return new UnavailableError(serviceError);
    case "DeadlineExceededError":
      return new DeadlineExceededError(serviceError);
    case "UnknownError":
      return new UnknownError(serviceError);
    default:
      return new UnknownError(serviceError);
  }
};
