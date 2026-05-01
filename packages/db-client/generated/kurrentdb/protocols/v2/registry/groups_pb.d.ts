// package: kurrentdb.protocol.registry.v2
// file: kurrentdb/protocols/v2/registry/groups.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as kurrentdb_protocols_v2_registry_shared_pb from "../../../../kurrentdb/protocols/v2/registry/shared_pb";

export class AutoRegistrationSettings extends jspb.Message { 
    getEnabled(): boolean;
    setEnabled(value: boolean): AutoRegistrationSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutoRegistrationSettings.AsObject;
    static toObject(includeInstance: boolean, msg: AutoRegistrationSettings): AutoRegistrationSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutoRegistrationSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutoRegistrationSettings;
    static deserializeBinaryFromReader(message: AutoRegistrationSettings, reader: jspb.BinaryReader): AutoRegistrationSettings;
}

export namespace AutoRegistrationSettings {
    export type AsObject = {
        enabled: boolean,
    }
}

export class ValidationSettings extends jspb.Message { 
    getEnabled(): boolean;
    setEnabled(value: boolean): ValidationSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidationSettings.AsObject;
    static toObject(includeInstance: boolean, msg: ValidationSettings): ValidationSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidationSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidationSettings;
    static deserializeBinaryFromReader(message: ValidationSettings, reader: jspb.BinaryReader): ValidationSettings;
}

export namespace ValidationSettings {
    export type AsObject = {
        enabled: boolean,
    }
}

export class CompatibilitySettings extends jspb.Message { 
    getEnforce(): boolean;
    setEnforce(value: boolean): CompatibilitySettings;
    getMode(): kurrentdb_protocols_v2_registry_shared_pb.CompatibilityMode;
    setMode(value: kurrentdb_protocols_v2_registry_shared_pb.CompatibilityMode): CompatibilitySettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompatibilitySettings.AsObject;
    static toObject(includeInstance: boolean, msg: CompatibilitySettings): CompatibilitySettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompatibilitySettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompatibilitySettings;
    static deserializeBinaryFromReader(message: CompatibilitySettings, reader: jspb.BinaryReader): CompatibilitySettings;
}

export namespace CompatibilitySettings {
    export type AsObject = {
        enforce: boolean,
        mode: kurrentdb_protocols_v2_registry_shared_pb.CompatibilityMode,
    }
}

export class DataFormatSettings extends jspb.Message { 
    getEnforce(): boolean;
    setEnforce(value: boolean): DataFormatSettings;
    getFormat(): kurrentdb_protocols_v2_registry_shared_pb.SchemaDataFormat;
    setFormat(value: kurrentdb_protocols_v2_registry_shared_pb.SchemaDataFormat): DataFormatSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataFormatSettings.AsObject;
    static toObject(includeInstance: boolean, msg: DataFormatSettings): DataFormatSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataFormatSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataFormatSettings;
    static deserializeBinaryFromReader(message: DataFormatSettings, reader: jspb.BinaryReader): DataFormatSettings;
}

export namespace DataFormatSettings {
    export type AsObject = {
        enforce: boolean,
        format: kurrentdb_protocols_v2_registry_shared_pb.SchemaDataFormat,
    }
}

export class StreamFilter extends jspb.Message { 
    getFilterType(): StreamFilterType;
    setFilterType(value: StreamFilterType): StreamFilter;
    getExpression(): string;
    setExpression(value: string): StreamFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamFilter.AsObject;
    static toObject(includeInstance: boolean, msg: StreamFilter): StreamFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamFilter;
    static deserializeBinaryFromReader(message: StreamFilter, reader: jspb.BinaryReader): StreamFilter;
}

export namespace StreamFilter {
    export type AsObject = {
        filterType: StreamFilterType,
        expression: string,
    }
}

export class StreamFilterSettings extends jspb.Message { 
    getEnforce(): boolean;
    setEnforce(value: boolean): StreamFilterSettings;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): StreamFilter | undefined;
    setFilter(value?: StreamFilter): StreamFilterSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamFilterSettings.AsObject;
    static toObject(includeInstance: boolean, msg: StreamFilterSettings): StreamFilterSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamFilterSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamFilterSettings;
    static deserializeBinaryFromReader(message: StreamFilterSettings, reader: jspb.BinaryReader): StreamFilterSettings;
}

