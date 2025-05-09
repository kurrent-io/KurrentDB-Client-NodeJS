// package: kurrentdb.protocol.registry.v2
// file: registry/schemas.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as registry_shared_pb from "../registry/shared_pb";
import * as core_pb from "../core_pb";

export class SchemaDetails extends jspb.Message { 
    getDataFormat(): registry_shared_pb.SchemaDataFormat;
    setDataFormat(value: registry_shared_pb.SchemaDataFormat): SchemaDetails;
    getCompatibility(): registry_shared_pb.CompatibilityMode;
    setCompatibility(value: registry_shared_pb.CompatibilityMode): SchemaDetails;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): SchemaDetails;

    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaDetails.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaDetails): SchemaDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaDetails;
    static deserializeBinaryFromReader(message: SchemaDetails, reader: jspb.BinaryReader): SchemaDetails;
}

export namespace SchemaDetails {
    export type AsObject = {
        dataFormat: registry_shared_pb.SchemaDataFormat,
        compatibility: registry_shared_pb.CompatibilityMode,
        description?: string,

        tagsMap: Array<[string, string]>,
    }
}

export class CreateSchemaRequest extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): CreateSchemaRequest;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): SchemaDetails | undefined;
    setDetails(value?: SchemaDetails): CreateSchemaRequest;

    hasSchemaDefinition(): boolean;
    clearSchemaDefinition(): void;
    getSchemaDefinition(): Uint8Array | string;
    getSchemaDefinition_asU8(): Uint8Array;
    getSchemaDefinition_asB64(): string;
    setSchemaDefinition(value: Uint8Array | string): CreateSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSchemaRequest): CreateSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSchemaRequest;
    static deserializeBinaryFromReader(message: CreateSchemaRequest, reader: jspb.BinaryReader): CreateSchemaRequest;
}

export namespace CreateSchemaRequest {
    export type AsObject = {
        schemaName: string,
        details?: SchemaDetails.AsObject,
        schemaDefinition: Uint8Array | string,
    }
}

export class CreateSchemaResponse extends jspb.Message { 
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): CreateSchemaResponse;
    getVersionNumber(): number;
    setVersionNumber(value: number): CreateSchemaResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSchemaResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSchemaResponse): CreateSchemaResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSchemaResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSchemaResponse;
    static deserializeBinaryFromReader(message: CreateSchemaResponse, reader: jspb.BinaryReader): CreateSchemaResponse;
}

export namespace CreateSchemaResponse {
    export type AsObject = {
        schemaVersionId: string,
        versionNumber: number,
    }
}

export class UpdateSchemaRequest extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): UpdateSchemaRequest;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): SchemaDetails | undefined;
    setDetails(value?: SchemaDetails): UpdateSchemaRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSchemaRequest): UpdateSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSchemaRequest;
    static deserializeBinaryFromReader(message: UpdateSchemaRequest, reader: jspb.BinaryReader): UpdateSchemaRequest;
}

export namespace UpdateSchemaRequest {
    export type AsObject = {
        schemaName: string,
        details?: SchemaDetails.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateSchemaResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSchemaResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSchemaResponse): UpdateSchemaResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSchemaResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSchemaResponse;
    static deserializeBinaryFromReader(message: UpdateSchemaResponse, reader: jspb.BinaryReader): UpdateSchemaResponse;
}

export namespace UpdateSchemaResponse {
    export type AsObject = {
    }
}

export class DeleteSchemaRequest extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): DeleteSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSchemaRequest): DeleteSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSchemaRequest;
    static deserializeBinaryFromReader(message: DeleteSchemaRequest, reader: jspb.BinaryReader): DeleteSchemaRequest;
}

export namespace DeleteSchemaRequest {
    export type AsObject = {
        schemaName: string,
    }
}

export class DeleteSchemaResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSchemaResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSchemaResponse): DeleteSchemaResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSchemaResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSchemaResponse;
    static deserializeBinaryFromReader(message: DeleteSchemaResponse, reader: jspb.BinaryReader): DeleteSchemaResponse;
}

export namespace DeleteSchemaResponse {
    export type AsObject = {
    }
}

