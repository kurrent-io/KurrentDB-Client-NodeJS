import { randomUUID } from "crypto";
import { UUID } from "../../generated/kurrentdb/protocols/v1/shared_pb";

export const createUUID = (id: string = randomUUID()): UUID => {
  const uuid = new UUID();
  uuid.setString(id);
  return uuid;
};

export function parseUUID(uuid: UUID): string;
export function parseUUID(uuid: UUID | undefined): string | undefined;
export function parseUUID(uuid: UUID | undefined): string | undefined {
  if (!uuid) return undefined;

  if (uuid.hasStructured()) {
    return structuredUUIDToString(uuid.getStructured()!);
  }

  return uuid.getString();
}

export const structuredUUIDToString = (structured: UUID.Structured): string => {
  const ms = toUnsignedHex(structured.getMostSignificantBits());
  const ls = toUnsignedHex(structured.getLeastSignificantBits());
  return `${ms.slice(0, 8)}-${ms.slice(8, 12)}-${ms.slice(12)}-${ls.slice(
    0,
    4
  )}-${ls.slice(4)}`;
};

const U64_MASK = (1n << 64n) - 1n;
const toUnsignedHex = (value: string): string =>
  (BigInt(value) & U64_MASK).toString(16).padStart(16, "0");
