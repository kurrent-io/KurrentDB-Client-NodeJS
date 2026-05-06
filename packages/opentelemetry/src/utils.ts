/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  isBasicCredentials,
  type Credentials,
  type EventData,
  type JSONEventData,
} from "@kurrent/kurrentdb-client";

export function hasConvertGrpcEventMethod(
  obj: any
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
): obj is { convertGrpcEvent: Function } {
  return typeof obj.convertGrpcEvent === "function";
}

export function isJSONEventData(event: EventData): event is JSONEventData {
  return event.contentType === "application/json";
}

export type AuthKind = "basic" | "bearer" | "provider";

export type AuthContext = {
  username?: string;
  kind?: AuthKind;
};

/**
 * Derive the auth-related span attributes from the per-call credentials and
 * whether a {@link CredentialsProvider} is configured. Narrows the credential
 * shape once so `username` is only ever set alongside `kind: "basic"`.
 */
export const describeAuth = (
  credentials: Credentials | undefined,
  hasProvider: boolean
): AuthContext => {
  if (isBasicCredentials(credentials)) {
    return { kind: "basic", username: credentials.username };
  }
  if (credentials) return { kind: "bearer" };
  if (hasProvider) return { kind: "provider" };
  return {};
};
