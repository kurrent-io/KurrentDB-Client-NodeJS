// package: kurrent.rpc
// file: kurrentdb/protocols/v2/rpc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as kurrentdb_protocols_v1_code_pb from "../../../kurrentdb/protocols/v1/code_pb";

export class ErrorMetadata extends jspb.Message { 
    getStatusCode(): kurrentdb_protocols_v1_code_pb.Code;
    setStatusCode(value: kurrentdb_protocols_v1_code_pb.Code): ErrorMetadata;
    getHasDetails(): boolean;
    setHasDetails(value: boolean): ErrorMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorMetadata): ErrorMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorMetadata;
    static deserializeBinaryFromReader(message: ErrorMetadata, reader: jspb.BinaryReader): ErrorMetadata;
}

export namespace ErrorMetadata {
    export type AsObject = {
        statusCode: kurrentdb_protocols_v1_code_pb.Code,
        hasDetails: boolean,
    }
}

export class RequestErrorInfo extends jspb.Message { 
    getCode(): string;
    setCode(value: string): RequestErrorInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestErrorInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RequestErrorInfo): RequestErrorInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestErrorInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestErrorInfo;
    static deserializeBinaryFromReader(message: RequestErrorInfo, reader: jspb.BinaryReader): RequestErrorInfo;
}

export namespace RequestErrorInfo {
    export type AsObject = {
        code: string,
    }
}

export const error: jspb.ExtensionFieldInfo<ErrorMetadata>;
