import type { BaseOptions } from "../types";

/**
 * Schema data format types supported by the schema registry.
 */
export type SchemaDataFormat = "json" | "protobuf" | "avro" | "bytes";

/**
 * Schema compatibility modes for version validation.
 */
export type CompatibilityMode =
  | "backward"
  | "forward"
  | "full"
  | "backward-all"
  | "forward-all"
  | "full-all"
  | "none";

/**
 * Schema details for creating or updating a schema.
 */
export interface SchemaDetails {
  /**
   * The data format of the schema.
   */
  dataFormat: SchemaDataFormat;
  /**
   * The compatibility mode for schema versions.
   */
  compatibility: CompatibilityMode;
  /**
   * Optional description of the schema.
   */
  description?: string;
  /**
   * Optional tags for the schema.
   */
  tags?: Record<string, string>;
}

/**
 * Represents a schema in the registry.
 */
export interface Schema {
  /**
   * The name of the schema.
   */
  schemaName: string;
  /**
   * The schema details.
   */
  details: SchemaDetails;
  /**
   * The latest version number of the schema.
   */
  latestSchemaVersion: number;
  /**
   * When the schema was created.
   */
  createdAt?: Date;
  /**
   * When the schema was last updated.
   */
  updatedAt?: Date;
}

/**
 * Represents a version of a schema.
 */
export interface SchemaVersion {
  /**
   * The unique identifier for this schema version.
   */
  schemaVersionId: string;
  /**
   * The version number.
   */
  versionNumber: number;
  /**
   * The schema definition bytes.
   */
  schemaDefinition: Uint8Array;
  /**
   * The data format of the schema.
   */
  dataFormat: SchemaDataFormat;
  /**
   * When the version was registered.
   */
  registeredAt?: Date;
}

/**
 * Represents a registered schema with its latest version information.
 */
export interface RegisteredSchema {
  /**
   * The name of the schema.
   */
  schemaName: string;
  /**
   * The unique identifier for the schema version.
   */
  schemaVersionId: string;
  /**
   * The version number.
   */
  versionNumber: number;
  /**
   * The schema definition bytes.
   */
  schemaDefinition?: Uint8Array;
  /**
   * The data format of the schema.
   */
  dataFormat: SchemaDataFormat;
  /**
   * The compatibility mode for schema versions.
   */
  compatibility: CompatibilityMode;
  /**
   * Tags associated with the schema.
   */
  tags: Record<string, string>;
  /**
   * When the version was registered.
   */
  registeredAt?: Date;
}

/**
 * Error details for a schema version operation.
 */
export interface SchemaVersionError {
  /**
   * The version number that had an error.
   */
  versionNumber: number;
  /**
   * The error details.
   */
  error?: {
    code: string;
    message: string;
  };
}

/**
 * Schema compatibility error information.
 */
export interface SchemaCompatibilityError {
  /**
   * The kind of compatibility error.
   */
  kind: SchemaCompatibilityErrorKind;
  /**
   * Detailed description of the error.
   */
  details: string;
  /**
   * The property path where the error occurred.
   */
  propertyPath?: string;
  /**
   * The original type before the change.
   */
  originalType?: string;
  /**
   * The new type after the change.
   */
  newType?: string;
}

/**
 * Types of schema compatibility errors.
 */
export type SchemaCompatibilityErrorKind =
  | "unspecified"
  | "missing-required-property"
  | "incompatible-type-change"
  | "optional-to-required"
  | "new-required-property"
  | "removed-property"
  | "array-type-incompatibility"
  | "data-format-mismatch";

// ============================================================================
// Request/Response Options
// ============================================================================

/**
 * Options for creating a schema.
 */
export interface CreateSchemaOptions extends BaseOptions {
  /**
   * Optional initial schema definition. If provided, the schema will be created
   * with version 1 containing this definition.
   */
  schemaDefinition?: string | Uint8Array;
}

/**
 * Result of creating a schema.
 */
