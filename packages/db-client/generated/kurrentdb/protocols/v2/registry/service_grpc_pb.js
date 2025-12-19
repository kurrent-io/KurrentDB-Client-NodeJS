// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var kurrentdb_protocols_v2_registry_groups_pb = require('../../../../kurrentdb/protocols/v2/registry/groups_pb.js');
var kurrentdb_protocols_v2_registry_schemas_pb = require('../../../../kurrentdb/protocols/v2/registry/schemas_pb.js');
var kurrentdb_protocols_v2_registry_validation_pb = require('../../../../kurrentdb/protocols/v2/registry/validation_pb.js');

function serialize_kurrentdb_protocol_registry_v2_BulkRegisterSchemasRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.BulkRegisterSchemasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_BulkRegisterSchemasRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_BulkRegisterSchemasResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.BulkRegisterSchemasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_BulkRegisterSchemasResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_CheckSchemaCompatibilityRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.CheckSchemaCompatibilityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_CheckSchemaCompatibilityRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_CheckSchemaCompatibilityResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.CheckSchemaCompatibilityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_CheckSchemaCompatibilityResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_CreateSchemaGroupRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.CreateSchemaGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_CreateSchemaGroupRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_CreateSchemaGroupResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.CreateSchemaGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_CreateSchemaGroupResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_CreateSchemaRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.CreateSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_CreateSchemaRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_CreateSchemaResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.CreateSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_CreateSchemaResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_DeleteSchemaGroupRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.DeleteSchemaGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaGroupRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_DeleteSchemaGroupResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.DeleteSchemaGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaGroupResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_DeleteSchemaRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.DeleteSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_DeleteSchemaResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.DeleteSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_DeleteSchemaVersionsRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.DeleteSchemaVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaVersionsRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_DeleteSchemaVersionsResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.DeleteSchemaVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaVersionsResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_GetSchemaGroupRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.GetSchemaGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_GetSchemaGroupRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_GetSchemaGroupResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.GetSchemaGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_GetSchemaGroupResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_GetSchemaRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.GetSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_GetSchemaRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_GetSchemaResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.GetSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_GetSchemaResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_GetSchemaVersionByIdRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.GetSchemaVersionByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_GetSchemaVersionByIdRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_GetSchemaVersionByIdResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.GetSchemaVersionByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_GetSchemaVersionByIdResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_GetSchemaVersionRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.GetSchemaVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_GetSchemaVersionRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_GetSchemaVersionResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.GetSchemaVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_GetSchemaVersionResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_ListRegisteredSchemasRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.ListRegisteredSchemasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_ListRegisteredSchemasRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_ListRegisteredSchemasResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.ListRegisteredSchemasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_ListRegisteredSchemasResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_ListSchemaGroupsRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.ListSchemaGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_ListSchemaGroupsRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_ListSchemaGroupsResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.ListSchemaGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_ListSchemaGroupsResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_ListSchemaVersionsRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.ListSchemaVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_ListSchemaVersionsRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_ListSchemaVersionsResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.ListSchemaVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_ListSchemaVersionsResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_ListSchemasRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.ListSchemasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_ListSchemasRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_ListSchemasResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.ListSchemasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_ListSchemasResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_LookupSchemaNameRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.LookupSchemaNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_LookupSchemaNameRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_LookupSchemaNameResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.LookupSchemaNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_LookupSchemaNameResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_RegisterSchemaVersionRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.RegisterSchemaVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_RegisterSchemaVersionRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_RegisterSchemaVersionResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.RegisterSchemaVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_RegisterSchemaVersionResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_UpdateSchemaGroupRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.UpdateSchemaGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_UpdateSchemaGroupRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_UpdateSchemaGroupResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.UpdateSchemaGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_UpdateSchemaGroupResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_UpdateSchemaRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.UpdateSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_UpdateSchemaRequest(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_registry_v2_UpdateSchemaResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.registry.v2.UpdateSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_registry_v2_UpdateSchemaResponse(buffer_arg) {
  return kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SchemaRegistryServiceService = exports.SchemaRegistryServiceService = {
  createSchemaGroup: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/CreateSchemaGroup',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupRequest,
    responseType: kurrentdb_protocols_v2_registry_groups_pb.CreateSchemaGroupResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_CreateSchemaGroupRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_CreateSchemaGroupRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_CreateSchemaGroupResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_CreateSchemaGroupResponse,
  },
  updateSchemaGroup: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/UpdateSchemaGroup',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupRequest,
    responseType: kurrentdb_protocols_v2_registry_groups_pb.UpdateSchemaGroupResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_UpdateSchemaGroupRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_UpdateSchemaGroupRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_UpdateSchemaGroupResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_UpdateSchemaGroupResponse,
  },
  deleteSchemaGroup: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/DeleteSchemaGroup',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupRequest,
    responseType: kurrentdb_protocols_v2_registry_groups_pb.DeleteSchemaGroupResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_DeleteSchemaGroupRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaGroupRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_DeleteSchemaGroupResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaGroupResponse,
  },
  getSchemaGroup: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchemaGroup',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupRequest,
    responseType: kurrentdb_protocols_v2_registry_groups_pb.GetSchemaGroupResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_GetSchemaGroupRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_GetSchemaGroupRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_GetSchemaGroupResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_GetSchemaGroupResponse,
  },
  listSchemaGroups: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListSchemaGroups',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsRequest,
    responseType: kurrentdb_protocols_v2_registry_groups_pb.ListSchemaGroupsResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_ListSchemaGroupsRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_ListSchemaGroupsRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_ListSchemaGroupsResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_ListSchemaGroupsResponse,
  },
  // ===================================================================
