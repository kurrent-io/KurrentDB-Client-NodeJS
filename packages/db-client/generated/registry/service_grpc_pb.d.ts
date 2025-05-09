// package: kurrentdb.protocol.registry.v2
// file: registry/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as registry_service_pb from "../registry/service_pb";
import * as registry_groups_pb from "../registry/groups_pb";
import * as registry_schemas_pb from "../registry/schemas_pb";
import * as registry_validation_pb from "../registry/validation_pb";

interface ISchemaRegistryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createSchemaGroup: ISchemaRegistryServiceService_ICreateSchemaGroup;
    updateSchemaGroup: ISchemaRegistryServiceService_IUpdateSchemaGroup;
    deleteSchemaGroup: ISchemaRegistryServiceService_IDeleteSchemaGroup;
    getSchemaGroup: ISchemaRegistryServiceService_IGetSchemaGroup;
    listSchemaGroups: ISchemaRegistryServiceService_IListSchemaGroups;
    createSchema: ISchemaRegistryServiceService_ICreateSchema;
    updateSchema: ISchemaRegistryServiceService_IUpdateSchema;
    deleteSchema: ISchemaRegistryServiceService_IDeleteSchema;
    getSchema: ISchemaRegistryServiceService_IGetSchema;
    listSchemas: ISchemaRegistryServiceService_IListSchemas;
    lookupSchemaName: ISchemaRegistryServiceService_ILookupSchemaName;
    registerSchemaVersion: ISchemaRegistryServiceService_IRegisterSchemaVersion;
    deleteSchemaVersions: ISchemaRegistryServiceService_IDeleteSchemaVersions;
    getSchemaVersion: ISchemaRegistryServiceService_IGetSchemaVersion;
    getSchemaVersionById: ISchemaRegistryServiceService_IGetSchemaVersionById;
    listSchemaVersions: ISchemaRegistryServiceService_IListSchemaVersions;
    listRegisteredSchemas: ISchemaRegistryServiceService_IListRegisteredSchemas;
    bulkRegisterSchemas: ISchemaRegistryServiceService_IBulkRegisterSchemas;
    checkSchemaCompatibility: ISchemaRegistryServiceService_ICheckSchemaCompatibility;
}

