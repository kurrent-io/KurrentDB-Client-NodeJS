import dynamic from "../../generated/kurrentdb/protocols/v2/core_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { NullValue } from "google-protobuf/google/protobuf/struct_pb";

export const mapToDynamicValue = (source: unknown): dynamic.DynamicValue => {
  const dynamicValue = new dynamic.DynamicValue();

  if (source === null || source === undefined) {
    dynamicValue.setNullValue(NullValue.NULL_VALUE);
    return dynamicValue;
  }

  switch (typeof source) {
    case "string":
      dynamicValue.setStringValue(source);
      break;

    case "boolean":
      dynamicValue.setBooleanValue(source);
      break;

    case "number":
      if (
        Number.isInteger(source) &&
        source >= -2147483648 &&
        source <= 2147483647
      ) {
        dynamicValue.setInt32Value(source);
      } else if (Number.isInteger(source)) {
        dynamicValue.setInt64Value(source);
      } else {
        dynamicValue.setDoubleValue(source);
      }
      break;

    case "bigint":
      dynamicValue.setInt64Value(Number(source));
      break;

    case "object":
      if (source instanceof Date) {
        const timestamp = new Timestamp();
        timestamp.fromDate(source);
        dynamicValue.setTimestampValue(timestamp);
      } else if (source instanceof Uint8Array) {
        dynamicValue.setBytesValue(source);
      } else if (Buffer.isBuffer(source)) {
        dynamicValue.setBytesValue(Uint8Array.from(source));
      } else {
        dynamicValue.setStringValue(JSON.stringify(source));
      }
      break;

    default:
      dynamicValue.setStringValue(String(source));
      break;
  }

  return dynamicValue;
};

export const mapObjectToDynamicValueMap = (
  obj: Record<string, unknown>
): Map<string, dynamic.DynamicValue> => {
  const map = new Map<string, dynamic.DynamicValue>();

  for (const [key, value] of Object.entries(obj)) {
    map.set(key, mapToDynamicValue(value));
  }

  return map;
};
