import { SchemaFormat } from "../../generated/kurrentdb/protocols/v2/streams/streams_pb";

/**
 * Converts a content type to a SchemaDataFormat.
 * @param format - The content type to convert.
 * @returns The corresponding SchemaDataFormat.
 */
export const convertToSchemaDataFormat = (
  format: "application/json" | "application/octet-stream"
): SchemaFormat => {
  switch (format) {
    case "application/json":
      return SchemaFormat.SCHEMA_FORMAT_JSON;
    case "application/octet-stream":
      return SchemaFormat.SCHEMA_FORMAT_BYTES;
    default:
      throw new Error(`Unsupported data format: ${format}`);
  }
};
