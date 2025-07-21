// package: kurrentdb.protocol.v2
// file: kurrentdb/protocols/v2/streams/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as kurrentdb_protocols_v2_streams_shared_pb from "../../../../kurrentdb/protocols/v2/streams/shared_pb";
import * as kurrentdb_protocols_v2_core_pb from "../../../../kurrentdb/protocols/v2/core_pb";

export class AppendRecord extends jspb.Message { 

    hasRecordId(): boolean;
    clearRecordId(): void;
    getRecordId(): string | undefined;
    setRecordId(value: string): AppendRecord;

    getPropertiesMap(): jspb.Map<string, kurrentdb_protocols_v2_core_pb.DynamicValue>;
    clearPropertiesMap(): void;
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

        propertiesMap: Array<[string, kurrentdb_protocols_v2_core_pb.DynamicValue.AsObject]>,
        data: Uint8Array | string,
    }
}

export class AppendStreamRequest extends jspb.Message { 
    getStream(): string;
    setStream(value: string): AppendStreamRequest;
    clearRecordsList(): void;
    getRecordsList(): Array<AppendRecord>;
    setRecordsList(value: Array<AppendRecord>): AppendStreamRequest;
    addRecords(value?: AppendRecord, index?: number): AppendRecord;

    hasExpectedRevision(): boolean;
    clearExpectedRevision(): void;
    getExpectedRevision(): string | undefined;
    setExpectedRevision(value: string): AppendStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AppendStreamRequest): AppendStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendStreamRequest;
    static deserializeBinaryFromReader(message: AppendStreamRequest, reader: jspb.BinaryReader): AppendStreamRequest;
}

export namespace AppendStreamRequest {
    export type AsObject = {
        stream: string,
        recordsList: Array<AppendRecord.AsObject>,
        expectedRevision?: string,
    }
}

export class AppendStreamSuccess extends jspb.Message { 
    getStream(): string;
    setStream(value: string): AppendStreamSuccess;
    getPosition(): string;
    setPosition(value: string): AppendStreamSuccess;
    getStreamRevision(): string;
    setStreamRevision(value: string): AppendStreamSuccess;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendStreamSuccess.AsObject;
    static toObject(includeInstance: boolean, msg: AppendStreamSuccess): AppendStreamSuccess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendStreamSuccess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendStreamSuccess;
    static deserializeBinaryFromReader(message: AppendStreamSuccess, reader: jspb.BinaryReader): AppendStreamSuccess;
}

export namespace AppendStreamSuccess {
    export type AsObject = {
        stream: string,
        position: string,
        streamRevision: string,
    }
}

export class AppendStreamFailure extends jspb.Message { 
    getStream(): string;
    setStream(value: string): AppendStreamFailure;

    hasStreamRevisionConflict(): boolean;
    clearStreamRevisionConflict(): void;
    getStreamRevisionConflict(): kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamRevisionConflict | undefined;
    setStreamRevisionConflict(value?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamRevisionConflict): AppendStreamFailure;

    hasAccessDenied(): boolean;
    clearAccessDenied(): void;
    getAccessDenied(): kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.AccessDenied | undefined;
    setAccessDenied(value?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.AccessDenied): AppendStreamFailure;

    hasStreamDeleted(): boolean;
    clearStreamDeleted(): void;
    getStreamDeleted(): kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamDeleted | undefined;
    setStreamDeleted(value?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamDeleted): AppendStreamFailure;

    hasStreamNotFound(): boolean;
    clearStreamNotFound(): void;
    getStreamNotFound(): kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamNotFound | undefined;
    setStreamNotFound(value?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamNotFound): AppendStreamFailure;

    hasTransactionMaxSizeExceeded(): boolean;
    clearTransactionMaxSizeExceeded(): void;
    getTransactionMaxSizeExceeded(): kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.TransactionMaxSizeExceeded | undefined;
    setTransactionMaxSizeExceeded(value?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.TransactionMaxSizeExceeded): AppendStreamFailure;

    getErrorCase(): AppendStreamFailure.ErrorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendStreamFailure.AsObject;
    static toObject(includeInstance: boolean, msg: AppendStreamFailure): AppendStreamFailure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendStreamFailure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendStreamFailure;
    static deserializeBinaryFromReader(message: AppendStreamFailure, reader: jspb.BinaryReader): AppendStreamFailure;
}

