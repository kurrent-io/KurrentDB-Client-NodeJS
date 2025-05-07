// package: kurrentdb.protocol.registry.v2
// file: registry/validation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as registry_shared_pb from "../registry/shared_pb";

export class SchemaCompatibilityError extends jspb.Message { 
    getKind(): SchemaCompatibilityErrorKind;
    setKind(value: SchemaCompatibilityErrorKind): SchemaCompatibilityError;
    getDetails(): string;
    setDetails(value: string): SchemaCompatibilityError;

    hasPropertyPath(): boolean;
    clearPropertyPath(): void;
    getPropertyPath(): string | undefined;
    setPropertyPath(value: string): SchemaCompatibilityError;

    hasOriginalType(): boolean;
    clearOriginalType(): void;
    getOriginalType(): string | undefined;
    setOriginalType(value: string): SchemaCompatibilityError;

    hasNewType(): boolean;
    clearNewType(): void;
    getNewType(): string | undefined;
    setNewType(value: string): SchemaCompatibilityError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaCompatibilityError.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaCompatibilityError): SchemaCompatibilityError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaCompatibilityError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaCompatibilityError;
    static deserializeBinaryFromReader(message: SchemaCompatibilityError, reader: jspb.BinaryReader): SchemaCompatibilityError;
}

export namespace SchemaCompatibilityError {
    export type AsObject = {
        kind: SchemaCompatibilityErrorKind,
        details: string,
        propertyPath?: string,
        originalType?: string,
        newType?: string,
    }
}

export class SchemaCompatibilityResult extends jspb.Message { 
    getIsCompatible(): boolean;
    setIsCompatible(value: boolean): SchemaCompatibilityResult;
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): SchemaCompatibilityResult;
    clearErrorsList(): void;
    getErrorsList(): Array<SchemaCompatibilityError>;
    setErrorsList(value: Array<SchemaCompatibilityError>): SchemaCompatibilityResult;
    addErrors(value?: SchemaCompatibilityError, index?: number): SchemaCompatibilityError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaCompatibilityResult.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaCompatibilityResult): SchemaCompatibilityResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaCompatibilityResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaCompatibilityResult;
    static deserializeBinaryFromReader(message: SchemaCompatibilityResult, reader: jspb.BinaryReader): SchemaCompatibilityResult;
}

export namespace SchemaCompatibilityResult {
    export type AsObject = {
        isCompatible: boolean,
        schemaVersionId: string,
        errorsList: Array<SchemaCompatibilityError.AsObject>,
    }
}

export class CheckSchemaCompatibilityRequest extends jspb.Message { 

    hasSchemaName(): boolean;
    clearSchemaName(): void;
    getSchemaName(): string;
    setSchemaName(value: string): CheckSchemaCompatibilityRequest;

    hasSchemaVersionId(): boolean;
    clearSchemaVersionId(): void;
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): CheckSchemaCompatibilityRequest;
    getDefinition(): Uint8Array | string;
    getDefinition_asU8(): Uint8Array;
    getDefinition_asB64(): string;
    setDefinition(value: Uint8Array | string): CheckSchemaCompatibilityRequest;
    getDataFormat(): registry_shared_pb.SchemaDataFormat;
    setDataFormat(value: registry_shared_pb.SchemaDataFormat): CheckSchemaCompatibilityRequest;

    getSchemaIdentifierCase(): CheckSchemaCompatibilityRequest.SchemaIdentifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckSchemaCompatibilityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckSchemaCompatibilityRequest): CheckSchemaCompatibilityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckSchemaCompatibilityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckSchemaCompatibilityRequest;
    static deserializeBinaryFromReader(message: CheckSchemaCompatibilityRequest, reader: jspb.BinaryReader): CheckSchemaCompatibilityRequest;
}

export namespace CheckSchemaCompatibilityRequest {
    export type AsObject = {
        schemaName: string,
        schemaVersionId: string,
        definition: Uint8Array | string,
        dataFormat: registry_shared_pb.SchemaDataFormat,
    }

    export enum SchemaIdentifierCase {
        SCHEMA_IDENTIFIER_NOT_SET = 0,
        SCHEMA_NAME = 1,
        SCHEMA_VERSION_ID = 2,
    }

}

export class CheckSchemaCompatibilityResponse extends jspb.Message { 

    hasValidationResult(): boolean;
    clearValidationResult(): void;
    getValidationResult(): SchemaCompatibilityResult | undefined;
    setValidationResult(value?: SchemaCompatibilityResult): CheckSchemaCompatibilityResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckSchemaCompatibilityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckSchemaCompatibilityResponse): CheckSchemaCompatibilityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckSchemaCompatibilityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckSchemaCompatibilityResponse;
    static deserializeBinaryFromReader(message: CheckSchemaCompatibilityResponse, reader: jspb.BinaryReader): CheckSchemaCompatibilityResponse;
}

export namespace CheckSchemaCompatibilityResponse {
    export type AsObject = {
        validationResult?: SchemaCompatibilityResult.AsObject,
    }
}

export class SchemaValidationInfo extends jspb.Message { 
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): SchemaValidationInfo;
    getSchemaDefinition(): Uint8Array | string;
    getSchemaDefinition_asU8(): Uint8Array;
    getSchemaDefinition_asB64(): string;
    setSchemaDefinition(value: Uint8Array | string): SchemaValidationInfo;
    getDataFormat(): registry_shared_pb.SchemaDataFormat;
    setDataFormat(value: registry_shared_pb.SchemaDataFormat): SchemaValidationInfo;
    getCompatibility(): registry_shared_pb.CompatibilityMode;
    setCompatibility(value: registry_shared_pb.CompatibilityMode): SchemaValidationInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaValidationInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaValidationInfo): SchemaValidationInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaValidationInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaValidationInfo;
    static deserializeBinaryFromReader(message: SchemaValidationInfo, reader: jspb.BinaryReader): SchemaValidationInfo;
}

export namespace SchemaValidationInfo {
    export type AsObject = {
        schemaVersionId: string,
        schemaDefinition: Uint8Array | string,
        dataFormat: registry_shared_pb.SchemaDataFormat,
        compatibility: registry_shared_pb.CompatibilityMode,
    }
}

export enum SchemaCompatibilityErrorKind {
    SCHEMA_COMPATIBILITY_ERROR_KIND_UNSPECIFIED = 0,
    SCHEMA_COMPATIBILITY_ERROR_KIND_MISSING_REQUIRED_PROPERTY = 1,
    SCHEMA_COMPATIBILITY_ERROR_KIND_INCOMPATIBLE_TYPE_CHANGE = 2,
    SCHEMA_COMPATIBILITY_ERROR_KIND_OPTIONAL_TO_REQUIRED = 3,
    SCHEMA_COMPATIBILITY_ERROR_KIND_NEW_REQUIRED_PROPERTY = 4,
    SCHEMA_COMPATIBILITY_ERROR_KIND_REMOVED_PROPERTY = 5,
    SCHEMA_COMPATIBILITY_ERROR_KIND_ARRAY_TYPE_INCOMPATIBILITY = 6,
}
