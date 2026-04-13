import {
  NotLeaderError,
  StreamNotFoundError,
  StreamDeletedError,
  AccessDeniedError,
  UnavailableError,
  DeadlineExceededError,
  UnknownError,
} from "./CommandError";
import { debug } from "./debug";
import { ServiceError } from "@grpc/grpc-js";

export const convertBridgeError = (error: Error, streamName?: string) => {
  const stream = streamName ?? "unknown stream";

  // Bridge errors are plain Error objects from the Rust native addon with
  // name, message, and metadata (plain object). They lack gRPC-specific
  // ServiceError properties (code, details) but CommandErrorBase handles this.
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
    default:
      debug.connection(
        "Unrecognized bridge error type '%s': %s",
        error.name,
        error.message
      );
      return new UnknownError(serviceError);
  }
};
