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
  // Appends records to multiple streams atomically within a single transaction.
//
// This is a client-streaming RPC where the client sends multiple AppendRequest messages
// (one per stream) and receives a single AppendSessionResponse upon commit.
//
// Guarantees:
// - Atomicity: All writes succeed or all fail together
// - Optimistic Concurrency: Expected revisions are validated for all streams before commit
// - Ordering: Records within each stream maintain send order
//
// Current Limitations:
// - Each stream can only appear once per session (no multiple appends to same stream)
//
// Example flow:
//   1. Client opens stream
//   2. Client sends AppendRequest for stream "orders" with 3 records
//   3. Client sends AppendRequest for stream "inventory" with 2 records
//   4. Client completes the stream
//   5. Server validates, commits, returns AppendSessionResponse with positions
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