export class Schema extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): Schema;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): SchemaDetails | undefined;
    setDetails(value?: SchemaDetails): Schema;
    getLatestSchemaVersion(): number;
    setLatestSchemaVersion(value: number): Schema;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Schema;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Schema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schema.AsObject;
    static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schema;
    static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
    export type AsObject = {
        schemaName: string,
        details?: SchemaDetails.AsObject,
        latestSchemaVersion: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetSchemaRequest extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): GetSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaRequest): GetSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaRequest;
    static deserializeBinaryFromReader(message: GetSchemaRequest, reader: jspb.BinaryReader): GetSchemaRequest;
}

export namespace GetSchemaRequest {
    export type AsObject = {
        schemaName: string,
    }
}

export class GetSchemaResponse extends jspb.Message { 

    hasSchema(): boolean;
    clearSchema(): void;
    getSchema(): Schema | undefined;
    setSchema(value?: Schema): GetSchemaResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaResponse): GetSchemaResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaResponse;
    static deserializeBinaryFromReader(message: GetSchemaResponse, reader: jspb.BinaryReader): GetSchemaResponse;
}

export namespace GetSchemaResponse {
    export type AsObject = {
        schema?: Schema.AsObject,
    }
}

export class ListSchemasRequest extends jspb.Message { 

    hasSchemaNamePrefix(): boolean;
    clearSchemaNamePrefix(): void;
    getSchemaNamePrefix(): string | undefined;
    setSchemaNamePrefix(value: string): ListSchemasRequest;

    getSchemaTagsMap(): jspb.Map<string, string>;
    clearSchemaTagsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSchemasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSchemasRequest): ListSchemasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSchemasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSchemasRequest;
    static deserializeBinaryFromReader(message: ListSchemasRequest, reader: jspb.BinaryReader): ListSchemasRequest;
}

export namespace ListSchemasRequest {
    export type AsObject = {
        schemaNamePrefix?: string,

        schemaTagsMap: Array<[string, string]>,
    }
}

export class ListSchemasResponse extends jspb.Message { 
    clearSchemasList(): void;
    getSchemasList(): Array<Schema>;
    setSchemasList(value: Array<Schema>): ListSchemasResponse;
    addSchemas(value?: Schema, index?: number): Schema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSchemasResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSchemasResponse): ListSchemasResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSchemasResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSchemasResponse;
    static deserializeBinaryFromReader(message: ListSchemasResponse, reader: jspb.BinaryReader): ListSchemasResponse;
}

export namespace ListSchemasResponse {
    export type AsObject = {
        schemasList: Array<Schema.AsObject>,
    }
}

export class LookupSchemaNameRequest extends jspb.Message { 
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): LookupSchemaNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LookupSchemaNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LookupSchemaNameRequest): LookupSchemaNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LookupSchemaNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LookupSchemaNameRequest;
    static deserializeBinaryFromReader(message: LookupSchemaNameRequest, reader: jspb.BinaryReader): LookupSchemaNameRequest;
}

export namespace LookupSchemaNameRequest {
    export type AsObject = {
        schemaVersionId: string,
    }
}

export class LookupSchemaNameResponse extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): LookupSchemaNameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LookupSchemaNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LookupSchemaNameResponse): LookupSchemaNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LookupSchemaNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LookupSchemaNameResponse;
    static deserializeBinaryFromReader(message: LookupSchemaNameResponse, reader: jspb.BinaryReader): LookupSchemaNameResponse;
}

export namespace LookupSchemaNameResponse {
    export type AsObject = {
        schemaName: string,
    }
}

export class RegisterSchemaVersionRequest extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): RegisterSchemaVersionRequest;
    getSchemaDefinition(): Uint8Array | string;
    getSchemaDefinition_asU8(): Uint8Array;
    getSchemaDefinition_asB64(): string;
    setSchemaDefinition(value: Uint8Array | string): RegisterSchemaVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterSchemaVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterSchemaVersionRequest): RegisterSchemaVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterSchemaVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterSchemaVersionRequest;
    static deserializeBinaryFromReader(message: RegisterSchemaVersionRequest, reader: jspb.BinaryReader): RegisterSchemaVersionRequest;
}

export namespace RegisterSchemaVersionRequest {
    export type AsObject = {
        schemaName: string,
        schemaDefinition: Uint8Array | string,
    }
}

export class RegisterSchemaVersionResponse extends jspb.Message { 
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): RegisterSchemaVersionResponse;
    getVersionNumber(): number;
    setVersionNumber(value: number): RegisterSchemaVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterSchemaVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterSchemaVersionResponse): RegisterSchemaVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterSchemaVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterSchemaVersionResponse;
    static deserializeBinaryFromReader(message: RegisterSchemaVersionResponse, reader: jspb.BinaryReader): RegisterSchemaVersionResponse;
}

