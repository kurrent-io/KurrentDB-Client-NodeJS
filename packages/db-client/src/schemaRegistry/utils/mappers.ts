import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

import {
  SchemaDataFormat as GrpcSchemaDataFormat,
  CompatibilityMode as GrpcCompatibilityMode,
} from "../../../generated/kurrentdb/protocols/v2/registry/shared_pb";
import {
  Schema as GrpcSchema,
  SchemaDetails as GrpcSchemaDetails,
  SchemaVersion as GrpcSchemaVersion,
  RegisteredSchema as GrpcRegisteredSchema,
  DeleteSchemaVersionsResponse,
} from "../../../generated/kurrentdb/protocols/v2/registry/schemas_pb";
import {
  SchemaCompatibilityError as GrpcSchemaCompatibilityError,
  SchemaCompatibilityErrorKind as GrpcSchemaCompatibilityErrorKind,
} from "../../../generated/kurrentdb/protocols/v2/registry/validation_pb";

import type {
  SchemaDataFormat,
  CompatibilityMode,
  Schema,
  SchemaDetails,
  SchemaVersion,
  RegisteredSchema,
  SchemaVersionError,
  SchemaCompatibilityError,
  SchemaCompatibilityErrorKind,
} from "../types";

// ============================================================================
// Enum Mappers
// ============================================================================

const schemaDataFormatToGrpc: Record<SchemaDataFormat, GrpcSchemaDataFormat> = {
  json: GrpcSchemaDataFormat.SCHEMA_DATA_FORMAT_JSON,
  protobuf: GrpcSchemaDataFormat.SCHEMA_DATA_FORMAT_PROTOBUF,
  avro: GrpcSchemaDataFormat.SCHEMA_DATA_FORMAT_AVRO,
  bytes: GrpcSchemaDataFormat.SCHEMA_DATA_FORMAT_BYTES,
};

const grpcSchemaDataFormatMap: Record<GrpcSchemaDataFormat, SchemaDataFormat> =
  {
    [GrpcSchemaDataFormat.SCHEMA_DATA_FORMAT_UNSPECIFIED]: "bytes",
    [GrpcSchemaDataFormat.SCHEMA_DATA_FORMAT_JSON]: "json",
    [GrpcSchemaDataFormat.SCHEMA_DATA_FORMAT_PROTOBUF]: "protobuf",
    [GrpcSchemaDataFormat.SCHEMA_DATA_FORMAT_AVRO]: "avro",
    [GrpcSchemaDataFormat.SCHEMA_DATA_FORMAT_BYTES]: "bytes",
  };

const compatibilityModeToGrpc: Record<
  CompatibilityMode,
  GrpcCompatibilityMode
> = {
  backward: GrpcCompatibilityMode.COMPATIBILITY_MODE_BACKWARD,
  forward: GrpcCompatibilityMode.COMPATIBILITY_MODE_FORWARD,
  full: GrpcCompatibilityMode.COMPATIBILITY_MODE_FULL,
  "backward-all": GrpcCompatibilityMode.COMPATIBILITY_MODE_BACKWARD_ALL,
  "forward-all": GrpcCompatibilityMode.COMPATIBILITY_MODE_FORWARD_ALL,
  "full-all": GrpcCompatibilityMode.COMPATIBILITY_MODE_FULL_ALL,
  none: GrpcCompatibilityMode.COMPATIBILITY_MODE_NONE,
};

const grpcCompatibilityModeMap: Record<
  GrpcCompatibilityMode,
  CompatibilityMode
> = {
  [GrpcCompatibilityMode.COMPATIBILITY_MODE_UNSPECIFIED]: "none",
  [GrpcCompatibilityMode.COMPATIBILITY_MODE_BACKWARD]: "backward",
  [GrpcCompatibilityMode.COMPATIBILITY_MODE_FORWARD]: "forward",
  [GrpcCompatibilityMode.COMPATIBILITY_MODE_FULL]: "full",
  [GrpcCompatibilityMode.COMPATIBILITY_MODE_BACKWARD_ALL]: "backward-all",
  [GrpcCompatibilityMode.COMPATIBILITY_MODE_FORWARD_ALL]: "forward-all",
  [GrpcCompatibilityMode.COMPATIBILITY_MODE_FULL_ALL]: "full-all",
  [GrpcCompatibilityMode.COMPATIBILITY_MODE_NONE]: "none",
};

