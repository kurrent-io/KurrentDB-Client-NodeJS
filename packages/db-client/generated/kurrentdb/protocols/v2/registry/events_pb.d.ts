// package: kurrentdb.protocol.registry.v2
// file: kurrentdb/protocols/v2/registry/events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as kurrentdb_protocols_v2_registry_shared_pb from "../../../../kurrentdb/protocols/v2/registry/shared_pb";

export class SchemaCreated extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): SchemaCreated;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): SchemaCreated;
    getDataFormat(): kurrentdb_protocols_v2_registry_shared_pb.SchemaDataFormat;
    setDataFormat(value: kurrentdb_protocols_v2_registry_shared_pb.SchemaDataFormat): SchemaCreated;
    getCompatibility(): kurrentdb_protocols_v2_registry_shared_pb.CompatibilityMode;
    setCompatibility(value: kurrentdb_protocols_v2_registry_shared_pb.CompatibilityMode): SchemaCreated;

    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): SchemaCreated;
    getSchemaDefinition(): Uint8Array | string;
    getSchemaDefinition_asU8(): Uint8Array;
    getSchemaDefinition_asB64(): string;
    setSchemaDefinition(value: Uint8Array | string): SchemaCreated;
    getVersionNumber(): number;
    setVersionNumber(value: number): SchemaCreated;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaCreated.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaCreated): SchemaCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaCreated;
    static deserializeBinaryFromReader(message: SchemaCreated, reader: jspb.BinaryReader): SchemaCreated;
}

export namespace SchemaCreated {
    export type AsObject = {
        schemaName: string,
        description?: string,
        dataFormat: kurrentdb_protocols_v2_registry_shared_pb.SchemaDataFormat,
        compatibility: kurrentdb_protocols_v2_registry_shared_pb.CompatibilityMode,

        tagsMap: Array<[string, string]>,
        schemaVersionId: string,
        schemaDefinition: Uint8Array | string,
        versionNumber: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SchemaVersionRegistered extends jspb.Message { 
    getSchemaVersionId(): string;
    setSchemaVersionId(value: string): SchemaVersionRegistered;
    getSchemaDefinition(): Uint8Array | string;
    getSchemaDefinition_asU8(): Uint8Array;
    getSchemaDefinition_asB64(): string;
    setSchemaDefinition(value: Uint8Array | string): SchemaVersionRegistered;
    getVersionNumber(): number;
    setVersionNumber(value: number): SchemaVersionRegistered;
    getSchemaName(): string;
    setSchemaName(value: string): SchemaVersionRegistered;
    getDataFormat(): kurrentdb_protocols_v2_registry_shared_pb.SchemaDataFormat;
    setDataFormat(value: kurrentdb_protocols_v2_registry_shared_pb.SchemaDataFormat): SchemaVersionRegistered;

    hasRegisteredAt(): boolean;
    clearRegisteredAt(): void;
    getRegisteredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRegisteredAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaVersionRegistered;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaVersionRegistered.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaVersionRegistered): SchemaVersionRegistered.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaVersionRegistered, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaVersionRegistered;
    static deserializeBinaryFromReader(message: SchemaVersionRegistered, reader: jspb.BinaryReader): SchemaVersionRegistered;
}

export namespace SchemaVersionRegistered {
    export type AsObject = {
        schemaVersionId: string,
        schemaDefinition: Uint8Array | string,
        versionNumber: number,
        schemaName: string,
        dataFormat: kurrentdb_protocols_v2_registry_shared_pb.SchemaDataFormat,
        registeredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SchemaVersionsDeleted extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): SchemaVersionsDeleted;
    clearVersionsList(): void;
    getVersionsList(): Array<string>;
    setVersionsList(value: Array<string>): SchemaVersionsDeleted;
    addVersions(value: string, index?: number): string;
    getLatestSchemaVersionId(): string;
    setLatestSchemaVersionId(value: string): SchemaVersionsDeleted;
    getLatestSchemaVersionNumber(): number;
    setLatestSchemaVersionNumber(value: number): SchemaVersionsDeleted;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaVersionsDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaVersionsDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaVersionsDeleted): SchemaVersionsDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaVersionsDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaVersionsDeleted;
    static deserializeBinaryFromReader(message: SchemaVersionsDeleted, reader: jspb.BinaryReader): SchemaVersionsDeleted;
}

export namespace SchemaVersionsDeleted {
    export type AsObject = {
        schemaName: string,
        versionsList: Array<string>,
        latestSchemaVersionId: string,
        latestSchemaVersionNumber: number,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SchemaDeleted extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): SchemaDeleted;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaDeleted): SchemaDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaDeleted;
    static deserializeBinaryFromReader(message: SchemaDeleted, reader: jspb.BinaryReader): SchemaDeleted;
}

export namespace SchemaDeleted {
    export type AsObject = {
        schemaName: string,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SchemaCompatibilityModeChanged extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): SchemaCompatibilityModeChanged;
    getCompatibility(): kurrentdb_protocols_v2_registry_shared_pb.CompatibilityMode;
    setCompatibility(value: kurrentdb_protocols_v2_registry_shared_pb.CompatibilityMode): SchemaCompatibilityModeChanged;

    hasChangedAt(): boolean;
    clearChangedAt(): void;
    getChangedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaCompatibilityModeChanged;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaCompatibilityModeChanged.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaCompatibilityModeChanged): SchemaCompatibilityModeChanged.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaCompatibilityModeChanged, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaCompatibilityModeChanged;
    static deserializeBinaryFromReader(message: SchemaCompatibilityModeChanged, reader: jspb.BinaryReader): SchemaCompatibilityModeChanged;
}

export namespace SchemaCompatibilityModeChanged {
    export type AsObject = {
        schemaName: string,
        compatibility: kurrentdb_protocols_v2_registry_shared_pb.CompatibilityMode,
        changedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SchemaTagsUpdated extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): SchemaTagsUpdated;

    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaTagsUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaTagsUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaTagsUpdated): SchemaTagsUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaTagsUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaTagsUpdated;
    static deserializeBinaryFromReader(message: SchemaTagsUpdated, reader: jspb.BinaryReader): SchemaTagsUpdated;
}

export namespace SchemaTagsUpdated {
    export type AsObject = {
        schemaName: string,

        tagsMap: Array<[string, string]>,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SchemaDescriptionUpdated extends jspb.Message { 
    getSchemaName(): string;
    setSchemaName(value: string): SchemaDescriptionUpdated;
    getDescription(): string;
    setDescription(value: string): SchemaDescriptionUpdated;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaDescriptionUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaDescriptionUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaDescriptionUpdated): SchemaDescriptionUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaDescriptionUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaDescriptionUpdated;
    static deserializeBinaryFromReader(message: SchemaDescriptionUpdated, reader: jspb.BinaryReader): SchemaDescriptionUpdated;
}

export namespace SchemaDescriptionUpdated {
    export type AsObject = {
        schemaName: string,
        description: string,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
