// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ******************************************************************************************
// This protocol is UNSTABLE in the sense of being subject to change.
// ******************************************************************************************
//
'use strict';
var grpc = require('@grpc/grpc-js');
var kurrentdb_protocols_v2_streams_streams_pb = require('../../../../kurrentdb/protocols/v2/streams/streams_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_kurrentdb_protocol_v2_streams_AppendRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_streams_streams_pb.AppendRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.streams.AppendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_streams_AppendRequest(buffer_arg) {
  return kurrentdb_protocols_v2_streams_streams_pb.AppendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_v2_streams_AppendResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_streams_streams_pb.AppendResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.streams.AppendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_streams_AppendResponse(buffer_arg) {
  return kurrentdb_protocols_v2_streams_streams_pb.AppendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_v2_streams_AppendSessionResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.streams.AppendSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_streams_AppendSessionResponse(buffer_arg) {
  return kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StreamsServiceService = exports.StreamsServiceService = {
  // Executes an atomic operation to append records to multiple streams.
// This transactional method ensures that all appends either succeed
// completely, or are entirely rolled back, thereby maintaining strict
// data consistency across all involved streams.
append: {
    path: '/kurrentdb.protocol.v2.streams.StreamsService/Append',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_streams_streams_pb.AppendRequest,
    responseType: kurrentdb_protocols_v2_streams_streams_pb.AppendResponse,
    requestSerialize: serialize_kurrentdb_protocol_v2_streams_AppendRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_v2_streams_AppendRequest,
    responseSerialize: serialize_kurrentdb_protocol_v2_streams_AppendResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_v2_streams_AppendResponse,
  },
  // Streaming version of Append that allows clients to send multiple
// append requests continuously. Once completed, all records are
// appended transactionally (all succeed or fail together).
// Provides improved efficiency for high-throughput scenarios while
// maintaining the same transactional guarantees.
appendSession: {
    path: '/kurrentdb.protocol.v2.streams.StreamsService/AppendSession',
    requestStream: true,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_streams_streams_pb.AppendRequest,
    responseType: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse,
    requestSerialize: serialize_kurrentdb_protocol_v2_streams_AppendRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_v2_streams_AppendRequest,
    responseSerialize: serialize_kurrentdb_protocol_v2_streams_AppendSessionResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_v2_streams_AppendSessionResponse,
  },
};

exports.StreamsServiceClient = grpc.makeGenericClientConstructor(StreamsServiceService, 'StreamsService');
