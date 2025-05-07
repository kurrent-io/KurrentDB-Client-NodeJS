// package: kurrentdb.protocol.streams.v2
// file: streams/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AppendRecord extends jspb.Message { 

    hasRecordId(): boolean;
    clearRecordId(): void;
    getRecordId(): string | undefined;
    setRecordId(value: string): AppendRecord;

    getPropertiesMap(): jspb.Map<string, DynamicValue>;
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

        propertiesMap: Array<[string, DynamicValue.AsObject]>,
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

    hasWrongExpectedRevision(): boolean;
    clearWrongExpectedRevision(): void;
    getWrongExpectedRevision(): ErrorDetails.WrongExpectedRevision | undefined;
    setWrongExpectedRevision(value?: ErrorDetails.WrongExpectedRevision): AppendStreamFailure;

    hasAccessDenied(): boolean;
    clearAccessDenied(): void;
    getAccessDenied(): ErrorDetails.AccessDenied | undefined;
    setAccessDenied(value?: ErrorDetails.AccessDenied): AppendStreamFailure;

    hasStreamDeleted(): boolean;
    clearStreamDeleted(): void;
    getStreamDeleted(): ErrorDetails.StreamDeleted | undefined;
    setStreamDeleted(value?: ErrorDetails.StreamDeleted): AppendStreamFailure;

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
        wrongExpectedRevision?: ErrorDetails.WrongExpectedRevision.AsObject,
        accessDenied?: ErrorDetails.AccessDenied.AsObject,
        streamDeleted?: ErrorDetails.StreamDeleted.AsObject,
    }

    export enum ErrorCase {
        ERROR_NOT_SET = 0,
        WRONG_EXPECTED_REVISION = 2,
        ACCESS_DENIED = 3,
        STREAM_DELETED = 4,
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

export class ErrorDetails extends jspb.Message { 

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
    }


    export class AccessDenied extends jspb.Message { 
        getReason(): string;
        setReason(value: string): AccessDenied;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AccessDenied.AsObject;
        static toObject(includeInstance: boolean, msg: AccessDenied): AccessDenied.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AccessDenied, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AccessDenied;
        static deserializeBinaryFromReader(message: AccessDenied, reader: jspb.BinaryReader): AccessDenied;
    }

    export namespace AccessDenied {
        export type AsObject = {
            reason: string,
        }
    }

    export class StreamDeleted extends jspb.Message { 

        hasDeletedAt(): boolean;
        clearDeletedAt(): void;
        getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): StreamDeleted;
        getTombstoned(): boolean;
        setTombstoned(value: boolean): StreamDeleted;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StreamDeleted.AsObject;
        static toObject(includeInstance: boolean, msg: StreamDeleted): StreamDeleted.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StreamDeleted, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StreamDeleted;
        static deserializeBinaryFromReader(message: StreamDeleted, reader: jspb.BinaryReader): StreamDeleted;
    }

    export namespace StreamDeleted {
        export type AsObject = {
            deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            tombstoned: boolean,
        }
    }

    export class WrongExpectedRevision extends jspb.Message { 
        getStreamRevision(): string;
        setStreamRevision(value: string): WrongExpectedRevision;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WrongExpectedRevision.AsObject;
        static toObject(includeInstance: boolean, msg: WrongExpectedRevision): WrongExpectedRevision.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WrongExpectedRevision, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WrongExpectedRevision;
        static deserializeBinaryFromReader(message: WrongExpectedRevision, reader: jspb.BinaryReader): WrongExpectedRevision;
    }

    export namespace WrongExpectedRevision {
        export type AsObject = {
            streamRevision: string,
        }
    }

    export class TransactionMaxSizeExceeded extends jspb.Message { 
        getMaxSize(): number;
        setMaxSize(value: number): TransactionMaxSizeExceeded;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TransactionMaxSizeExceeded.AsObject;
        static toObject(includeInstance: boolean, msg: TransactionMaxSizeExceeded): TransactionMaxSizeExceeded.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TransactionMaxSizeExceeded, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TransactionMaxSizeExceeded;
        static deserializeBinaryFromReader(message: TransactionMaxSizeExceeded, reader: jspb.BinaryReader): TransactionMaxSizeExceeded;
    }

    export namespace TransactionMaxSizeExceeded {
        export type AsObject = {
            maxSize: number,
        }
    }

}