export namespace StreamFilterSettings {
    export type AsObject = {
        enforce: boolean,
        filter?: StreamFilter.AsObject,
    }
}

export class SchemaGroupDetails extends jspb.Message { 
    getName(): string;
    setName(value: string): SchemaGroupDetails;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): SchemaGroupDetails;

    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;

    hasAutoRegistration(): boolean;
    clearAutoRegistration(): void;
    getAutoRegistration(): AutoRegistrationSettings | undefined;
    setAutoRegistration(value?: AutoRegistrationSettings): SchemaGroupDetails;

    hasValidation(): boolean;
    clearValidation(): void;
    getValidation(): ValidationSettings | undefined;
    setValidation(value?: ValidationSettings): SchemaGroupDetails;

    hasCompatibility(): boolean;
    clearCompatibility(): void;
    getCompatibility(): CompatibilitySettings | undefined;
    setCompatibility(value?: CompatibilitySettings): SchemaGroupDetails;

    hasDataFormat(): boolean;
    clearDataFormat(): void;
    getDataFormat(): DataFormatSettings | undefined;
    setDataFormat(value?: DataFormatSettings): SchemaGroupDetails;

    hasStreamFilter(): boolean;
    clearStreamFilter(): void;
    getStreamFilter(): StreamFilterSettings | undefined;
    setStreamFilter(value?: StreamFilterSettings): SchemaGroupDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaGroupDetails.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaGroupDetails): SchemaGroupDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaGroupDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaGroupDetails;
    static deserializeBinaryFromReader(message: SchemaGroupDetails, reader: jspb.BinaryReader): SchemaGroupDetails;
}

export namespace SchemaGroupDetails {
    export type AsObject = {
        name: string,
        description?: string,

        tagsMap: Array<[string, string]>,
        autoRegistration?: AutoRegistrationSettings.AsObject,
        validation?: ValidationSettings.AsObject,
        compatibility?: CompatibilitySettings.AsObject,
        dataFormat?: DataFormatSettings.AsObject,
        streamFilter?: StreamFilterSettings.AsObject,
    }
}

export class SchemaGroup extends jspb.Message { 
    getGroupId(): string;
    setGroupId(value: string): SchemaGroup;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): SchemaGroupDetails | undefined;
    setDetails(value?: SchemaGroupDetails): SchemaGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaGroup;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchemaGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchemaGroup.AsObject;
    static toObject(includeInstance: boolean, msg: SchemaGroup): SchemaGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchemaGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchemaGroup;
    static deserializeBinaryFromReader(message: SchemaGroup, reader: jspb.BinaryReader): SchemaGroup;
}

export namespace SchemaGroup {
    export type AsObject = {
        groupId: string,
        details?: SchemaGroupDetails.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateSchemaGroupRequest extends jspb.Message { 

    hasGroupId(): boolean;
    clearGroupId(): void;
    getGroupId(): string | undefined;
    setGroupId(value: string): CreateSchemaGroupRequest;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): SchemaGroupDetails | undefined;
    setDetails(value?: SchemaGroupDetails): CreateSchemaGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSchemaGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSchemaGroupRequest): CreateSchemaGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSchemaGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSchemaGroupRequest;
    static deserializeBinaryFromReader(message: CreateSchemaGroupRequest, reader: jspb.BinaryReader): CreateSchemaGroupRequest;
}

export namespace CreateSchemaGroupRequest {
    export type AsObject = {
        groupId?: string,
        details?: SchemaGroupDetails.AsObject,
    }
}

export class CreateSchemaGroupResponse extends jspb.Message { 
    getGroupId(): string;
    setGroupId(value: string): CreateSchemaGroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSchemaGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSchemaGroupResponse): CreateSchemaGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSchemaGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSchemaGroupResponse;
    static deserializeBinaryFromReader(message: CreateSchemaGroupResponse, reader: jspb.BinaryReader): CreateSchemaGroupResponse;
}

export namespace CreateSchemaGroupResponse {
    export type AsObject = {
        groupId: string,
    }
}

export class UpdateSchemaGroupRequest extends jspb.Message { 
    getGroupId(): string;
    setGroupId(value: string): UpdateSchemaGroupRequest;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): SchemaGroupDetails | undefined;
    setDetails(value?: SchemaGroupDetails): UpdateSchemaGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSchemaGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSchemaGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSchemaGroupRequest): UpdateSchemaGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSchemaGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSchemaGroupRequest;
    static deserializeBinaryFromReader(message: UpdateSchemaGroupRequest, reader: jspb.BinaryReader): UpdateSchemaGroupRequest;
}