// Schema Management
// ===================================================================
//
createSchema: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/CreateSchema',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.CreateSchemaResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_CreateSchemaRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_CreateSchemaRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_CreateSchemaResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_CreateSchemaResponse,
  },
  // produce
updateSchema: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/UpdateSchema',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.UpdateSchemaResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_UpdateSchemaRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_UpdateSchemaRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_UpdateSchemaResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_UpdateSchemaResponse,
  },
  deleteSchema: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/DeleteSchema',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_DeleteSchemaRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_DeleteSchemaResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaResponse,
  },
  getSchema: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_GetSchemaRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_GetSchemaRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_GetSchemaResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_GetSchemaResponse,
  },
  listSchemas: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListSchemas',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemasResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_ListSchemasRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_ListSchemasRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_ListSchemasResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_ListSchemasResponse,
  },
  lookupSchemaName: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/LookupSchemaName',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.LookupSchemaNameResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_LookupSchemaNameRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_LookupSchemaNameRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_LookupSchemaNameResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_LookupSchemaNameResponse,
  },
  registerSchemaVersion: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/RegisterSchemaVersion',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.RegisterSchemaVersionResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_RegisterSchemaVersionRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_RegisterSchemaVersionRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_RegisterSchemaVersionResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_RegisterSchemaVersionResponse,
  },
  deleteSchemaVersions: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/DeleteSchemaVersions',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.DeleteSchemaVersionsResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_DeleteSchemaVersionsRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaVersionsRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_DeleteSchemaVersionsResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_DeleteSchemaVersionsResponse,
  },
  getSchemaVersion: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchemaVersion',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_GetSchemaVersionRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_GetSchemaVersionRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_GetSchemaVersionResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_GetSchemaVersionResponse,
  },
  // produce
getSchemaVersionById: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/GetSchemaVersionById',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.GetSchemaVersionByIdResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_GetSchemaVersionByIdRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_GetSchemaVersionByIdRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_GetSchemaVersionByIdResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_GetSchemaVersionByIdResponse,
  },
  listSchemaVersions: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListSchemaVersions',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.ListSchemaVersionsResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_ListSchemaVersionsRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_ListSchemaVersionsRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_ListSchemaVersionsResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_ListSchemaVersionsResponse,
  },
  listRegisteredSchemas: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/ListRegisteredSchemas',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.ListRegisteredSchemasResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_ListRegisteredSchemasRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_ListRegisteredSchemasRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_ListRegisteredSchemasResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_ListRegisteredSchemasResponse,
  },
  bulkRegisterSchemas: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/BulkRegisterSchemas',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasRequest,
    responseType: kurrentdb_protocols_v2_registry_schemas_pb.BulkRegisterSchemasResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_BulkRegisterSchemasRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_BulkRegisterSchemasRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_BulkRegisterSchemasResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_BulkRegisterSchemasResponse,
  },
  // ===================================================================
// Schema Compatibility & Validation
// ===================================================================
//
checkSchemaCompatibility: {
    path: '/kurrentdb.protocol.registry.v2.SchemaRegistryService/CheckSchemaCompatibility',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityRequest,
    responseType: kurrentdb_protocols_v2_registry_validation_pb.CheckSchemaCompatibilityResponse,
    requestSerialize: serialize_kurrentdb_protocol_registry_v2_CheckSchemaCompatibilityRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_registry_v2_CheckSchemaCompatibilityRequest,
    responseSerialize: serialize_kurrentdb_protocol_registry_v2_CheckSchemaCompatibilityResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_registry_v2_CheckSchemaCompatibilityResponse,
  },
  // consume
};

exports.SchemaRegistryServiceClient = grpc.makeGenericClientConstructor(SchemaRegistryServiceService, 'SchemaRegistryService');
// ===================================================================
// Schema Group Management
// ===================================================================
