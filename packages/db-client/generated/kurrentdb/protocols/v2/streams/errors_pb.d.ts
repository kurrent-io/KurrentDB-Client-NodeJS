// package: kurrentdb.protocol.v2.streams.errors
// file: kurrentdb/protocols/v2/streams/errors.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as kurrentdb_protocols_v2_rpc_pb from "../../../../kurrentdb/protocols/v2/rpc_pb";

export class StreamNotFoundErrorDetails extends jspb.Message { 
    getStream(): string;
    setStream(value: string): StreamNotFoundErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamNotFoundErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: StreamNotFoundErrorDetails): StreamNotFoundErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamNotFoundErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamNotFoundErrorDetails;
    static deserializeBinaryFromReader(message: StreamNotFoundErrorDetails, reader: jspb.BinaryReader): StreamNotFoundErrorDetails;
}

export namespace StreamNotFoundErrorDetails {
    export type AsObject = {
        stream: string,
    }
}

export class StreamAlreadyExistsErrorDetails extends jspb.Message { 
    getStream(): string;
    setStream(value: string): StreamAlreadyExistsErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamAlreadyExistsErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: StreamAlreadyExistsErrorDetails): StreamAlreadyExistsErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamAlreadyExistsErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamAlreadyExistsErrorDetails;
    static deserializeBinaryFromReader(message: StreamAlreadyExistsErrorDetails, reader: jspb.BinaryReader): StreamAlreadyExistsErrorDetails;
}

export namespace StreamAlreadyExistsErrorDetails {
    export type AsObject = {
        stream: string,
    }
}

export class StreamDeletedErrorDetails extends jspb.Message { 
    getStream(): string;
    setStream(value: string): StreamDeletedErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamDeletedErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: StreamDeletedErrorDetails): StreamDeletedErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamDeletedErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamDeletedErrorDetails;
    static deserializeBinaryFromReader(message: StreamDeletedErrorDetails, reader: jspb.BinaryReader): StreamDeletedErrorDetails;
}

export namespace StreamDeletedErrorDetails {
    export type AsObject = {
        stream: string,
    }
}

export class StreamTombstonedErrorDetails extends jspb.Message { 
    getStream(): string;
    setStream(value: string): StreamTombstonedErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamTombstonedErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: StreamTombstonedErrorDetails): StreamTombstonedErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamTombstonedErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamTombstonedErrorDetails;
    static deserializeBinaryFromReader(message: StreamTombstonedErrorDetails, reader: jspb.BinaryReader): StreamTombstonedErrorDetails;
}

export namespace StreamTombstonedErrorDetails {
    export type AsObject = {
        stream: string,
    }
}

export class StreamRevisionConflictErrorDetails extends jspb.Message { 
    getStream(): string;
    setStream(value: string): StreamRevisionConflictErrorDetails;
    getExpectedRevision(): string;
    setExpectedRevision(value: string): StreamRevisionConflictErrorDetails;
    getActualRevision(): string;
    setActualRevision(value: string): StreamRevisionConflictErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamRevisionConflictErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: StreamRevisionConflictErrorDetails): StreamRevisionConflictErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamRevisionConflictErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamRevisionConflictErrorDetails;
    static deserializeBinaryFromReader(message: StreamRevisionConflictErrorDetails, reader: jspb.BinaryReader): StreamRevisionConflictErrorDetails;
}

export namespace StreamRevisionConflictErrorDetails {
    export type AsObject = {
        stream: string,
        expectedRevision: string,
        actualRevision: string,
    }
}

export class AppendRecordSizeExceededErrorDetails extends jspb.Message { 
    getStream(): string;
    setStream(value: string): AppendRecordSizeExceededErrorDetails;
    getRecordId(): string;
    setRecordId(value: string): AppendRecordSizeExceededErrorDetails;
    getSize(): number;
    setSize(value: number): AppendRecordSizeExceededErrorDetails;
    getMaxSize(): number;
    setMaxSize(value: number): AppendRecordSizeExceededErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendRecordSizeExceededErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: AppendRecordSizeExceededErrorDetails): AppendRecordSizeExceededErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendRecordSizeExceededErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendRecordSizeExceededErrorDetails;
    static deserializeBinaryFromReader(message: AppendRecordSizeExceededErrorDetails, reader: jspb.BinaryReader): AppendRecordSizeExceededErrorDetails;
}

export namespace AppendRecordSizeExceededErrorDetails {
    export type AsObject = {
        stream: string,
        recordId: string,
        size: number,
        maxSize: number,
    }
}