interface ISchemaRegistryServiceService_ICreateSchemaGroup extends grpc.MethodDefinition<registry_groups_pb.CreateSchemaGroupRequest, registry_groups_pb.CreateSchemaGroupResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/CreateSchemaGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_groups_pb.CreateSchemaGroupRequest>;
    requestDeserialize: grpc.deserialize<registry_groups_pb.CreateSchemaGroupRequest>;
    responseSerialize: grpc.serialize<registry_groups_pb.CreateSchemaGroupResponse>;
    responseDeserialize: grpc.deserialize<registry_groups_pb.CreateSchemaGroupResponse>;
}
interface ISchemaRegistryServiceService_IUpdateSchemaGroup extends grpc.MethodDefinition<registry_groups_pb.UpdateSchemaGroupRequest, registry_groups_pb.UpdateSchemaGroupResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/UpdateSchemaGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_groups_pb.UpdateSchemaGroupRequest>;
    requestDeserialize: grpc.deserialize<registry_groups_pb.UpdateSchemaGroupRequest>;
    responseSerialize: grpc.serialize<registry_groups_pb.UpdateSchemaGroupResponse>;
    responseDeserialize: grpc.deserialize<registry_groups_pb.UpdateSchemaGroupResponse>;
}
interface ISchemaRegistryServiceService_IDeleteSchemaGroup extends grpc.MethodDefinition<registry_groups_pb.DeleteSchemaGroupRequest, registry_groups_pb.DeleteSchemaGroupResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/DeleteSchemaGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_groups_pb.DeleteSchemaGroupRequest>;
    requestDeserialize: grpc.deserialize<registry_groups_pb.DeleteSchemaGroupRequest>;
    responseSerialize: grpc.serialize<registry_groups_pb.DeleteSchemaGroupResponse>;
    responseDeserialize: grpc.deserialize<registry_groups_pb.DeleteSchemaGroupResponse>;
}
interface ISchemaRegistryServiceService_IGetSchemaGroup extends grpc.MethodDefinition<registry_groups_pb.GetSchemaGroupRequest, registry_groups_pb.GetSchemaGroupResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchemaGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_groups_pb.GetSchemaGroupRequest>;
    requestDeserialize: grpc.deserialize<registry_groups_pb.GetSchemaGroupRequest>;
    responseSerialize: grpc.serialize<registry_groups_pb.GetSchemaGroupResponse>;
    responseDeserialize: grpc.deserialize<registry_groups_pb.GetSchemaGroupResponse>;
}
interface ISchemaRegistryServiceService_IListSchemaGroups extends grpc.MethodDefinition<registry_groups_pb.ListSchemaGroupsRequest, registry_groups_pb.ListSchemaGroupsResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListSchemaGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_groups_pb.ListSchemaGroupsRequest>;
    requestDeserialize: grpc.deserialize<registry_groups_pb.ListSchemaGroupsRequest>;
    responseSerialize: grpc.serialize<registry_groups_pb.ListSchemaGroupsResponse>;
    responseDeserialize: grpc.deserialize<registry_groups_pb.ListSchemaGroupsResponse>;
}
interface ISchemaRegistryServiceService_ICreateSchema extends grpc.MethodDefinition<registry_schemas_pb.CreateSchemaRequest, registry_schemas_pb.CreateSchemaResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/CreateSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.CreateSchemaRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.CreateSchemaRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.CreateSchemaResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.CreateSchemaResponse>;
}
interface ISchemaRegistryServiceService_IUpdateSchema extends grpc.MethodDefinition<registry_schemas_pb.UpdateSchemaRequest, registry_schemas_pb.UpdateSchemaResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/UpdateSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.UpdateSchemaRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.UpdateSchemaRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.UpdateSchemaResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.UpdateSchemaResponse>;
}
interface ISchemaRegistryServiceService_IDeleteSchema extends grpc.MethodDefinition<registry_schemas_pb.DeleteSchemaRequest, registry_schemas_pb.DeleteSchemaResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/DeleteSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.DeleteSchemaRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.DeleteSchemaRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.DeleteSchemaResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.DeleteSchemaResponse>;
}
interface ISchemaRegistryServiceService_IGetSchema extends grpc.MethodDefinition<registry_schemas_pb.GetSchemaRequest, registry_schemas_pb.GetSchemaResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.GetSchemaRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.GetSchemaRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.GetSchemaResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.GetSchemaResponse>;
}
interface ISchemaRegistryServiceService_IListSchemas extends grpc.MethodDefinition<registry_schemas_pb.ListSchemasRequest, registry_schemas_pb.ListSchemasResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListSchemas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.ListSchemasRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.ListSchemasRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.ListSchemasResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.ListSchemasResponse>;
}
interface ISchemaRegistryServiceService_ILookupSchemaName extends grpc.MethodDefinition<registry_schemas_pb.LookupSchemaNameRequest, registry_schemas_pb.LookupSchemaNameResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/LookupSchemaName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.LookupSchemaNameRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.LookupSchemaNameRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.LookupSchemaNameResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.LookupSchemaNameResponse>;
}
interface ISchemaRegistryServiceService_IRegisterSchemaVersion extends grpc.MethodDefinition<registry_schemas_pb.RegisterSchemaVersionRequest, registry_schemas_pb.RegisterSchemaVersionResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/RegisterSchemaVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.RegisterSchemaVersionRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.RegisterSchemaVersionRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.RegisterSchemaVersionResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.RegisterSchemaVersionResponse>;
}
interface ISchemaRegistryServiceService_IDeleteSchemaVersions extends grpc.MethodDefinition<registry_schemas_pb.DeleteSchemaVersionsRequest, registry_schemas_pb.DeleteSchemaVersionsResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/DeleteSchemaVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.DeleteSchemaVersionsRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.DeleteSchemaVersionsRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.DeleteSchemaVersionsResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.DeleteSchemaVersionsResponse>;
}
interface ISchemaRegistryServiceService_IGetSchemaVersion extends grpc.MethodDefinition<registry_schemas_pb.GetSchemaVersionRequest, registry_schemas_pb.GetSchemaVersionResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchemaVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.GetSchemaVersionRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.GetSchemaVersionRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.GetSchemaVersionResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.GetSchemaVersionResponse>;
}
interface ISchemaRegistryServiceService_IGetSchemaVersionById extends grpc.MethodDefinition<registry_schemas_pb.GetSchemaVersionByIdRequest, registry_schemas_pb.GetSchemaVersionByIdResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchemaVersionById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.GetSchemaVersionByIdRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.GetSchemaVersionByIdRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.GetSchemaVersionByIdResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.GetSchemaVersionByIdResponse>;
}
interface ISchemaRegistryServiceService_IListSchemaVersions extends grpc.MethodDefinition<registry_schemas_pb.ListSchemaVersionsRequest, registry_schemas_pb.ListSchemaVersionsResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListSchemaVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.ListSchemaVersionsRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.ListSchemaVersionsRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.ListSchemaVersionsResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.ListSchemaVersionsResponse>;
}
interface ISchemaRegistryServiceService_IListRegisteredSchemas extends grpc.MethodDefinition<registry_schemas_pb.ListRegisteredSchemasRequest, registry_schemas_pb.ListRegisteredSchemasResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListRegisteredSchemas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.ListRegisteredSchemasRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.ListRegisteredSchemasRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.ListRegisteredSchemasResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.ListRegisteredSchemasResponse>;
}
interface ISchemaRegistryServiceService_IBulkRegisterSchemas extends grpc.MethodDefinition<registry_schemas_pb.BulkRegisterSchemasRequest, registry_schemas_pb.BulkRegisterSchemasResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/BulkRegisterSchemas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_schemas_pb.BulkRegisterSchemasRequest>;
    requestDeserialize: grpc.deserialize<registry_schemas_pb.BulkRegisterSchemasRequest>;
    responseSerialize: grpc.serialize<registry_schemas_pb.BulkRegisterSchemasResponse>;
    responseDeserialize: grpc.deserialize<registry_schemas_pb.BulkRegisterSchemasResponse>;
}
interface ISchemaRegistryServiceService_ICheckSchemaCompatibility extends grpc.MethodDefinition<registry_validation_pb.CheckSchemaCompatibilityRequest, registry_validation_pb.CheckSchemaCompatibilityResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/CheckSchemaCompatibility";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<registry_validation_pb.CheckSchemaCompatibilityRequest>;
    requestDeserialize: grpc.deserialize<registry_validation_pb.CheckSchemaCompatibilityRequest>;
    responseSerialize: grpc.serialize<registry_validation_pb.CheckSchemaCompatibilityResponse>;
    responseDeserialize: grpc.deserialize<registry_validation_pb.CheckSchemaCompatibilityResponse>;
}