export namespace RegisterSchemaVersionResponse {
    export type AsObject = {
        schemaVersionId: string,
        versionNumber: number,
    }
}

export class DeleteSchemaVersionsRequest extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): DeleteSchemaVersionsRequest;
    clearVersionsList(): void;
    getVersionsList(): Array<number>;
    setVersionsList(value: Array<number>): DeleteSchemaVersionsRequest;
    addVersions(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSchemaVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSchemaVersionsRequest): DeleteSchemaVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSchemaVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSchemaVersionsRequest;
    static deserializeBinaryFromReader(message: DeleteSchemaVersionsRequest, reader: jspb.BinaryReader): DeleteSchemaVersionsRequest;
}

export namespace DeleteSchemaVersionsRequest {
    export type AsObject = {
        schemaName: string,
        versionsList: Array<number>,
    }
}

export class DeleteSchemaVersionsResponse extends jspb.Message { 
    clearErrorsList(): void;
    getErrorsList(): Array<DeleteSchemaVersionsResponse.SchemaVersionError>;
    setErrorsList(value: Array<DeleteSchemaVersionsResponse.SchemaVersionError>): DeleteSchemaVersionsResponse;
    addErrors(value?: DeleteSchemaVersionsResponse.SchemaVersionError, index?: number): DeleteSchemaVersionsResponse.SchemaVersionError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSchemaVersionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSchemaVersionsResponse): DeleteSchemaVersionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSchemaVersionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSchemaVersionsResponse;
    static deserializeBinaryFromReader(message: DeleteSchemaVersionsResponse, reader: jspb.BinaryReader): DeleteSchemaVersionsResponse;
}

export namespace DeleteSchemaVersionsResponse {
    export type AsObject = {
        errorsList: Array<DeleteSchemaVersionsResponse.SchemaVersionError.AsObject>,
    }


    export class SchemaVersionError extends jspb.Message { 
        getVersionNumber(): number;
        setVersionNumber(value: number): SchemaVersionError;

        hasError(): boolean;
        clearError(): void;
        getError(): core_pb.ErrorDetails | undefined;
        setError(value?: core_pb.ErrorDetails): SchemaVersionError;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SchemaVersionError.AsObject;
        static toObject(includeInstance: boolean, msg: SchemaVersionError): SchemaVersionError.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SchemaVersionError, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SchemaVersionError;
        static deserializeBinaryFromReader(message: SchemaVersionError, reader: jspb.BinaryReader): SchemaVersionError;
    }

    export namespace SchemaVersionError {
        export type AsObject = {
            versionNumber: number,
            error?: core_pb.ErrorDetails.AsObject,
        }
    }

}

export class SchemaVersion extends jspb.Message { 
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): SchemaVersion;
    getVersionNumber(): number;
    setVersionNumber(value: number): SchemaVersion;
    getSchemaDefinition(): Uint8Array | string;
    getSchemaDefinition_asU8(): Uint8Array;
    getSchemaDefinition_asB64(): string;
    setSchemaDefinition(value: Uint8Array | string): SchemaVersion;
    getDataFormat(): registry_shared_pb.SchemaDataFormat;
    setDataFormat(value: registry_shared_pb.SchemaDataFormat): SchemaVersion;

    hasRegisteredAt(): boolean;
    clearRegisteredAt(): void;
    getRegisteredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRegisteredAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaVersion.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaVersion): SchemaVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaVersion;
    static deserializeBinaryFromReader(message: SchemaVersion, reader: jspb.BinaryReader): SchemaVersion;
}

export namespace SchemaVersion {
    export type AsObject = {
        schemaVersionId: string,
        versionNumber: number,
        schemaDefinition: Uint8Array | string,
        dataFormat: registry_shared_pb.SchemaDataFormat,
        registeredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetSchemaVersionByIdRequest extends jspb.Message { 
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): GetSchemaVersionByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaVersionByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaVersionByIdRequest): GetSchemaVersionByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaVersionByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaVersionByIdRequest;
    static deserializeBinaryFromReader(message: GetSchemaVersionByIdRequest, reader: jspb.BinaryReader): GetSchemaVersionByIdRequest;
}

export namespace GetSchemaVersionByIdRequest {
    export type AsObject = {
        schemaVersionId: string,
    }
}