export namespace AppendStreamFailure {
    export type AsObject = {
        stream: string,
        streamRevisionConflict?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamRevisionConflict.AsObject,
        accessDenied?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.AccessDenied.AsObject,
        streamDeleted?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamDeleted.AsObject,
        streamNotFound?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamNotFound.AsObject,
        transactionMaxSizeExceeded?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.TransactionMaxSizeExceeded.AsObject,
    }

    export enum ErrorCase {
        ERROR_NOT_SET = 0,
        STREAM_REVISION_CONFLICT = 2,
        ACCESS_DENIED = 3,
        STREAM_DELETED = 4,
        STREAM_NOT_FOUND = 5,
        TRANSACTION_MAX_SIZE_EXCEEDED = 6,
    }

}

export class AppendStreamResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): AppendStreamSuccess | undefined;
    setSuccess(value?: AppendStreamSuccess): AppendStreamResponse;

    hasFailure(): boolean;
    clearFailure(): void;
    getFailure(): AppendStreamFailure | undefined;
    setFailure(value?: AppendStreamFailure): AppendStreamResponse;

    getResultCase(): AppendStreamResponse.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AppendStreamResponse): AppendStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendStreamResponse;
    static deserializeBinaryFromReader(message: AppendStreamResponse, reader: jspb.BinaryReader): AppendStreamResponse;
}

export namespace AppendStreamResponse {
    export type AsObject = {
        success?: AppendStreamSuccess.AsObject,
        failure?: AppendStreamFailure.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        SUCCESS = 1,
        FAILURE = 2,
    }

}

export class MultiStreamAppendRequest extends jspb.Message { 
    clearInputList(): void;
    getInputList(): Array<AppendStreamRequest>;
    setInputList(value: Array<AppendStreamRequest>): MultiStreamAppendRequest;
    addInput(value?: AppendStreamRequest, index?: number): AppendStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiStreamAppendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiStreamAppendRequest): MultiStreamAppendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiStreamAppendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiStreamAppendRequest;
    static deserializeBinaryFromReader(message: MultiStreamAppendRequest, reader: jspb.BinaryReader): MultiStreamAppendRequest;
}

export namespace MultiStreamAppendRequest {
    export type AsObject = {
        inputList: Array<AppendStreamRequest.AsObject>,
    }
}

export class MultiStreamAppendResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): MultiStreamAppendResponse.Success | undefined;
    setSuccess(value?: MultiStreamAppendResponse.Success): MultiStreamAppendResponse;

    hasFailure(): boolean;
    clearFailure(): void;
    getFailure(): MultiStreamAppendResponse.Failure | undefined;
    setFailure(value?: MultiStreamAppendResponse.Failure): MultiStreamAppendResponse;

    getResultCase(): MultiStreamAppendResponse.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiStreamAppendResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiStreamAppendResponse): MultiStreamAppendResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiStreamAppendResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiStreamAppendResponse;
    static deserializeBinaryFromReader(message: MultiStreamAppendResponse, reader: jspb.BinaryReader): MultiStreamAppendResponse;
}

export namespace MultiStreamAppendResponse {
    export type AsObject = {
        success?: MultiStreamAppendResponse.Success.AsObject,
        failure?: MultiStreamAppendResponse.Failure.AsObject,
    }


    export class Success extends jspb.Message { 
        clearOutputList(): void;
        getOutputList(): Array<AppendStreamSuccess>;
        setOutputList(value: Array<AppendStreamSuccess>): Success;
        addOutput(value?: AppendStreamSuccess, index?: number): AppendStreamSuccess;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Success.AsObject;
        static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Success;
        static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
    }

    export namespace Success {
        export type AsObject = {
            outputList: Array<AppendStreamSuccess.AsObject>,
        }
    }

    export class Failure extends jspb.Message { 
        clearOutputList(): void;
        getOutputList(): Array<AppendStreamFailure>;
        setOutputList(value: Array<AppendStreamFailure>): Failure;
        addOutput(value?: AppendStreamFailure, index?: number): AppendStreamFailure;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Failure.AsObject;
        static toObject(includeInstance: boolean, msg: Failure): Failure.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Failure, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Failure;
        static deserializeBinaryFromReader(message: Failure, reader: jspb.BinaryReader): Failure;
    }

    export namespace Failure {
        export type AsObject = {
            outputList: Array<AppendStreamFailure.AsObject>,
        }
    }


