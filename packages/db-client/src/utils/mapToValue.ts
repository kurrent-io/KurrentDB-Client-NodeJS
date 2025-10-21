import { Value } from "google-protobuf/google/protobuf/struct_pb";

export const mapToValue = (source: string): Value => {
  const value = new Value();
  value.setStringValue(source);
  return value;
};

export const mapToValueMap = (
  obj: Record<string, string>
): Map<string, Value> => {
  const map = new Map<string, Value>();

  for (const [key, value] of Object.entries(obj)) {
    map.set(key, mapToValue(value));
  }

  return map;
};