const grpcSchemaCompatibilityErrorKindMap: Record<
  GrpcSchemaCompatibilityErrorKind,
  SchemaCompatibilityErrorKind
> = {
  [GrpcSchemaCompatibilityErrorKind.SCHEMA_COMPATIBILITY_ERROR_KIND_UNSPECIFIED]:
    "unspecified",
  [GrpcSchemaCompatibilityErrorKind.SCHEMA_COMPATIBILITY_ERROR_KIND_MISSING_REQUIRED_PROPERTY]:
    "missing-required-property",
  [GrpcSchemaCompatibilityErrorKind.SCHEMA_COMPATIBILITY_ERROR_KIND_INCOMPATIBLE_TYPE_CHANGE]:
    "incompatible-type-change",
  [GrpcSchemaCompatibilityErrorKind.SCHEMA_COMPATIBILITY_ERROR_KIND_OPTIONAL_TO_REQUIRED]:
    "optional-to-required",
  [GrpcSchemaCompatibilityErrorKind.SCHEMA_COMPATIBILITY_ERROR_KIND_NEW_REQUIRED_PROPERTY]:
    "new-required-property",
  [GrpcSchemaCompatibilityErrorKind.SCHEMA_COMPATIBILITY_ERROR_KIND_REMOVED_PROPERTY]:
    "removed-property",
  [GrpcSchemaCompatibilityErrorKind.SCHEMA_COMPATIBILITY_ERROR_KIND_ARRAY_TYPE_INCOMPATIBILITY]:
    "array-type-incompatibility",
  [GrpcSchemaCompatibilityErrorKind.SCHEMA_COMPATIBILITY_ERROR_KIND_DATA_FORMAT_MISMATCH]:
    "data-format-mismatch",
};

// ============================================================================
// Export Enum Conversion Functions
// ============================================================================

export function mapSchemaDataFormatToGrpc(
  format: SchemaDataFormat
): GrpcSchemaDataFormat {
  return schemaDataFormatToGrpc[format];
}

export function mapGrpcSchemaDataFormat(
  format: GrpcSchemaDataFormat
): SchemaDataFormat {
  return grpcSchemaDataFormatMap[format];
}

export function mapCompatibilityModeToGrpc(
  mode: CompatibilityMode
): GrpcCompatibilityMode {
  return compatibilityModeToGrpc[mode];
}

export function mapGrpcCompatibilityMode(
  mode: GrpcCompatibilityMode
): CompatibilityMode {
  return grpcCompatibilityModeMap[mode];
}

// ============================================================================
// Timestamp Mapper
// ============================================================================

export function mapGrpcTimestamp(
  timestamp: Timestamp | undefined
): Date | undefined {
  if (!timestamp) return undefined;
  const seconds = timestamp.getSeconds();
  const nanos = timestamp.getNanos();
  return new Date(seconds * 1000 + Math.floor(nanos / 1_000_000));
}

// ============================================================================
// Map Utilities
// ============================================================================

function mapToRecord<K extends string, V>(
  map: Array<[K, V]> | Map<K, V>
): Record<string, V> {
  const result: Record<string, V> = {};
  if (Array.isArray(map)) {
    for (const [key, value] of map) {
      result[key] = value;
    }
  } else {
    map.forEach((value, key) => {
      result[key] = value;
    });
  }
  return result;
}

// ============================================================================
// Message Mappers
// ============================================================================