    export enum ResultCase {
        RESULT_NOT_SET = 0,
        SUCCESS = 1,
        FAILURE = 2,
    }

}

export class ReadFilter extends jspb.Message { 
    getScope(): ReadFilterScope;
    setScope(value: ReadFilterScope): ReadFilter;
    getExpression(): string;
    setExpression(value: string): ReadFilter;
    clearPropertyNamesList(): void;
    getPropertyNamesList(): Array<string>;
    setPropertyNamesList(value: Array<string>): ReadFilter;
    addPropertyNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ReadFilter): ReadFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadFilter;
    static deserializeBinaryFromReader(message: ReadFilter, reader: jspb.BinaryReader): ReadFilter;
}

export namespace ReadFilter {
    export type AsObject = {
        scope: ReadFilterScope,
        expression: string,
        propertyNamesList: Array<string>,
    }
}

export class Record extends jspb.Message { 
    getRecordId(): string;
    setRecordId(value: string): Record;
    getPosition(): string;
    setPosition(value: string): Record;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Record;

    getPropertiesMap(): jspb.Map<string, kurrentdb_protocols_v2_core_pb.DynamicValue>;
    clearPropertiesMap(): void;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Record;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): string | undefined;
    setStream(value: string): Record;

    hasStreamRevision(): boolean;
    clearStreamRevision(): void;
    getStreamRevision(): string | undefined;
    setStreamRevision(value: string): Record;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Record.AsObject;
    static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Record;
    static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
    export type AsObject = {
        recordId: string,
        position: string,
        data: Uint8Array | string,

        propertiesMap: Array<[string, kurrentdb_protocols_v2_core_pb.DynamicValue.AsObject]>,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        stream?: string,
        streamRevision?: string,
    }
}

export class ReadSuccess extends jspb.Message { 
    clearRecordsList(): void;
    getRecordsList(): Array<Record>;
    setRecordsList(value: Array<Record>): ReadSuccess;
    addRecords(value?: Record, index?: number): Record;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadSuccess.AsObject;
    static toObject(includeInstance: boolean, msg: ReadSuccess): ReadSuccess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadSuccess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadSuccess;
    static deserializeBinaryFromReader(message: ReadSuccess, reader: jspb.BinaryReader): ReadSuccess;
}

export namespace ReadSuccess {
    export type AsObject = {
        recordsList: Array<Record.AsObject>,
    }
}

export class ReadFailure extends jspb.Message { 

    hasAccessDenied(): boolean;
    clearAccessDenied(): void;
    getAccessDenied(): kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.AccessDenied | undefined;
    setAccessDenied(value?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.AccessDenied): ReadFailure;

    hasStreamDeleted(): boolean;
    clearStreamDeleted(): void;
    getStreamDeleted(): kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamDeleted | undefined;
    setStreamDeleted(value?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamDeleted): ReadFailure;

    hasStreamNotFound(): boolean;
    clearStreamNotFound(): void;
    getStreamNotFound(): kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamNotFound | undefined;
    setStreamNotFound(value?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamNotFound): ReadFailure;

    getErrorCase(): ReadFailure.ErrorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadFailure.AsObject;
    static toObject(includeInstance: boolean, msg: ReadFailure): ReadFailure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadFailure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadFailure;
    static deserializeBinaryFromReader(message: ReadFailure, reader: jspb.BinaryReader): ReadFailure;
}

export namespace ReadFailure {
    export type AsObject = {
        accessDenied?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.AccessDenied.AsObject,
        streamDeleted?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamDeleted.AsObject,
        streamNotFound?: kurrentdb_protocols_v2_streams_shared_pb.ErrorDetails.StreamNotFound.AsObject,
    }

    export enum ErrorCase {
        ERROR_NOT_SET = 0,
        ACCESS_DENIED = 1,
        STREAM_DELETED = 2,
        STREAM_NOT_FOUND = 3,
    }

}

export class ReadRequest extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): ReadFilter | undefined;
    setFilter(value?: ReadFilter): ReadRequest;

    hasStartPosition(): boolean;
    clearStartPosition(): void;
    getStartPosition(): string | undefined;
    setStartPosition(value: string): ReadRequest;

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): string | undefined;
    setLimit(value: string): ReadRequest;
    getDirection(): ReadDirection;
    setDirection(value: ReadDirection): ReadRequest;

    hasHeartbeats(): boolean;
    clearHeartbeats(): void;
    getHeartbeats(): HeartbeatOptions | undefined;
    setHeartbeats(value?: HeartbeatOptions): ReadRequest;
    getBatchSize(): number;
    setBatchSize(value: number): ReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadRequest;
    static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
    export type AsObject = {
        filter?: ReadFilter.AsObject,
        startPosition?: string,
        limit?: string,
        direction: ReadDirection,
        heartbeats?: HeartbeatOptions.AsObject,
        batchSize: number,
    }
}