export namespace UpdateSchemaGroupRequest {
    export type AsObject = {
        groupId: string,
        details?: SchemaGroupDetails.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateSchemaGroupResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSchemaGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSchemaGroupResponse): UpdateSchemaGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSchemaGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSchemaGroupResponse;
    static deserializeBinaryFromReader(message: UpdateSchemaGroupResponse, reader: jspb.BinaryReader): UpdateSchemaGroupResponse;
}

export namespace UpdateSchemaGroupResponse {
    export type AsObject = {
    }
}

export class DeleteSchemaGroupRequest extends jspb.Message { 
    getGroupId(): string;
    setGroupId(value: string): DeleteSchemaGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSchemaGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSchemaGroupRequest): DeleteSchemaGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSchemaGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSchemaGroupRequest;
    static deserializeBinaryFromReader(message: DeleteSchemaGroupRequest, reader: jspb.BinaryReader): DeleteSchemaGroupRequest;
}

export namespace DeleteSchemaGroupRequest {
    export type AsObject = {
        groupId: string,
    }
}

export class DeleteSchemaGroupResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSchemaGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSchemaGroupResponse): DeleteSchemaGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSchemaGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSchemaGroupResponse;
    static deserializeBinaryFromReader(message: DeleteSchemaGroupResponse, reader: jspb.BinaryReader): DeleteSchemaGroupResponse;
}

export namespace DeleteSchemaGroupResponse {
    export type AsObject = {
    }
}

export class GetSchemaGroupRequest extends jspb.Message { 
    getGroupId(): string;
    setGroupId(value: string): GetSchemaGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaGroupRequest): GetSchemaGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaGroupRequest;
    static deserializeBinaryFromReader(message: GetSchemaGroupRequest, reader: jspb.BinaryReader): GetSchemaGroupRequest;
}

export namespace GetSchemaGroupRequest {
    export type AsObject = {
        groupId: string,
    }
}

export class GetSchemaGroupResponse extends jspb.Message { 

    hasGroup(): boolean;
    clearGroup(): void;
    getGroup(): SchemaGroup | undefined;
    setGroup(value?: SchemaGroup): GetSchemaGroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaGroupResponse): GetSchemaGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaGroupResponse;
    static deserializeBinaryFromReader(message: GetSchemaGroupResponse, reader: jspb.BinaryReader): GetSchemaGroupResponse;
}

export namespace GetSchemaGroupResponse {
    export type AsObject = {
        group?: SchemaGroup.AsObject,
    }
}

export class ListSchemaGroupsRequest extends jspb.Message { 

    hasGroupNamePrefix(): boolean;
    clearGroupNamePrefix(): void;
    getGroupNamePrefix(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGroupNamePrefix(value?: google_protobuf_wrappers_pb.StringValue): ListSchemaGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSchemaGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSchemaGroupsRequest): ListSchemaGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSchemaGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSchemaGroupsRequest;
    static deserializeBinaryFromReader(message: ListSchemaGroupsRequest, reader: jspb.BinaryReader): ListSchemaGroupsRequest;
}

export namespace ListSchemaGroupsRequest {
    export type AsObject = {
        groupNamePrefix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ListSchemaGroupsResponse extends jspb.Message { 
    clearGroupsList(): void;
    getGroupsList(): Array<SchemaGroup>;
    setGroupsList(value: Array<SchemaGroup>): ListSchemaGroupsResponse;
    addGroups(value?: SchemaGroup, index?: number): SchemaGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSchemaGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSchemaGroupsResponse): ListSchemaGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSchemaGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSchemaGroupsResponse;
    static deserializeBinaryFromReader(message: ListSchemaGroupsResponse, reader: jspb.BinaryReader): ListSchemaGroupsResponse;
}

export namespace ListSchemaGroupsResponse {
    export type AsObject = {
        groupsList: Array<SchemaGroup.AsObject>,
    }
}

export enum StreamFilterType {
    CONSUME_FILTER_TYPE_UNSPECIFIED = 0,
    CONSUME_FILTER_TYPE_REGEX = 1,
    CONSUME_FILTER_TYPE_CATEGORY = 2,
}
