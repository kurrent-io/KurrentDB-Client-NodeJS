// package: kurrentdb.protocol.v2.common.errors
// file: kurrentdb/protocols/v2/errors.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as kurrentdb_protocols_v2_rpc_pb from "../../../kurrentdb/protocols/v2/rpc_pb";

export class AccessDeniedErrorDetails extends jspb.Message { 

    hasScope(): boolean;
    clearScope(): void;
    getScope(): string | undefined;
    setScope(value: string): AccessDeniedErrorDetails;

    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): string | undefined;
    setUsername(value: string): AccessDeniedErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessDeniedErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: AccessDeniedErrorDetails): AccessDeniedErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessDeniedErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessDeniedErrorDetails;
    static deserializeBinaryFromReader(message: AccessDeniedErrorDetails, reader: jspb.BinaryReader): AccessDeniedErrorDetails;
}

export namespace AccessDeniedErrorDetails {
    export type AsObject = {
        scope?: string,
        username?: string,
    }
}

export class InvalidRequestErrorDetails extends jspb.Message { 
    clearViolationsList(): void;
    getViolationsList(): Array<InvalidRequestErrorDetails.FieldViolation>;
    setViolationsList(value: Array<InvalidRequestErrorDetails.FieldViolation>): InvalidRequestErrorDetails;
    addViolations(value?: InvalidRequestErrorDetails.FieldViolation, index?: number): InvalidRequestErrorDetails.FieldViolation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvalidRequestErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: InvalidRequestErrorDetails): InvalidRequestErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvalidRequestErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvalidRequestErrorDetails;
    static deserializeBinaryFromReader(message: InvalidRequestErrorDetails, reader: jspb.BinaryReader): InvalidRequestErrorDetails;
}

export namespace InvalidRequestErrorDetails {
    export type AsObject = {
        violationsList: Array<InvalidRequestErrorDetails.FieldViolation.AsObject>,
    }


    export class FieldViolation extends jspb.Message { 
        getField(): string;
        setField(value: string): FieldViolation;
        getDescription(): string;
        setDescription(value: string): FieldViolation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FieldViolation.AsObject;
        static toObject(includeInstance: boolean, msg: FieldViolation): FieldViolation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FieldViolation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FieldViolation;
        static deserializeBinaryFromReader(message: FieldViolation, reader: jspb.BinaryReader): FieldViolation;
    }

    export namespace FieldViolation {
        export type AsObject = {
            field: string,
            description: string,
        }
    }

}

export class NotLeaderNodeErrorDetails extends jspb.Message { 
    getHost(): string;
    setHost(value: string): NotLeaderNodeErrorDetails;
    getPort(): number;
    setPort(value: number): NotLeaderNodeErrorDetails;

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): string | undefined;
    setNodeId(value: string): NotLeaderNodeErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotLeaderNodeErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: NotLeaderNodeErrorDetails): NotLeaderNodeErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotLeaderNodeErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotLeaderNodeErrorDetails;
    static deserializeBinaryFromReader(message: NotLeaderNodeErrorDetails, reader: jspb.BinaryReader): NotLeaderNodeErrorDetails;
}

export namespace NotLeaderNodeErrorDetails {
    export type AsObject = {
        host: string,
        port: number,
        nodeId?: string,
    }
}

export class RetryInfoErrorDetails extends jspb.Message { 
    getRetryDelayMs(): number;
    setRetryDelayMs(value: number): RetryInfoErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetryInfoErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: RetryInfoErrorDetails): RetryInfoErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetryInfoErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetryInfoErrorDetails;
    static deserializeBinaryFromReader(message: RetryInfoErrorDetails, reader: jspb.BinaryReader): RetryInfoErrorDetails;
}

export namespace RetryInfoErrorDetails {
    export type AsObject = {
        retryDelayMs: number,
    }
}

export class NodeInfoErrorDetails extends jspb.Message { 
    getHost(): string;
    setHost(value: string): NodeInfoErrorDetails;
    getPort(): number;
    setPort(value: number): NodeInfoErrorDetails;

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): string | undefined;
    setNodeId(value: string): NodeInfoErrorDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeInfoErrorDetails.AsObject;
    static toObject(includeInstance: boolean, msg: NodeInfoErrorDetails): NodeInfoErrorDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeInfoErrorDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeInfoErrorDetails;
    static deserializeBinaryFromReader(message: NodeInfoErrorDetails, reader: jspb.BinaryReader): NodeInfoErrorDetails;
}

export namespace NodeInfoErrorDetails {
    export type AsObject = {
        host: string,
        port: number,
        nodeId?: string,
    }
}

export enum CommonError {
    UNSPECIFIED = 0,
    COMMON_ERROR_ACCESS_DENIED = 1,
    COMMON_ERROR_INVALID_REQUEST = 2,
    COMMON_ERROR_NOT_LEADER_NODE = 5,
    COMMON_ERROR_OPERATION_TIMEOUT = 6,
    COMMON_ERROR_SERVER_NOT_READY = 7,
    COMMON_ERROR_SERVER_OVERLOADED = 8,
    COMMON_ERROR_SERVER_MALFUNCTION = 9,
}
