// package: kurrentdb.protocol.v2
// file: kurrentdb/protocols/v2/features/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as kurrentdb_protocols_v2_core_pb from "../../../../kurrentdb/protocols/v2/core_pb";

export class ServerMetadata extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): ServerMetadata;
    getBuild(): string;
    setBuild(value: string): ServerMetadata;
    getMinCompatibleClientVersion(): string;
    setMinCompatibleClientVersion(value: string): ServerMetadata;
    getNodeId(): string;
    setNodeId(value: string): ServerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ServerMetadata): ServerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerMetadata;
    static deserializeBinaryFromReader(message: ServerMetadata, reader: jspb.BinaryReader): ServerMetadata;
}

export namespace ServerMetadata {
    export type AsObject = {
        version: string,
        build: string,
        minCompatibleClientVersion: string,
        nodeId: string,
    }
}

export class ServerInfoRequest extends jspb.Message { 
    getClientVersion(): string;
    setClientVersion(value: string): ServerInfoRequest;
    getClientId(): string;
    setClientId(value: string): ServerInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ServerInfoRequest): ServerInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerInfoRequest;
    static deserializeBinaryFromReader(message: ServerInfoRequest, reader: jspb.BinaryReader): ServerInfoRequest;
}

export namespace ServerInfoRequest {
    export type AsObject = {
        clientVersion: string,
        clientId: string,
    }
}

export class ServerInfoResponse extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): ServerInfo | undefined;
    setInfo(value?: ServerInfo): ServerInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ServerInfoResponse): ServerInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerInfoResponse;
    static deserializeBinaryFromReader(message: ServerInfoResponse, reader: jspb.BinaryReader): ServerInfoResponse;
}

export namespace ServerInfoResponse {
    export type AsObject = {
        info?: ServerInfo.AsObject,
    }
}

export class ServerInfo extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): ServerMetadata | undefined;
    setMetadata(value?: ServerMetadata): ServerInfo;

    getFeaturesMap(): jspb.Map<string, FeaturesList>;
    clearFeaturesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ServerInfo): ServerInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerInfo;
    static deserializeBinaryFromReader(message: ServerInfo, reader: jspb.BinaryReader): ServerInfo;
}

export namespace ServerInfo {
    export type AsObject = {
        metadata?: ServerMetadata.AsObject,

        featuresMap: Array<[string, FeaturesList.AsObject]>,
    }
}

export class FeaturesList extends jspb.Message { 
    clearFeaturesList(): void;
    getFeaturesList(): Array<Feature>;
    setFeaturesList(value: Array<Feature>): FeaturesList;
    addFeatures(value?: Feature, index?: number): Feature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeaturesList.AsObject;
    static toObject(includeInstance: boolean, msg: FeaturesList): FeaturesList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeaturesList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeaturesList;
    static deserializeBinaryFromReader(message: FeaturesList, reader: jspb.BinaryReader): FeaturesList;
}

export namespace FeaturesList {
    export type AsObject = {
        featuresList: Array<Feature.AsObject>,
    }
}

export class Feature extends jspb.Message { 
    getName(): string;
    setName(value: string): Feature;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): Feature;
    getEnabled(): boolean;
    setEnabled(value: boolean): Feature;
    getDeprecated(): boolean;
    setDeprecated(value: boolean): Feature;
    clearRequirementsList(): void;
    getRequirementsList(): Array<FeatureRequirement>;
    setRequirementsList(value: Array<FeatureRequirement>): Feature;
    addRequirements(value?: FeatureRequirement, index?: number): FeatureRequirement;
    getClientConfigurable(): boolean;
    setClientConfigurable(value: boolean): Feature;

    hasAvailableUntil(): boolean;
    clearAvailableUntil(): void;
    getAvailableUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAvailableUntil(value?: google_protobuf_timestamp_pb.Timestamp): Feature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feature.AsObject;
    static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feature;
    static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
    export type AsObject = {
        name: string,
        description?: string,
        enabled: boolean,
        deprecated: boolean,
        requirementsList: Array<FeatureRequirement.AsObject>,
        clientConfigurable: boolean,
        availableUntil?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class FeatureRequirement extends jspb.Message { 
    getName(): string;
    setName(value: string): FeatureRequirement;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): kurrentdb_protocols_v2_core_pb.DynamicValue | undefined;
    setValue(value?: kurrentdb_protocols_v2_core_pb.DynamicValue): FeatureRequirement;
    getPolicyStatus(): PolicyStatus;
    setPolicyStatus(value: PolicyStatus): FeatureRequirement;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): FeatureRequirement;

    hasViolationMessage(): boolean;
    clearViolationMessage(): void;
    getViolationMessage(): string | undefined;
    setViolationMessage(value: string): FeatureRequirement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureRequirement.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureRequirement): FeatureRequirement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureRequirement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureRequirement;
    static deserializeBinaryFromReader(message: FeatureRequirement, reader: jspb.BinaryReader): FeatureRequirement;
}

export namespace FeatureRequirement {
    export type AsObject = {
        name: string,
        value?: kurrentdb_protocols_v2_core_pb.DynamicValue.AsObject,
        policyStatus: PolicyStatus,
        description?: string,
        violationMessage?: string,
    }
}

export enum PolicyStatus {
    OPTIONAL = 0,
    REQUIRED = 3,
    PROHIBITED = 4,
}
