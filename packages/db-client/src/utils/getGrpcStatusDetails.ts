import { ServiceError } from "@grpc/grpc-js";
import { Status } from "../../generated/kurrentdb/protocols/v1/status_pb";

export const getGrpcStatusDetails = (
  error: ServiceError
): { value: Uint8Array; typeUrl: string } | undefined => {
  const statusBuffer = error.metadata.get("grpc-status-details-bin")?.[0];
  if (!statusBuffer || typeof statusBuffer === "string") {
    return undefined;
  }

  const status = Status.deserializeBinary(new Uint8Array(statusBuffer));
  const details = status.getDetails();

  const value = details?.getValue_asU8() ?? new Uint8Array();
  const typeUrl = details?.getTypeUrl() ?? "";

  return { value, typeUrl };
};
