// package: kurrent.rpc
// file: kurrentdb/protocols/v2/errors.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as kurrentdb_protocols_v2_rpc_pb from "../../../kurrentdb/protocols/v2/rpc_pb";

export class AccessDeniedErrorDetails extends jspb.Message { 
    getOperation(): string;
    setOperation(value: string): AccessDeniedErrorDetails;

    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): string | undefined;
    setUsername(value: string): AccessDeniedErrorDetails;

    hasPermission(): boolean;
    clearPermission(): void;
    getPermission(): string | undefined;
    setPermission(value: string): AccessDeniedErrorDetails;

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
        operation: string,
        username?: string,
        permission?: string,
    }
}

export class NotLeaderNodeErrorDetails extends jspb.Message { 

    hasCurrentLeader(): boolean;
    clearCurrentLeader(): void;
    getCurrentLeader(): NotLeaderNodeErrorDetails.NodeInfo | undefined;
    setCurrentLeader(value?: NotLeaderNodeErrorDetails.NodeInfo): NotLeaderNodeErrorDetails;

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
        currentLeader?: NotLeaderNodeErrorDetails.NodeInfo.AsObject,
    }


    export class NodeInfo extends jspb.Message { 
        getHost(): string;
        setHost(value: string): NodeInfo;
        getPort(): number;
        setPort(value: number): NodeInfo;

        hasNodeId(): boolean;
        clearNodeId(): void;
        getNodeId(): string | undefined;
        setNodeId(value: string): NodeInfo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NodeInfo.AsObject;
        static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NodeInfo;
        static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
    }

    export namespace NodeInfo {
        export type AsObject = {
            host: string,
            port: number,
            nodeId?: string,
        }
    }

}

export enum ServerError {
    UNSPECIFIED = 0,
    SERVER_ERROR_ACCESS_DENIED = 1,
    SERVER_ERROR_BAD_REQUEST = 2,
    SERVER_ERROR_NOT_LEADER_NODE = 5,
    SERVER_ERROR_OPERATION_TIMEOUT = 6,
    SERVER_ERROR_SERVER_NOT_READY = 7,
    SERVER_ERROR_SERVER_OVERLOADED = 8,
    SERVER_ERROR_SERVER_MALFUNCTION = 9,
}