export class GetSchemaVersionByIdResponse extends jspb.Message { 

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): SchemaVersion | undefined;
    setVersion(value?: SchemaVersion): GetSchemaVersionByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaVersionByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaVersionByIdResponse): GetSchemaVersionByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaVersionByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaVersionByIdResponse;
    static deserializeBinaryFromReader(message: GetSchemaVersionByIdResponse, reader: jspb.BinaryReader): GetSchemaVersionByIdResponse;
}

export namespace GetSchemaVersionByIdResponse {
    export type AsObject = {
        version?: SchemaVersion.AsObject,
    }
}

export class GetSchemaVersionRequest extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): GetSchemaVersionRequest;

    hasVersionNumber(): boolean;
    clearVersionNumber(): void;
    getVersionNumber(): number | undefined;
    setVersionNumber(value: number): GetSchemaVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaVersionRequest): GetSchemaVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaVersionRequest;
    static deserializeBinaryFromReader(message: GetSchemaVersionRequest, reader: jspb.BinaryReader): GetSchemaVersionRequest;
}

export namespace GetSchemaVersionRequest {
    export type AsObject = {
        schemaName: string,
        versionNumber?: number,
    }
}

export class GetSchemaVersionResponse extends jspb.Message { 

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): SchemaVersion | undefined;
    setVersion(value?: SchemaVersion): GetSchemaVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaVersionResponse): GetSchemaVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaVersionResponse;
    static deserializeBinaryFromReader(message: GetSchemaVersionResponse, reader: jspb.BinaryReader): GetSchemaVersionResponse;
}

export namespace GetSchemaVersionResponse {
    export type AsObject = {
        version?: SchemaVersion.AsObject,
    }
}

export class ListSchemaVersionsRequest extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): ListSchemaVersionsRequest;
    getIncludeDefinition(): boolean;
    setIncludeDefinition(value: boolean): ListSchemaVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSchemaVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSchemaVersionsRequest): ListSchemaVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSchemaVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSchemaVersionsRequest;
    static deserializeBinaryFromReader(message: ListSchemaVersionsRequest, reader: jspb.BinaryReader): ListSchemaVersionsRequest;
}

export namespace ListSchemaVersionsRequest {
    export type AsObject = {
        schemaName: string,
        includeDefinition: boolean,
    }
}

export class ListSchemaVersionsResponse extends jspb.Message { 
    clearVersionsList(): void;
    getVersionsList(): Array<SchemaVersion>;
    setVersionsList(value: Array<SchemaVersion>): ListSchemaVersionsResponse;
    addVersions(value?: SchemaVersion, index?: number): SchemaVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSchemaVersionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSchemaVersionsResponse): ListSchemaVersionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSchemaVersionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSchemaVersionsResponse;
    static deserializeBinaryFromReader(message: ListSchemaVersionsResponse, reader: jspb.BinaryReader): ListSchemaVersionsResponse;
}

export namespace ListSchemaVersionsResponse {
    export type AsObject = {
        versionsList: Array<SchemaVersion.AsObject>,
    }
}

export class RegisteredSchema extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): RegisteredSchema;
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): RegisteredSchema;
    getVersionNumber(): number;
    setVersionNumber(value: number): RegisteredSchema;
    getSchemaDefinition(): Uint8Array | string;
    getSchemaDefinition_asU8(): Uint8Array;
    getSchemaDefinition_asB64(): string;
    setSchemaDefinition(value: Uint8Array | string): RegisteredSchema;
    getDataFormat(): registry_shared_pb.SchemaDataFormat;
    setDataFormat(value: registry_shared_pb.SchemaDataFormat): RegisteredSchema;
    getCompatibility(): registry_shared_pb.CompatibilityMode;
    setCompatibility(value: registry_shared_pb.CompatibilityMode): RegisteredSchema;

    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;

    hasRegisteredAt(): boolean;
    clearRegisteredAt(): void;
    getRegisteredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRegisteredAt(value?: google_protobuf_timestamp_pb.Timestamp): RegisteredSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisteredSchema.AsObject;
    static toObject(includeInstance: boolean, msg: RegisteredSchema): RegisteredSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisteredSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisteredSchema;
    static deserializeBinaryFromReader(message: RegisteredSchema, reader: jspb.BinaryReader): RegisteredSchema;
}