export const SchemaRegistryServiceService: ISchemaRegistryServiceService;

export interface ISchemaRegistryServiceServer extends grpc.UntypedServiceImplementation {
    createSchemaGroup: grpc.handleUnaryCall<registry_groups_pb.CreateSchemaGroupRequest, registry_groups_pb.CreateSchemaGroupResponse>;
    updateSchemaGroup: grpc.handleUnaryCall<registry_groups_pb.UpdateSchemaGroupRequest, registry_groups_pb.UpdateSchemaGroupResponse>;
    deleteSchemaGroup: grpc.handleUnaryCall<registry_groups_pb.DeleteSchemaGroupRequest, registry_groups_pb.DeleteSchemaGroupResponse>;
    getSchemaGroup: grpc.handleUnaryCall<registry_groups_pb.GetSchemaGroupRequest, registry_groups_pb.GetSchemaGroupResponse>;
    listSchemaGroups: grpc.handleUnaryCall<registry_groups_pb.ListSchemaGroupsRequest, registry_groups_pb.ListSchemaGroupsResponse>;
    createSchema: grpc.handleUnaryCall<registry_schemas_pb.CreateSchemaRequest, registry_schemas_pb.CreateSchemaResponse>;
    updateSchema: grpc.handleUnaryCall<registry_schemas_pb.UpdateSchemaRequest, registry_schemas_pb.UpdateSchemaResponse>;
    deleteSchema: grpc.handleUnaryCall<registry_schemas_pb.DeleteSchemaRequest, registry_schemas_pb.DeleteSchemaResponse>;
    getSchema: grpc.handleUnaryCall<registry_schemas_pb.GetSchemaRequest, registry_schemas_pb.GetSchemaResponse>;
    listSchemas: grpc.handleUnaryCall<registry_schemas_pb.ListSchemasRequest, registry_schemas_pb.ListSchemasResponse>;
    lookupSchemaName: grpc.handleUnaryCall<registry_schemas_pb.LookupSchemaNameRequest, registry_schemas_pb.LookupSchemaNameResponse>;
    registerSchemaVersion: grpc.handleUnaryCall<registry_schemas_pb.RegisterSchemaVersionRequest, registry_schemas_pb.RegisterSchemaVersionResponse>;
    deleteSchemaVersions: grpc.handleUnaryCall<registry_schemas_pb.DeleteSchemaVersionsRequest, registry_schemas_pb.DeleteSchemaVersionsResponse>;
    getSchemaVersion: grpc.handleUnaryCall<registry_schemas_pb.GetSchemaVersionRequest, registry_schemas_pb.GetSchemaVersionResponse>;
    getSchemaVersionById: grpc.handleUnaryCall<registry_schemas_pb.GetSchemaVersionByIdRequest, registry_schemas_pb.GetSchemaVersionByIdResponse>;
    listSchemaVersions: grpc.handleUnaryCall<registry_schemas_pb.ListSchemaVersionsRequest, registry_schemas_pb.ListSchemaVersionsResponse>;
    listRegisteredSchemas: grpc.handleUnaryCall<registry_schemas_pb.ListRegisteredSchemasRequest, registry_schemas_pb.ListRegisteredSchemasResponse>;
    bulkRegisterSchemas: grpc.handleUnaryCall<registry_schemas_pb.BulkRegisterSchemasRequest, registry_schemas_pb.BulkRegisterSchemasResponse>;
    checkSchemaCompatibility: grpc.handleUnaryCall<registry_validation_pb.CheckSchemaCompatibilityRequest, registry_validation_pb.CheckSchemaCompatibilityResponse>;
}

