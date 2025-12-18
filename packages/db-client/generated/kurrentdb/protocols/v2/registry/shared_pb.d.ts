// package: kurrentdb.protocol.registry.v2
// file: kurrentdb/protocols/v2/registry/shared.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ErrorDetails extends jspb.Message { 
    getCode(): string;
    setCode(value: string): ErrorDetails;
    getMessage(): string;
    setMessage(value: string): ErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorDetails): ErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorDetails;
    static deserializeBinaryFromReader(message: ErrorDetails, reader: jspb.BinaryReader): ErrorDetails;
}

export namespace ErrorDetails {
    export type AsObject = {
        code: string,
        message: string,
    }
}

export enum SchemaDataFormat {
    SCHEMA_DATA_FORMAT_UNSPECIFIED = 0,
    SCHEMA_DATA_FORMAT_JSON = 1,
    SCHEMA_DATA_FORMAT_PROTOBUF = 2,
    SCHEMA_DATA_FORMAT_AVRO = 3,
    SCHEMA_DATA_FORMAT_BYTES = 4,
}

export enum CompatibilityMode {
    COMPATIBILITY_MODE_UNSPECIFIED = 0,
    COMPATIBILITY_MODE_BACKWARD = 1,
    COMPATIBILITY_MODE_FORWARD = 2,
    COMPATIBILITY_MODE_FULL = 3,
    COMPATIBILITY_MODE_BACKWARD_ALL = 4,
    COMPATIBILITY_MODE_FORWARD_ALL = 5,
    COMPATIBILITY_MODE_FULL_ALL = 6,
    COMPATIBILITY_MODE_NONE = 7,
}
