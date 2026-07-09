// package: kurrentdb.protocol.registry.v2
// file: kurrentdb/protocols/v2/registry/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v2_registry_service_pb from "../../../../kurrentdb/protocols/v2/registry/service_pb";
import * as kurrentdb_protocols_v2_registry_groups_pb from "../../../../kurrentdb/protocols/v2/registry/groups_pb";
import * as kurrentdb_protocols_v2_registry_schemas_pb from "../../../../kurrentdb/protocols/v2/registry/schemas_pb";
import * as kurrentdb_protocols_v2_registry_validation_pb from "../../../../kurrentdb/protocols/v2/registry/validation_pb";

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

interface ISchemaRegistryServiceService_ICreateSchemaGroup extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest, kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/CreateSchemaGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse>;
}
interface ISchemaRegistryServiceService_IUpdateSchemaGroup extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest, kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/UpdateSchemaGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse>;
}
interface ISchemaRegistryServiceService_IDeleteSchemaGroup extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest, kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/DeleteSchemaGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse>;
}
interface ISchemaRegistryServiceService_IGetSchemaGroup extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest, kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchemaGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse>;
}
interface ISchemaRegistryServiceService_IListSchemaGroups extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest, kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListSchemaGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse>;
}
interface ISchemaRegistryServiceService_ICreateSchema extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest, kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/CreateSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse>;
}
interface ISchemaRegistryServiceService_IUpdateSchema extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest, kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/UpdateSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse>;
}
interface ISchemaRegistryServiceService_IDeleteSchema extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest, kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/DeleteSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse>;
}
interface ISchemaRegistryServiceService_IGetSchema extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest, kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse>;
}
interface ISchemaRegistryServiceService_IListSchemas extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest, kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListSchemas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse>;
}
interface ISchemaRegistryServiceService_ILookupSchemaName extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest, kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/LookupSchemaName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse>;
}
interface ISchemaRegistryServiceService_IRegisterSchemaVersion extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest, kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/RegisterSchemaVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse>;
}
interface ISchemaRegistryServiceService_IDeleteSchemaVersions extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest, kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/DeleteSchemaVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse>;
}
interface ISchemaRegistryServiceService_IGetSchemaVersion extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest, kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchemaVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse>;
}
interface ISchemaRegistryServiceService_IGetSchemaVersionById extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest, kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchemaVersionById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse>;
}
interface ISchemaRegistryServiceService_IListSchemaVersions extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest, kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListSchemaVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse>;
}
interface ISchemaRegistryServiceService_IListRegisteredSchemas extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest, kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListRegisteredSchemas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse>;
}
interface ISchemaRegistryServiceService_IBulkRegisterSchemas extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest, kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/BulkRegisterSchemas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse>;
}
interface ISchemaRegistryServiceService_ICheckSchemaCompatibility extends grpc.MethodDefinition<kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest, kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse> {
    path: "/kurrentdb.protocol.registry.v2.SchemaRegistryService/CheckSchemaCompatibility";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse>;
}

export const SchemaRegistryServiceService: ISchemaRegistryServiceService;

export interface ISchemaRegistryServiceServer extends grpc.UntypedServiceImplementation {
    createSchemaGroup: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest, kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse>;
    updateSchemaGroup: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest, kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse>;
    deleteSchemaGroup: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest, kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse>;
    getSchemaGroup: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest, kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse>;
    listSchemaGroups: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest, kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse>;
    createSchema: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest, kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse>;
    updateSchema: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest, kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse>;
    deleteSchema: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest, kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse>;
    getSchema: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest, kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse>;
    listSchemas: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest, kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse>;
    lookupSchemaName: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest, kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse>;
    registerSchemaVersion: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest, kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse>;
    deleteSchemaVersions: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest, kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse>;
    getSchemaVersion: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest, kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse>;
    getSchemaVersionById: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest, kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse>;
    listSchemaVersions: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest, kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse>;
    listRegisteredSchemas: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest, kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse>;
    bulkRegisterSchemas: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest, kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse>;
    checkSchemaCompatibility: grpc.handleUnaryCall<kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest, kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse>;
}

export interface ISchemaRegistryServiceClient {
    createSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    createSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    createSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    updateSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    updateSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    updateSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    getSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    getSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    getSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    listSchemaGroups(request: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    listSchemaGroups(request: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    listSchemaGroups(request: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    createSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    createSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    createSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    updateSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    updateSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    updateSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    listSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    listSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    listSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    lookupSchemaName(request: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    lookupSchemaName(request: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    lookupSchemaName(request: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    registerSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    registerSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    registerSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    deleteSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersionById(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersionById(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    getSchemaVersionById(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    listSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    listSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    listSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    listRegisteredSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    listRegisteredSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    listRegisteredSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    bulkRegisterSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    bulkRegisterSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    bulkRegisterSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    checkSchemaCompatibility(request: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
    checkSchemaCompatibility(request: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
    checkSchemaCompatibility(request: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
}

export class SchemaRegistryServiceClient extends grpc.Client implements ISchemaRegistryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public createSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public createSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public updateSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public updateSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public updateSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public getSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public getSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public getSchemaGroup(request: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse) => void): grpc.ClientUnaryCall;
    public listSchemaGroups(request: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    public listSchemaGroups(request: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    public listSchemaGroups(request: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse) => void): grpc.ClientUnaryCall;
    public createSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    public createSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    public createSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse) => void): grpc.ClientUnaryCall;
    public updateSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    public updateSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    public updateSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public listSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    public listSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    public listSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse) => void): grpc.ClientUnaryCall;
    public lookupSchemaName(request: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    public lookupSchemaName(request: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    public lookupSchemaName(request: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse) => void): grpc.ClientUnaryCall;
    public registerSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public registerSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public registerSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public deleteSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersion(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersionById(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersionById(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    public getSchemaVersionById(request: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse) => void): grpc.ClientUnaryCall;
    public listSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public listSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public listSchemaVersions(request: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse) => void): grpc.ClientUnaryCall;
    public listRegisteredSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    public listRegisteredSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    public listRegisteredSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse) => void): grpc.ClientUnaryCall;
    public bulkRegisterSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    public bulkRegisterSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    public bulkRegisterSchemas(request: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse) => void): grpc.ClientUnaryCall;
    public checkSchemaCompatibility(request: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
    public checkSchemaCompatibility(request: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
    public checkSchemaCompatibility(request: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse) => void): grpc.ClientUnaryCall;
}
