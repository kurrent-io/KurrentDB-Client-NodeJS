// package: kurrentdb.protocol.v2.streams
// file: kurrentdb/protocols/v2/streams/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AppendRequest extends jspb.Message { 
    getStream(): string;
    setStream(value: string): AppendRequest;
    clearRecordsList(): void;
    getRecordsList(): Array<AppendRecord>;
    setRecordsList(value: Array<AppendRecord>): AppendRequest;
    addRecords(value?: AppendRecord, index?: number): AppendRecord;

    hasExpectedRevision(): boolean;
    clearExpectedRevision(): void;
    getExpectedRevision(): string | undefined;
    setExpectedRevision(value: string): AppendRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AppendRequest): AppendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendRequest;
    static deserializeBinaryFromReader(message: AppendRequest, reader: jspb.BinaryReader): AppendRequest;
}

export namespace AppendRequest {
    export type AsObject = {
        stream: string,
        recordsList: Array<AppendRecord.AsObject>,
        expectedRevision?: string,
    }
}

export class AppendResponse extends jspb.Message { 
    getStream(): string;
    setStream(value: string): AppendResponse;
    getStreamRevision(): string;
    setStreamRevision(value: string): AppendResponse;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): string | undefined;
    setPosition(value: string): AppendResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AppendResponse): AppendResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendResponse;
    static deserializeBinaryFromReader(message: AppendResponse, reader: jspb.BinaryReader): AppendResponse;
}

export namespace AppendResponse {
    export type AsObject = {
        stream: string,
        streamRevision: string,
        position?: string,
    }
}

export class AppendSessionResponse extends jspb.Message { 
    clearOutputList(): void;
    getOutputList(): Array<AppendResponse>;
    setOutputList(value: Array<AppendResponse>): AppendSessionResponse;
    addOutput(value?: AppendResponse, index?: number): AppendResponse;
    getPosition(): string;
    setPosition(value: string): AppendSessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AppendSessionResponse): AppendSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendSessionResponse;
    static deserializeBinaryFromReader(message: AppendSessionResponse, reader: jspb.BinaryReader): AppendSessionResponse;
}

export namespace AppendSessionResponse {
    export type AsObject = {
        outputList: Array<AppendResponse.AsObject>,
        position: string,
    }
}

export class SchemaInfo extends jspb.Message { 
    getFormat(): SchemaFormat;
    setFormat(value: SchemaFormat): SchemaInfo;
    getName(): string;
    setName(value: string): SchemaInfo;

    hasId(): boolean;
    clearId(): void;
    getId(): string | undefined;
    setId(value: string): SchemaInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaInfo): SchemaInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaInfo;
    static deserializeBinaryFromReader(message: SchemaInfo, reader: jspb.BinaryReader): SchemaInfo;
}

export namespace SchemaInfo {
    export type AsObject = {
        format: SchemaFormat,
        name: string,
        id?: string,
    }
}

export class AppendRecord extends jspb.Message { 

    hasRecordId(): boolean;
    clearRecordId(): void;
    getRecordId(): string | undefined;
    setRecordId(value: string): AppendRecord;

    getPropertiesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearPropertiesMap(): void;

    hasSchema(): boolean;
    clearSchema(): void;
    getSchema(): SchemaInfo | undefined;
    setSchema(value?: SchemaInfo): AppendRecord;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): AppendRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendRecord.AsObject;
    static toObject(includeInstance: boolean, msg: AppendRecord): AppendRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendRecord;
    static deserializeBinaryFromReader(message: AppendRecord, reader: jspb.BinaryReader): AppendRecord;
}

export namespace AppendRecord {
    export type AsObject = {
        recordId?: string,

        propertiesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        schema?: SchemaInfo.AsObject,
        data: Uint8Array | string,
    }
}

export enum SchemaFormat {
    SCHEMA_FORMAT_UNSPECIFIED = 0,
    SCHEMA_FORMAT_JSON = 1,
    SCHEMA_FORMAT_PROTOBUF = 2,
    SCHEMA_FORMAT_AVRO = 3,
    SCHEMA_FORMAT_BYTES = 4,
}

export enum ExpectedRevisionConstants {
    EXPECTED_REVISION_CONSTANTS_SINGLE_EVENT = 0,
    EXPECTED_REVISION_CONSTANTS_NO_STREAM = -1,
    EXPECTED_REVISION_CONSTANTS_ANY = -2,
    EXPECTED_REVISION_CONSTANTS_EXISTS = -4,
}