export class ReadResponse extends jspb.Message { 

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): ReadSuccess | undefined;
    setSuccess(value?: ReadSuccess): ReadResponse;

    hasFailure(): boolean;
    clearFailure(): void;
    getFailure(): ReadFailure | undefined;
    setFailure(value?: ReadFailure): ReadResponse;

    hasHeartbeat(): boolean;
    clearHeartbeat(): void;
    getHeartbeat(): Heartbeat | undefined;
    setHeartbeat(value?: Heartbeat): ReadResponse;

    getResultCase(): ReadResponse.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadResponse;
    static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
    export type AsObject = {
        success?: ReadSuccess.AsObject,
        failure?: ReadFailure.AsObject,
        heartbeat?: Heartbeat.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        SUCCESS = 1,
        FAILURE = 2,
        HEARTBEAT = 3,
    }

}

export class HeartbeatOptions extends jspb.Message { 
    getEnable(): boolean;
    setEnable(value: boolean): HeartbeatOptions;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): google_protobuf_duration_pb.Duration | undefined;
    setPeriod(value?: google_protobuf_duration_pb.Duration): HeartbeatOptions;

    hasRecordsThreshold(): boolean;
    clearRecordsThreshold(): void;
    getRecordsThreshold(): number | undefined;
    setRecordsThreshold(value: number): HeartbeatOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeartbeatOptions.AsObject;
    static toObject(includeInstance: boolean, msg: HeartbeatOptions): HeartbeatOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeartbeatOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeartbeatOptions;
    static deserializeBinaryFromReader(message: HeartbeatOptions, reader: jspb.BinaryReader): HeartbeatOptions;
}

export namespace HeartbeatOptions {
    export type AsObject = {
        enable: boolean,
        period?: google_protobuf_duration_pb.Duration.AsObject,
        recordsThreshold?: number,
    }
}

export class Heartbeat extends jspb.Message { 
    getType(): HeartbeatType;
    setType(value: HeartbeatType): Heartbeat;
    getPosition(): string;
    setPosition(value: string): Heartbeat;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Heartbeat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Heartbeat.AsObject;
    static toObject(includeInstance: boolean, msg: Heartbeat): Heartbeat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Heartbeat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Heartbeat;
    static deserializeBinaryFromReader(message: Heartbeat, reader: jspb.BinaryReader): Heartbeat;
}

export namespace Heartbeat {
    export type AsObject = {
        type: HeartbeatType,
        position: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum ExpectedRevisionConstants {
    EXPECTED_REVISION_CONSTANTS_SINGLE_EVENT = 0,
    EXPECTED_REVISION_CONSTANTS_ANY = -2,
    EXPECTED_REVISION_CONSTANTS_NO_STREAM = -1,
    EXPECTED_REVISION_CONSTANTS_EXISTS = -4,
}

export enum ReadFilterScope {
    READ_FILTER_SCOPE_UNSPECIFIED = 0,
    READ_FILTER_SCOPE_STREAM = 1,
    READ_FILTER_SCOPE_SCHEMA_NAME = 2,
    READ_FILTER_SCOPE_PROPERTIES = 3,
    READ_FILTER_SCOPE_RECORD = 4,
}

export enum ReadDirection {
    READ_DIRECTION_FORWARDS = 0,
    READ_DIRECTION_BACKWARDS = 1,
}

export enum ReadPositionConstants {
    READ_POSITION_CONSTANTS_UNSPECIFIED = 0,
    READ_POSITION_CONSTANTS_EARLIEST = 1,
    READ_POSITION_CONSTANTS_LATEST = 2,
}

export enum HeartbeatType {
    HEARTBEAT_TYPE_UNSPECIFIED = 0,
    HEARTBEAT_TYPE_CHECKPOINT = 1,
    HEARTBEAT_TYPE_CAUGHT_UP = 2,
    HEARTBEAT_TYPE_FELL_BEHIND = 3,
}
