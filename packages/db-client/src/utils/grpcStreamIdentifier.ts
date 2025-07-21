import { StreamIdentifier } from "../../generated/kurrentdb/protocols/v1/shared_pb";

export const createStreamIdentifier = (
  streamName: string
): StreamIdentifier => {
  const identifier = new StreamIdentifier();
  identifier.setStreamName(Uint8Array.from(Buffer.from(streamName, "utf8")));
  return identifier;
};
