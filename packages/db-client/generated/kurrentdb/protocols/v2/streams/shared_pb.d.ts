// package: kurrentdb.protocol.v2
// file: kurrentdb/protocols/v2/streams/shared.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as kurrentdb_protocols_v2_core_pb from "../../../../kurrentdb/protocols/v2/core_pb";

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
        }
    }

    export class StreamDeleted extends jspb.Message { 

        hasStream(): boolean;
        clearStream(): void;
        getStream(): string | undefined;
        setStream(value: string): StreamDeleted;

        hasDeletedAt(): boolean;
        clearDeletedAt(): void;
        getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): StreamDeleted;

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
            stream?: string,
            deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

    export class StreamTombstoned extends jspb.Message { 

        hasStream(): boolean;
        clearStream(): void;
        getStream(): string | undefined;
        setStream(value: string): StreamTombstoned;

        hasTombstonedAt(): boolean;
        clearTombstonedAt(): void;
        getTombstonedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTombstonedAt(value?: google_protobuf_timestamp_pb.Timestamp): StreamTombstoned;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StreamTombstoned.AsObject;
        static toObject(includeInstance: boolean, msg: StreamTombstoned): StreamTombstoned.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StreamTombstoned, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StreamTombstoned;
        static deserializeBinaryFromReader(message: StreamTombstoned, reader: jspb.BinaryReader): StreamTombstoned;
    }

    export namespace StreamTombstoned {
        export type AsObject = {
            stream?: string,
            tombstonedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

    export class StreamNotFound extends jspb.Message { 

        hasStream(): boolean;
        clearStream(): void;
        getStream(): string | undefined;
        setStream(value: string): StreamNotFound;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StreamNotFound.AsObject;
        static toObject(includeInstance: boolean, msg: StreamNotFound): StreamNotFound.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StreamNotFound, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StreamNotFound;
        static deserializeBinaryFromReader(message: StreamNotFound, reader: jspb.BinaryReader): StreamNotFound;
    }

    export namespace StreamNotFound {
        export type AsObject = {
            stream?: string,
        }
    }

    export class StreamRevisionConflict extends jspb.Message { 
        getStreamRevision(): string;
        setStreamRevision(value: string): StreamRevisionConflict;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StreamRevisionConflict.AsObject;
        static toObject(includeInstance: boolean, msg: StreamRevisionConflict): StreamRevisionConflict.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StreamRevisionConflict, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StreamRevisionConflict;
        static deserializeBinaryFromReader(message: StreamRevisionConflict, reader: jspb.BinaryReader): StreamRevisionConflict;
    }

    export namespace StreamRevisionConflict {
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

    export class UserNotFound extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UserNotFound.AsObject;
        static toObject(includeInstance: boolean, msg: UserNotFound): UserNotFound.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UserNotFound, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UserNotFound;
        static deserializeBinaryFromReader(message: UserNotFound, reader: jspb.BinaryReader): UserNotFound;
    }

    export namespace UserNotFound {
        export type AsObject = {
        }
    }

    export class NotAuthenticated extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NotAuthenticated.AsObject;
        static toObject(includeInstance: boolean, msg: NotAuthenticated): NotAuthenticated.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NotAuthenticated, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NotAuthenticated;
        static deserializeBinaryFromReader(message: NotAuthenticated, reader: jspb.BinaryReader): NotAuthenticated;
    }

    export namespace NotAuthenticated {
        export type AsObject = {
        }
    }

    export class LogPositionNotFound extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): LogPositionNotFound.AsObject;
        static toObject(includeInstance: boolean, msg: LogPositionNotFound): LogPositionNotFound.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: LogPositionNotFound, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): LogPositionNotFound;
        static deserializeBinaryFromReader(message: LogPositionNotFound, reader: jspb.BinaryReader): LogPositionNotFound;
    }

    export namespace LogPositionNotFound {
        export type AsObject = {
        }
    }

}
