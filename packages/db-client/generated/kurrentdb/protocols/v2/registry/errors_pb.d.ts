// package: kurrentdb.protocol.v2.registry.errors
// file: kurrentdb/protocols/v2/registry/errors.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as kurrentdb_protocols_v2_rpc_pb from "../../../../kurrentdb/protocols/v2/rpc_pb";

export class SchemaNotFoundErrorDetails extends jspb.Message { 
    getSchema(): string;
    setSchema(value: string): SchemaNotFoundErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaNotFoundErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaNotFoundErrorDetails): SchemaNotFoundErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaNotFoundErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaNotFoundErrorDetails;
    static deserializeBinaryFromReader(message: SchemaNotFoundErrorDetails, reader: jspb.BinaryReader): SchemaNotFoundErrorDetails;
}

export namespace SchemaNotFoundErrorDetails {
    export type AsObject = {
        schema: string,
    }
}

export class SchemaAlreadyExistsErrorDetails extends jspb.Message { 
    getSchema(): string;
    setSchema(value: string): SchemaAlreadyExistsErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaAlreadyExistsErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaAlreadyExistsErrorDetails): SchemaAlreadyExistsErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaAlreadyExistsErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaAlreadyExistsErrorDetails;
    static deserializeBinaryFromReader(message: SchemaAlreadyExistsErrorDetails, reader: jspb.BinaryReader): SchemaAlreadyExistsErrorDetails;
}

export namespace SchemaAlreadyExistsErrorDetails {
    export type AsObject = {
        schema: string,
    }
}

export class SchemaDeletedErrorDetails extends jspb.Message { 
    getSchema(): string;
    setSchema(value: string): SchemaDeletedErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaDeletedErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaDeletedErrorDetails): SchemaDeletedErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaDeletedErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaDeletedErrorDetails;
    static deserializeBinaryFromReader(message: SchemaDeletedErrorDetails, reader: jspb.BinaryReader): SchemaDeletedErrorDetails;
}

export namespace SchemaDeletedErrorDetails {
    export type AsObject = {
        schema: string,
    }
}

export enum RegistryError {
    UNSPECIFIED = 0,
    SCHEMA_NOT_FOUND = 1,
    SCHEMA_ALREADY_EXISTS = 2,
    SCHEMA_DELETED = 3,
}