export class AppendTransactionSizeExceededErrorDetails extends jspb.Message { 
    getSize(): number;
    setSize(value: number): AppendTransactionSizeExceededErrorDetails;
    getMaxSize(): number;
    setMaxSize(value: number): AppendTransactionSizeExceededErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendTransactionSizeExceededErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: AppendTransactionSizeExceededErrorDetails): AppendTransactionSizeExceededErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendTransactionSizeExceededErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendTransactionSizeExceededErrorDetails;
    static deserializeBinaryFromReader(message: AppendTransactionSizeExceededErrorDetails, reader: jspb.BinaryReader): AppendTransactionSizeExceededErrorDetails;
}

export namespace AppendTransactionSizeExceededErrorDetails {
    export type AsObject = {
        size: number,
        maxSize: number,
    }
}

export class StreamAlreadyInAppendSessionErrorDetails extends jspb.Message { 
    getStream(): string;
    setStream(value: string): StreamAlreadyInAppendSessionErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamAlreadyInAppendSessionErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: StreamAlreadyInAppendSessionErrorDetails): StreamAlreadyInAppendSessionErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamAlreadyInAppendSessionErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamAlreadyInAppendSessionErrorDetails;
    static deserializeBinaryFromReader(message: StreamAlreadyInAppendSessionErrorDetails, reader: jspb.BinaryReader): StreamAlreadyInAppendSessionErrorDetails;
}

export namespace StreamAlreadyInAppendSessionErrorDetails {
    export type AsObject = {
        stream: string,
    }
}

export class AppendConsistencyViolationErrorDetails extends jspb.Message { 
    clearViolationsList(): void;
    getViolationsList(): Array<ConsistencyViolation>;
    setViolationsList(value: Array<ConsistencyViolation>): AppendConsistencyViolationErrorDetails;
    addViolations(value?: ConsistencyViolation, index?: number): ConsistencyViolation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppendConsistencyViolationErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: AppendConsistencyViolationErrorDetails): AppendConsistencyViolationErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppendConsistencyViolationErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppendConsistencyViolationErrorDetails;
    static deserializeBinaryFromReader(message: AppendConsistencyViolationErrorDetails, reader: jspb.BinaryReader): AppendConsistencyViolationErrorDetails;
}

export namespace AppendConsistencyViolationErrorDetails {
    export type AsObject = {
        violationsList: Array<ConsistencyViolation.AsObject>,
    }
}

export class ConsistencyViolation extends jspb.Message { 
    getCheckIndex(): number;
    setCheckIndex(value: number): ConsistencyViolation;

    hasStreamState(): boolean;
    clearStreamState(): void;
    getStreamState(): ConsistencyViolation.StreamStateViolation | undefined;
    setStreamState(value?: ConsistencyViolation.StreamStateViolation): ConsistencyViolation;

    getTypeCase(): ConsistencyViolation.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsistencyViolation.AsObject;
    static toObject(includeInstance: boolean, msg: ConsistencyViolation): ConsistencyViolation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsistencyViolation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsistencyViolation;
    static deserializeBinaryFromReader(message: ConsistencyViolation, reader: jspb.BinaryReader): ConsistencyViolation;
}

export namespace ConsistencyViolation {
    export type AsObject = {
        checkIndex: number,
        streamState?: ConsistencyViolation.StreamStateViolation.AsObject,
    }


    export class StreamStateViolation extends jspb.Message { 
        getStream(): string;
        setStream(value: string): StreamStateViolation;
        getExpectedState(): string;
        setExpectedState(value: string): StreamStateViolation;
        getActualState(): string;
        setActualState(value: string): StreamStateViolation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StreamStateViolation.AsObject;
        static toObject(includeInstance: boolean, msg: StreamStateViolation): StreamStateViolation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StreamStateViolation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StreamStateViolation;
        static deserializeBinaryFromReader(message: StreamStateViolation, reader: jspb.BinaryReader): StreamStateViolation;
    }

    export namespace StreamStateViolation {
        export type AsObject = {
            stream: string,
            expectedState: string,
            actualState: string,
        }
    }


    export enum TypeCase {
        TYPE_NOT_SET = 0,
        STREAM_STATE = 2,
    }

}

export enum StreamsError {
    STREAMS_ERROR_UNSPECIFIED = 0,
    STREAMS_ERROR_STREAM_NOT_FOUND = 1,
    STREAMS_ERROR_STREAM_ALREADY_EXISTS = 2,
    STREAMS_ERROR_STREAM_DELETED = 3,
    STREAMS_ERROR_STREAM_TOMBSTONED = 4,
    STREAMS_ERROR_STREAM_REVISION_CONFLICT = 5,
    STREAMS_ERROR_APPEND_RECORD_SIZE_EXCEEDED = 6,
    STREAMS_ERROR_APPEND_TRANSACTION_SIZE_EXCEEDED = 7,
    STREAMS_ERROR_STREAM_ALREADY_IN_APPEND_SESSION = 8,
    STREAMS_ERROR_APPEND_SESSION_NO_REQUESTS = 9,
    STREAMS_ERROR_APPEND_CONSISTENCY_VIOLATION = 14,
}