export class DynamicValueList extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<DynamicValue>;
    setValuesList(value: Array<DynamicValue>): DynamicValueList;
    addValues(value?: DynamicValue, index?: number): DynamicValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicValueList.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicValueList): DynamicValueList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicValueList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicValueList;
    static deserializeBinaryFromReader(message: DynamicValueList, reader: jspb.BinaryReader): DynamicValueList;
}

export namespace DynamicValueList {
    export type AsObject = {
        valuesList: Array<DynamicValue.AsObject>,
    }
}

export class DynamicValueMap extends jspb.Message { 

    getValuesMap(): jspb.Map<string, DynamicValue>;
    clearValuesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicValueMap.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicValueMap): DynamicValueMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicValueMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicValueMap;
    static deserializeBinaryFromReader(message: DynamicValueMap, reader: jspb.BinaryReader): DynamicValueMap;
}

export namespace DynamicValueMap {
    export type AsObject = {

        valuesMap: Array<[string, DynamicValue.AsObject]>,
    }
}

export class DynamicValue extends jspb.Message { 

    hasNullValue(): boolean;
    clearNullValue(): void;
    getNullValue(): google_protobuf_struct_pb.NullValue;
    setNullValue(value: google_protobuf_struct_pb.NullValue): DynamicValue;

    hasInt32Value(): boolean;
    clearInt32Value(): void;
    getInt32Value(): number;
    setInt32Value(value: number): DynamicValue;

    hasInt64Value(): boolean;
    clearInt64Value(): void;
    getInt64Value(): number;
    setInt64Value(value: number): DynamicValue;

    hasBytesValue(): boolean;
    clearBytesValue(): void;
    getBytesValue(): Uint8Array | string;
    getBytesValue_asU8(): Uint8Array;
    getBytesValue_asB64(): string;
    setBytesValue(value: Uint8Array | string): DynamicValue;

    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): number;
    setDoubleValue(value: number): DynamicValue;

    hasFloatValue(): boolean;
    clearFloatValue(): void;
    getFloatValue(): number;
    setFloatValue(value: number): DynamicValue;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): string;
    setStringValue(value: string): DynamicValue;

    hasBooleanValue(): boolean;
    clearBooleanValue(): void;
    getBooleanValue(): boolean;
    setBooleanValue(value: boolean): DynamicValue;

    hasTimestampValue(): boolean;
    clearTimestampValue(): void;
    getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): DynamicValue;

    hasDurationValue(): boolean;
    clearDurationValue(): void;
    getDurationValue(): google_protobuf_duration_pb.Duration | undefined;
    setDurationValue(value?: google_protobuf_duration_pb.Duration): DynamicValue;

    getKindCase(): DynamicValue.KindCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicValue.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicValue): DynamicValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicValue;
    static deserializeBinaryFromReader(message: DynamicValue, reader: jspb.BinaryReader): DynamicValue;
}

export namespace DynamicValue {
    export type AsObject = {
        nullValue: google_protobuf_struct_pb.NullValue,
        int32Value: number,
        int64Value: number,
        bytesValue: Uint8Array | string,
        doubleValue: number,
        floatValue: number,
        stringValue: string,
        booleanValue: boolean,
        timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationValue?: google_protobuf_duration_pb.Duration.AsObject,
    }

    export enum KindCase {
        KIND_NOT_SET = 0,
        NULL_VALUE = 1,
        INT32_VALUE = 2,
        INT64_VALUE = 3,
        BYTES_VALUE = 4,
        DOUBLE_VALUE = 5,
        FLOAT_VALUE = 6,
        STRING_VALUE = 7,
        BOOLEAN_VALUE = 8,
        TIMESTAMP_VALUE = 9,
        DURATION_VALUE = 10,
    }

}

export enum ExpectedRevisionConstants {
    EXPECTED_REVISION_CONSTANTS_SINGLE_EVENT = 0,
    EXPECTED_REVISION_CONSTANTS_ANY = -2,
    EXPECTED_REVISION_CONSTANTS_NO_STREAM = -1,
    EXPECTED_REVISION_CONSTANTS_EXISTS = -4,
}