export interface CreateSchemaResult {
  /**
   * The schema version ID (only present if schemaDefinition was provided).
   */
  schemaVersionId?: string;
  /**
   * The version number (only present if schemaDefinition was provided).
   */
  versionNumber?: number;
}

/**
 * Options for updating a schema.
 */
export interface UpdateSchemaOptions extends BaseOptions {
  /**
   * The data format of the schema (must match existing schema).
   */
  dataFormat: SchemaDataFormat;
  /**
   * The compatibility mode (must match existing schema).
   */
  compatibility: CompatibilityMode;
  /**
   * Updated description for the schema.
   */
  description?: string;
  /**
   * Updated tags for the schema.
   */
  tags?: Record<string, string>;
}

/**
 * Options for deleting a schema.
 */
export type DeleteSchemaOptions = BaseOptions;

/**
 * Options for getting a schema.
 */
export type GetSchemaOptions = BaseOptions;

/**
 * Options for listing schemas.
 */
export interface ListSchemasOptions extends BaseOptions {
  /**
   * Filter schemas by name prefix.
   */
  schemaNamePrefix?: string;
  /**
   * Filter schemas by tags.
   */
  schemaTags?: Record<string, string>;
}

/**
 * Options for looking up a schema name.
 */
export type LookupSchemaNameOptions = BaseOptions;

/**
 * Options for registering a schema version.
 */
export type RegisterSchemaVersionOptions = BaseOptions;

/**
 * Result of registering a schema version.
 */
export interface RegisterSchemaVersionResult {
  /**
   * The unique identifier for the registered schema version.
   */
  schemaVersionId: string;
  /**
   * The version number assigned to the registration.
   */
  versionNumber: number;
}

/**
 * Options for deleting schema versions.
 */
export type DeleteSchemaVersionsOptions = BaseOptions;

/**
 * Result of deleting schema versions.
 */
export interface DeleteSchemaVersionsResult {
  /**
   * Errors that occurred during deletion, if any.
   */
  errors: SchemaVersionError[];
}

/**
 * Options for getting a schema version.
 */
export interface GetSchemaVersionOptions extends BaseOptions {
  /**
   * The specific version number to retrieve. If not provided, returns the latest version.
   */
  versionNumber?: number;
}

/**
 * Options for getting a schema version by ID.
 */
export type GetSchemaVersionByIdOptions = BaseOptions;

/**
 * Options for listing schema versions.
 */
export interface ListSchemaVersionsOptions extends BaseOptions {
  /**
   * Whether to include the schema definition in the response.
   * @defaultValue false
   */
  includeDefinition?: boolean;
}

/**
 * Options for listing registered schemas.
 */
export interface ListRegisteredSchemasOptions extends BaseOptions {
  /**
   * Filter by a specific schema version ID.
   */
  schemaVersionId?: string;
  /**
   * Filter schemas by name prefix.
   */
  schemaNamePrefix?: string;
  /**
   * Filter schemas by tags.
   */
  schemaTags?: Record<string, string>;
  /**
   * Whether to include the schema definition in the response.
   * @defaultValue false
   */
  includeDefinition?: boolean;
}

/**
 * Options for checking schema compatibility.
 */
export interface CheckSchemaCompatibilityOptions extends BaseOptions {
  /**
   * The schema name to check compatibility against.
   * Either schemaName or schemaVersionId must be provided.
   */
  schemaName?: string;
  /**
   * The specific schema version ID to check compatibility against.
   * Either schemaName or schemaVersionId must be provided.
   */
  schemaVersionId?: string;
  /**
   * The data format of the schema definition being checked.
   */
  dataFormat: SchemaDataFormat;
}

/**
 * Result of checking schema compatibility.
 */
export type CheckSchemaCompatibilityResult =
  | {
      /**
       * Whether the schema is compatible.
       */
      isCompatible: true;
      /**
       * The schema version ID that was checked against.
       */
      schemaVersionId: string;
    }
  | {
      /**
       * Whether the schema is compatible.
       */
      isCompatible: false;
      /**
       * The compatibility errors found.
       */
      errors: SchemaCompatibilityError[];
    };
