/**
 * Specifies the data format for schema content.
 */
export enum SchemaDataFormat {
  JSON = "Json",
  BINARY = "Binary",
  PROTOBUF = "Protobuf",
  BYTES = "Bytes",
}

/**
 * Converts a content type to a SchemaDataFormat.
 * @param format - The content type to convert.
 * @returns The corresponding SchemaDataFormat.
 */
export const convertToSchemaDataFormat = (
  format: "application/json" | "application/octet-stream"
): SchemaDataFormat => {
  switch (format) {
    case "application/json":
      return SchemaDataFormat.JSON;
    case "application/octet-stream":
      return SchemaDataFormat.BINARY;
    default:
      throw new Error(`Unsupported data format: ${format}`);
  }
};