export interface ISchemaRegistryServiceClient {
    createSchemaGroup(request: registry_groups_pb.CreateSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    createSchemaGroup(request: registry_groups_pb.CreateSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    createSchemaGroup(request: registry_groups_pb.CreateSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    updateSchemaGroup(request: registry_groups_pb.UpdateSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    updateSchemaGroup(request: registry_groups_pb.UpdateSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    updateSchemaGroup(request: registry_groups_pb.UpdateSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaGroup(request: registry_groups_pb.DeleteSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaGroup(request: registry_groups_pb.DeleteSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaGroup(request: registry_groups_pb.DeleteSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    getSchemaGroup(request: registry_groups_pb.GetSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    getSchemaGroup(request: registry_groups_pb.GetSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    getSchemaGroup(request: registry_groups_pb.GetSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    listSchemaGroups(request: registry_groups_pb.ListSchemaGroupsRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    listSchemaGroups(request: registry_groups_pb.ListSchemaGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    listSchemaGroups(request: registry_groups_pb.ListSchemaGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    createSchema(request: registry_schemas_pb.CreateSchemaRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    createSchema(request: registry_schemas_pb.CreateSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    createSchema(request: registry_schemas_pb.CreateSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    updateSchema(request: registry_schemas_pb.UpdateSchemaRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    updateSchema(request: registry_schemas_pb.UpdateSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    updateSchema(request: registry_schemas_pb.UpdateSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: registry_schemas_pb.DeleteSchemaRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: registry_schemas_pb.DeleteSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: registry_schemas_pb.DeleteSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: registry_schemas_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: registry_schemas_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: registry_schemas_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    listSchemas(request: registry_schemas_pb.ListSchemasRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    listSchemas(request: registry_schemas_pb.ListSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    listSchemas(request: registry_schemas_pb.ListSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    lookupSchemaName(request: registry_schemas_pb.LookupSchemaNameRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    lookupSchemaName(request: registry_schemas_pb.LookupSchemaNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    lookupSchemaName(request: registry_schemas_pb.LookupSchemaNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    registerSchemaVersion(request: registry_schemas_pb.RegisterSchemaVersionRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    registerSchemaVersion(request: registry_schemas_pb.RegisterSchemaVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    registerSchemaVersion(request: registry_schemas_pb.RegisterSchemaVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaVersions(request: registry_schemas_pb.DeleteSchemaVersionsRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaVersions(request: registry_schemas_pb.DeleteSchemaVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaVersions(request: registry_schemas_pb.DeleteSchemaVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersion(request: registry_schemas_pb.GetSchemaVersionRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersion(request: registry_schemas_pb.GetSchemaVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersion(request: registry_schemas_pb.GetSchemaVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersionById(request: registry_schemas_pb.GetSchemaVersionByIdRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersionById(request: registry_schemas_pb.GetSchemaVersionByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersionById(request: registry_schemas_pb.GetSchemaVersionByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    listSchemaVersions(request: registry_schemas_pb.ListSchemaVersionsRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    listSchemaVersions(request: registry_schemas_pb.ListSchemaVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    listSchemaVersions(request: registry_schemas_pb.ListSchemaVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    listRegisteredSchemas(request: registry_schemas_pb.ListRegisteredSchemasRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    listRegisteredSchemas(request: registry_schemas_pb.ListRegisteredSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    listRegisteredSchemas(request: registry_schemas_pb.ListRegisteredSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    bulkRegisterSchemas(request: registry_schemas_pb.BulkRegisterSchemasRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    bulkRegisterSchemas(request: registry_schemas_pb.BulkRegisterSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    bulkRegisterSchemas(request: registry_schemas_pb.BulkRegisterSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    checkSchemaCompatibility(request: registry_validation_pb.CheckSchemaCompatibilityRequest, callback: (error: grpc.ServiceError | null, response: registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
    checkSchemaCompatibility(request: registry_validation_pb.CheckSchemaCompatibilityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
    checkSchemaCompatibility(request: registry_validation_pb.CheckSchemaCompatibilityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
}

export class SchemaRegistryServiceClient extends grpc.Client implements ISchemaRegistryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createSchemaGroup(request: registry_groups_pb.CreateSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public createSchemaGroup(request: registry_groups_pb.CreateSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public createSchemaGroup(request: registry_groups_pb.CreateSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public updateSchemaGroup(request: registry_groups_pb.UpdateSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public updateSchemaGroup(request: registry_groups_pb.UpdateSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public updateSchemaGroup(request: registry_groups_pb.UpdateSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaGroup(request: registry_groups_pb.DeleteSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaGroup(request: registry_groups_pb.DeleteSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaGroup(request: registry_groups_pb.DeleteSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public getSchemaGroup(request: registry_groups_pb.GetSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public getSchemaGroup(request: registry_groups_pb.GetSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public getSchemaGroup(request: registry_groups_pb.GetSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public listSchemaGroups(request: registry_groups_pb.ListSchemaGroupsRequest, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    public listSchemaGroups(request: registry_groups_pb.ListSchemaGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    public listSchemaGroups(request: registry_groups_pb.ListSchemaGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    public createSchema(request: registry_schemas_pb.CreateSchemaRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    public createSchema(request: registry_schemas_pb.CreateSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    public createSchema(request: registry_schemas_pb.CreateSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    public updateSchema(request: registry_schemas_pb.UpdateSchemaRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    public updateSchema(request: registry_schemas_pb.UpdateSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    public updateSchema(request: registry_schemas_pb.UpdateSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: registry_schemas_pb.DeleteSchemaRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: registry_schemas_pb.DeleteSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: registry_schemas_pb.DeleteSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: registry_schemas_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: registry_schemas_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: registry_schemas_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public listSchemas(request: registry_schemas_pb.ListSchemasRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    public listSchemas(request: registry_schemas_pb.ListSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    public listSchemas(request: registry_schemas_pb.ListSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    public lookupSchemaName(request: registry_schemas_pb.LookupSchemaNameRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    public lookupSchemaName(request: registry_schemas_pb.LookupSchemaNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    public lookupSchemaName(request: registry_schemas_pb.LookupSchemaNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    public registerSchemaVersion(request: registry_schemas_pb.RegisterSchemaVersionRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public registerSchemaVersion(request: registry_schemas_pb.RegisterSchemaVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public registerSchemaVersion(request: registry_schemas_pb.RegisterSchemaVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaVersions(request: registry_schemas_pb.DeleteSchemaVersionsRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaVersions(request: registry_schemas_pb.DeleteSchemaVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaVersions(request: registry_schemas_pb.DeleteSchemaVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersion(request: registry_schemas_pb.GetSchemaVersionRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersion(request: registry_schemas_pb.GetSchemaVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersion(request: registry_schemas_pb.GetSchemaVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersionById(request: registry_schemas_pb.GetSchemaVersionByIdRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersionById(request: registry_schemas_pb.GetSchemaVersionByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersionById(request: registry_schemas_pb.GetSchemaVersionByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    public listSchemaVersions(request: registry_schemas_pb.ListSchemaVersionsRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public listSchemaVersions(request: registry_schemas_pb.ListSchemaVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public listSchemaVersions(request: registry_schemas_pb.ListSchemaVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public listRegisteredSchemas(request: registry_schemas_pb.ListRegisteredSchemasRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    public listRegisteredSchemas(request: registry_schemas_pb.ListRegisteredSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    public listRegisteredSchemas(request: registry_schemas_pb.ListRegisteredSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    public bulkRegisterSchemas(request: registry_schemas_pb.BulkRegisterSchemasRequest, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    public bulkRegisterSchemas(request: registry_schemas_pb.BulkRegisterSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    public bulkRegisterSchemas(request: registry_schemas_pb.BulkRegisterSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    public checkSchemaCompatibility(request: registry_validation_pb.CheckSchemaCompatibilityRequest, callback: (error: grpc.ServiceError | null, response: registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
    public checkSchemaCompatibility(request: registry_validation_pb.CheckSchemaCompatibilityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
    public checkSchemaCompatibility(request: registry_validation_pb.CheckSchemaCompatibilityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
}
