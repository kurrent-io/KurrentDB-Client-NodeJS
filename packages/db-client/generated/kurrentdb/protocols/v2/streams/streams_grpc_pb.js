// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var kurrentdb_protocols_v2_streams_streams_pb = require('../../../../kurrentdb/protocols/v2/streams/streams_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
var kurrentdb_protocols_v2_streams_shared_pb = require('../../../../kurrentdb/protocols/v2/streams/shared_pb.js');
var kurrentdb_protocols_v2_core_pb = require('../../../../kurrentdb/protocols/v2/core_pb.js');

function serialize_kurrentdb_protocol_v2_AppendStreamRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.AppendStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_AppendStreamRequest(buffer_arg) {
  return kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_v2_MultiStreamAppendRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.MultiStreamAppendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_MultiStreamAppendRequest(buffer_arg) {
  return kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_v2_MultiStreamAppendResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.MultiStreamAppendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_MultiStreamAppendResponse(buffer_arg) {
  return kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_v2_ReadRequest(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_streams_streams_pb.ReadRequest)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.ReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_ReadRequest(buffer_arg) {
  return kurrentdb_protocols_v2_streams_streams_pb.ReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kurrentdb_protocol_v2_ReadResponse(arg) {
  if (!(arg instanceof kurrentdb_protocols_v2_streams_streams_pb.ReadResponse)) {
    throw new Error('Expected argument of type kurrentdb.protocol.v2.ReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kurrentdb_protocol_v2_ReadResponse(buffer_arg) {
  return kurrentdb_protocols_v2_streams_streams_pb.ReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StreamsServiceService = exports.StreamsServiceService = {
  // Executes an atomic operation to append records to multiple streams.
// This transactional method ensures that all appends either succeed
// completely, or are entirely rolled back, thereby maintaining strict data
// consistency across all involved streams.
multiStreamAppend: {
    path: '/kurrentdb.protocol.v2.StreamsService/MultiStreamAppend',
    requestStream: false,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest,
    responseType: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse,
    requestSerialize: serialize_kurrentdb_protocol_v2_MultiStreamAppendRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_v2_MultiStreamAppendRequest,
    responseSerialize: serialize_kurrentdb_protocol_v2_MultiStreamAppendResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_v2_MultiStreamAppendResponse,
  },
  // Streaming version of MultiStreamAppend that allows clients to send multiple
// append requests over a single connection. When the stream completes, all
// records are appended transactionally (all succeed or fail together).
// Provides improved efficiency for high-throughput scenarios while
// maintaining the same transactional guarantees.
multiStreamAppendSession: {
    path: '/kurrentdb.protocol.v2.StreamsService/MultiStreamAppendSession',
    requestStream: true,
    responseStream: false,
    requestType: kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest,
    responseType: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse,
    requestSerialize: serialize_kurrentdb_protocol_v2_AppendStreamRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_v2_AppendStreamRequest,
    responseSerialize: serialize_kurrentdb_protocol_v2_MultiStreamAppendResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_v2_MultiStreamAppendResponse,
  },
  //  // Appends records to a specific stream.
//  rpc AppendStream(AppendStreamRequest) returns (AppendStreamResponse);
//
//  // Append batches of records to a stream continuously, while guaranteeing pipelined
//  // requests are processed in order. If any request fails, the session is terminated.
//  rpc AppendStreamSession(stream AppendStreamRequest) returns (stream AppendStreamResponse);
//
//  // Retrieve a batch of records
//  rpc ReadStream(ReadRequest) returns (ReadResponse);
//
// Retrieve batches of records continuously.
readSession: {
    path: '/kurrentdb.protocol.v2.StreamsService/ReadSession',
    requestStream: false,
    responseStream: true,
    requestType: kurrentdb_protocols_v2_streams_streams_pb.ReadRequest,
    responseType: kurrentdb_protocols_v2_streams_streams_pb.ReadResponse,
    requestSerialize: serialize_kurrentdb_protocol_v2_ReadRequest,
    requestDeserialize: deserialize_kurrentdb_protocol_v2_ReadRequest,
    responseSerialize: serialize_kurrentdb_protocol_v2_ReadResponse,
    responseDeserialize: deserialize_kurrentdb_protocol_v2_ReadResponse,
  },
};

exports.StreamsServiceClient = grpc.makeGenericClientConstructor(StreamsServiceService, 'StreamsService');
