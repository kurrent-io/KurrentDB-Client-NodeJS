// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var streams_streams_pb = require('../streams/streams_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_kurrentdb_protocol_streams_v2_AppendStreamRequest(arg) {
  if (!(arg instanceof streams_streams_pb.AppendStreamRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.streams.v2.AppendStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_streams_v2_AppendStreamRequest(buffer_arg) {
  return streams_streams_pb.AppendStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_streams_v2_MultiStreamAppendRequest(arg) {
  if (!(arg instanceof streams_streams_pb.MultiStreamAppendRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.streams.v2.MultiStreamAppendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_streams_v2_MultiStreamAppendRequest(buffer_arg) {
  return streams_streams_pb.MultiStreamAppendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_streams_v2_MultiStreamAppendResponse(arg) {
  if (!(arg instanceof streams_streams_pb.MultiStreamAppendResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.streams.v2.MultiStreamAppendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_streams_v2_MultiStreamAppendResponse(buffer_arg) {
  return streams_streams_pb.MultiStreamAppendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StreamsServiceService = exports.StreamsServiceService = {
  // Executes an atomic operation to append records to multiple streams.
// This transactional method ensures that all appends either succeed
// completely, or are entirely rolled back, thereby maintaining strict data
// consistency across all involved streams.
multiStreamAppend: {
    path: '/kurrentdb.protocol.streams.v2.StreamsService/MultiStreamAppend',
    requestStream: false,
    responseStream: false,
    requestType: streams_streams_pb.MultiStreamAppendRequest,
    responseType: streams_streams_pb.MultiStreamAppendResponse,
    requestSerialize: serialize_kurrentdb_protocol_streams_v2_MultiStreamAppendRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_streams_v2_MultiStreamAppendRequest,
    responseSerialize: serialize_kurrentdb_protocol_streams_v2_MultiStreamAppendResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_streams_v2_MultiStreamAppendResponse,
  },
  // Streaming version of MultiStreamAppend that allows clients to send multiple
// append requests over a single connection. When the stream completes, all
// records are appended transactionally (all succeed or fail together).
// Provides improved efficiency for high-throughput scenarios while
// maintaining the same transactional guarantees.
multiStreamAppendSession: {
    path: '/kurrentdb.protocol.streams.v2.StreamsService/MultiStreamAppendSession',
    requestStream: true,
    responseStream: false,
    requestType: streams_streams_pb.AppendStreamRequest,
    responseType: streams_streams_pb.MultiStreamAppendResponse,
    requestSerialize: serialize_kurrentdb_protocol_streams_v2_AppendStreamRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_streams_v2_AppendStreamRequest,
    responseSerialize: serialize_kurrentdb_protocol_streams_v2_MultiStreamAppendResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_streams_v2_MultiStreamAppendResponse,
  },
};

exports.StreamsServiceClient = grpc.makeGenericClientConstructor(StreamsServiceService, 'StreamsService');