export namespace RegisteredSchema {
    export type AsObject = {
        schemaName: string,
        schemaVersionId: string,
        versionNumber: number,
        schemaDefinition: Uint8Array | string,
        dataFormat: registry_shared_pb.SchemaDataFormat,
        compatibility: registry_shared_pb.CompatibilityMode,

        tagsMap: Array<[string, string]>,
        registeredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListRegisteredSchemasRequest extends jspb.Message { 

    hasSchemaVersionId(): boolean;
    clearSchemaVersionId(): void;
    getSchemaVersionId(): string | undefined;
    setSchemaVersionId(value: string): ListRegisteredSchemasRequest;

    hasSchemaNamePrefix(): boolean;
    clearSchemaNamePrefix(): void;
    getSchemaNamePrefix(): string | undefined;
    setSchemaNamePrefix(value: string): ListRegisteredSchemasRequest;

    getSchemaTagsMap(): jspb.Map<string, string>;
    clearSchemaTagsMap(): void;
    getIncludeDefinition(): boolean;
    setIncludeDefinition(value: boolean): ListRegisteredSchemasRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegisteredSchemasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegisteredSchemasRequest): ListRegisteredSchemasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegisteredSchemasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegisteredSchemasRequest;
    static deserializeBinaryFromReader(message: ListRegisteredSchemasRequest, reader: jspb.BinaryReader): ListRegisteredSchemasRequest;
}

export namespace ListRegisteredSchemasRequest {
    export type AsObject = {
        schemaVersionId?: string,
        schemaNamePrefix?: string,

        schemaTagsMap: Array<[string, string]>,
        includeDefinition: boolean,
    }
}

export class ListRegisteredSchemasResponse extends jspb.Message { 
    clearSchemasList(): void;
    getSchemasList(): Array<RegisteredSchema>;
    setSchemasList(value: Array<RegisteredSchema>): ListRegisteredSchemasResponse;
    addSchemas(value?: RegisteredSchema, index?: number): RegisteredSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegisteredSchemasResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegisteredSchemasResponse): ListRegisteredSchemasResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegisteredSchemasResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegisteredSchemasResponse;
    static deserializeBinaryFromReader(message: ListRegisteredSchemasResponse, reader: jspb.BinaryReader): ListRegisteredSchemasResponse;
}

export namespace ListRegisteredSchemasResponse {
    export type AsObject = {
        schemasList: Array<RegisteredSchema.AsObject>,
    }
}

export class BulkRegisterSchemasRequest extends jspb.Message { 
    clearRequestsList(): void;
    getRequestsList(): Array<CreateSchemaRequest>;
    setRequestsList(value: Array<CreateSchemaRequest>): BulkRegisterSchemasRequest;
    addRequests(value?: CreateSchemaRequest, index?: number): CreateSchemaRequest;
    getKeepOrder(): boolean;
    setKeepOrder(value: boolean): BulkRegisterSchemasRequest;
    getStopOnError(): boolean;
    setStopOnError(value: boolean): BulkRegisterSchemasRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkRegisterSchemasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BulkRegisterSchemasRequest): BulkRegisterSchemasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkRegisterSchemasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkRegisterSchemasRequest;
    static deserializeBinaryFromReader(message: BulkRegisterSchemasRequest, reader: jspb.BinaryReader): BulkRegisterSchemasRequest;
}

export namespace BulkRegisterSchemasRequest {
    export type AsObject = {
        requestsList: Array<CreateSchemaRequest.AsObject>,
        keepOrder: boolean,
        stopOnError: boolean,
    }
}

export class BulkRegisterSchemasResponse extends jspb.Message { 

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): BulkRegisterSchemasResponse;
    clearResponsesList(): void;
    getResponsesList(): Array<CreateSchemaResponse>;
    setResponsesList(value: Array<CreateSchemaResponse>): BulkRegisterSchemasResponse;
    addResponses(value?: CreateSchemaResponse, index?: number): CreateSchemaResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkRegisterSchemasResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BulkRegisterSchemasResponse): BulkRegisterSchemasResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkRegisterSchemasResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkRegisterSchemasResponse;
    static deserializeBinaryFromReader(message: BulkRegisterSchemasResponse, reader: jspb.BinaryReader): BulkRegisterSchemasResponse;
}

export namespace BulkRegisterSchemasResponse {
    export type AsObject = {
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        responsesList: Array<CreateSchemaResponse.AsObject>,
    }
}
