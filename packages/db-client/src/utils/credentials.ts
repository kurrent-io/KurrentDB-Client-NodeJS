import type {
  BasicCredentials,
  BearerCredentials,
  Credentials,
} from "../types";

/**
 * Type predicate narrowing {@link Credentials} to {@link BasicCredentials}
 * (username/password). Prefer this over inline `"username" in credentials`
 * checks so the discrimination lives in one place.
 */
export const isBasicCredentials = (
  credentials?: Credentials
): credentials is BasicCredentials =>
  credentials !== undefined && "username" in credentials;

/**
 * Type predicate narrowing {@link Credentials} to {@link BearerCredentials}.
 */
export const isBearerCredentials = (
  credentials?: Credentials
): credentials is BearerCredentials =>
  credentials !== undefined && "bearerToken" in credentials;

/**
 * Render a {@link Credentials} value as the verbatim value of an
 * `Authorization` HTTP header (`"Basic ..."` or `"Bearer ..."`).
 *
 * Shared between the gRPC metadata generator and the HTTP fallback so the two
 * paths stay in lockstep.
 */
export const toAuthorizationHeader = (credentials: Credentials): string => {
  if (isBearerCredentials(credentials)) {
    return `Bearer ${credentials.bearerToken}`;
  }

  const auth = Buffer.from(
    `${credentials.username}:${credentials.password}`
  ).toString("base64");
  return `Basic ${auth}`;
};
