// package: kurrentdb.protocol.registry.v2
// file: core.proto

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
