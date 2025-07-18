// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var kurrentdb_protocols_v2_features_service_pb = require('../../../../kurrentdb/protocols/v2/features/service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var kurrentdb_protocols_v2_core_pb = require('../../../../kurrentdb/protocols/v2/core_pb.js');

function serialize_kurrentdb_protocol_v2_ServerInfoRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.ServerInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_ServerInfoRequest(buffer_arg) {
  return kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_v2_ServerInfoResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.ServerInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_ServerInfoResponse(buffer_arg) {
  return kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Service for retrieving information about the server, including features
// and metadata.
var ServerInfoServiceService = exports.ServerInfoServiceService = {
  // Retrieves server information and available features
getServerInfo: {
    path: '/kurrentdb.protocol.v2.ServerInfoService/GetServerInfo',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest,
    responseType: kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse,
    requestSerialize: serialize_kurrentdb_protocol_v2_ServerInfoRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_v2_ServerInfoRequest,
    responseSerialize: serialize_kurrentdb_protocol_v2_ServerInfoResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_v2_ServerInfoResponse,
  },
};

exports.ServerInfoServiceClient = grpc.makeGenericClientConstructor(ServerInfoServiceService, 'ServerInfoService');