export function mapGrpcSchemaDetails(
  details: GrpcSchemaDetails | undefined
): SchemaDetails {
  if (!details) {
    return {
      dataFormat: "bytes",
      compatibility: "none",
    };
  }

  return {
    dataFormat: mapGrpcSchemaDataFormat(details.getDataFormat()),
    compatibility: mapGrpcCompatibilityMode(details.getCompatibility()),
    description: details.getDescription(),
    tags: mapToRecord(details.getTagsMap().toArray()),
  };
}

export function mapGrpcSchema(grpcSchema: GrpcSchema): Schema {
  return {
    schemaName: grpcSchema.getSchemaName(),
    details: mapGrpcSchemaDetails(grpcSchema.getDetails()),
    latestSchemaVersion: grpcSchema.getLatestSchemaVersion(),
    createdAt: mapGrpcTimestamp(grpcSchema.getCreatedAt()),
    updatedAt: mapGrpcTimestamp(grpcSchema.getUpdatedAt()),
  };
}

export function mapGrpcSchemaVersion(
  grpcVersion: GrpcSchemaVersion
): SchemaVersion {
  return {
    schemaVersionId: grpcVersion.getSchemaVersionId(),
    versionNumber: grpcVersion.getVersionNumber(),
    schemaDefinition: grpcVersion.getSchemaDefinition_asU8(),
    dataFormat: mapGrpcSchemaDataFormat(grpcVersion.getDataFormat()),
    registeredAt: mapGrpcTimestamp(grpcVersion.getRegisteredAt()),
  };
}

export function mapGrpcRegisteredSchema(
  grpcSchema: GrpcRegisteredSchema
): RegisteredSchema {
  const definition = grpcSchema.getSchemaDefinition_asU8();
  return {
    schemaName: grpcSchema.getSchemaName(),
    schemaVersionId: grpcSchema.getSchemaVersionId(),
    versionNumber: grpcSchema.getVersionNumber(),
    schemaDefinition: definition.length > 0 ? definition : undefined,
    dataFormat: mapGrpcSchemaDataFormat(grpcSchema.getDataFormat()),
    compatibility: mapGrpcCompatibilityMode(grpcSchema.getCompatibility()),
    tags: mapToRecord(grpcSchema.getTagsMap().toArray()),
    registeredAt: mapGrpcTimestamp(grpcSchema.getRegisteredAt()),
  };
}

export function mapGrpcSchemaVersionError(
  error: DeleteSchemaVersionsResponse.SchemaVersionError
): SchemaVersionError {
  return {
    versionNumber: error.getVersionNumber(),
  };
}

export function mapGrpcSchemaCompatibilityError(
  error: GrpcSchemaCompatibilityError
): SchemaCompatibilityError {
  return {
    kind: grpcSchemaCompatibilityErrorKindMap[error.getKind()],
    details: error.getDetails(),
    propertyPath: error.getPropertyPath() || undefined,
    originalType: error.getOriginalType() || undefined,
    newType: error.getNewType() || undefined,
  };
}

// ============================================================================
// Input Conversion Utilities
// ============================================================================

/**
 * Converts a string or Uint8Array schema definition to Uint8Array.
 */
export function toSchemaDefinitionBytes(
  definition: string | Uint8Array
): Uint8Array {
  if (typeof definition === "string") {
    return new TextEncoder().encode(definition);
  }
  return definition;
}

/**
 * Creates a GrpcSchemaDetails from the input parameters.
 */
export function createGrpcSchemaDetails(
  details: SchemaDetails
): GrpcSchemaDetails {
  const grpcDetails = new GrpcSchemaDetails();
  grpcDetails.setDataFormat(mapSchemaDataFormatToGrpc(details.dataFormat));
  grpcDetails.setCompatibility(
    mapCompatibilityModeToGrpc(details.compatibility)
  );

  if (details.description !== undefined) {
    grpcDetails.setDescription(details.description);
  }

  if (details.tags) {
    const tagsMap = grpcDetails.getTagsMap();
    for (const [key, value] of Object.entries(details.tags)) {
      tagsMap.set(key, value);
    }
  }

  return grpcDetails;
}
