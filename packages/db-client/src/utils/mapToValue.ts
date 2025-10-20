import { NullValue, Value } from "google-protobuf/google/protobuf/struct_pb";

export const mapToValue = (source: unknown): Value => {
  const value = new Value();

  if (source === null || source === undefined) {
    value.setNullValue(NullValue.NULL_VALUE);
    return value;
  }

  switch (typeof source) {
    case "string":
      value.setStringValue(source);
      break;

    case "boolean":
      value.setBoolValue(source);
      break;

    case "number":
      value.setNumberValue(source);
      break;

    case "object":
      if (source instanceof Date) {
        value.setStringValue(source.toISOString());
      } else if (source instanceof Uint8Array) {
        value.setStringValue(Buffer.from(source).toString("base64"));
      } else if (Buffer.isBuffer(source)) {
        value.setStringValue(source.toString("base64"));
      } else {
        value.setStringValue(JSON.stringify(source));
      }
      break;

    default:
      value.setStringValue(String(source));
      break;
  }

  return value;
};

export const mapToValueMap = (
  obj: Record<string, unknown>
): Map<string, Value> => {
  const map = new Map<string, Value>();

  for (const [key, value] of Object.entries(obj)) {
    map.set(key, mapToValue(value));
  }

  return map;
};
