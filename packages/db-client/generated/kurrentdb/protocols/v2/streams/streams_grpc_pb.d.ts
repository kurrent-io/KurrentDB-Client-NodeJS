// package: kurrentdb.protocol.v2
// file: kurrentdb/protocols/v2/streams/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v2_streams_streams_pb from "../../../../kurrentdb/protocols/v2/streams/streams_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as kurrentdb_protocols_v2_streams_shared_pb from "../../../../kurrentdb/protocols/v2/streams/shared_pb";
import * as kurrentdb_protocols_v2_core_pb from "../../../../kurrentdb/protocols/v2/core_pb";

interface IStreamsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    multiStreamAppend: IStreamsServiceService_IMultiStreamAppend;
    multiStreamAppendSession: IStreamsServiceService_IMultiStreamAppendSession;
    readSession: IStreamsServiceService_IReadSession;
}

interface IStreamsServiceService_IMultiStreamAppend extends grpc.MethodDefinition<kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest, kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse> {
    path: "/kurrentdb.protocol.v2.StreamsService/MultiStreamAppend";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse>;
}
interface IStreamsServiceService_IMultiStreamAppendSession extends grpc.MethodDefinition<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest, kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse> {
    path: "/kurrentdb.protocol.v2.StreamsService/MultiStreamAppendSession";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse>;
}
interface IStreamsServiceService_IReadSession extends grpc.MethodDefinition<kurrentdb_protocols_v2_streams_streams_pb.ReadRequest, kurrentdb_protocols_v2_streams_streams_pb.ReadResponse> {
    path: "/kurrentdb.protocol.v2.StreamsService/ReadSession";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.ReadRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.ReadRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.ReadResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.ReadResponse>;
}

export const StreamsServiceService: IStreamsServiceService;

export interface IStreamsServiceServer extends grpc.UntypedServiceImplementation {
    multiStreamAppend: grpc.handleUnaryCall<kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest, kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse>;
    multiStreamAppendSession: grpc.handleClientStreamingCall<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest, kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse>;
    readSession: grpc.handleServerStreamingCall<kurrentdb_protocols_v2_streams_streams_pb.ReadRequest, kurrentdb_protocols_v2_streams_streams_pb.ReadResponse>;
}

export interface IStreamsServiceClient {
    multiStreamAppend(request: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    multiStreamAppend(request: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    multiStreamAppend(request: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    multiStreamAppendSession(callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    multiStreamAppendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    multiStreamAppendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    multiStreamAppendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    readSession(request: kurrentdb_protocols_v2_streams_streams_pb.ReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v2_streams_streams_pb.ReadResponse>;
    readSession(request: kurrentdb_protocols_v2_streams_streams_pb.ReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v2_streams_streams_pb.ReadResponse>;
}

export class StreamsServiceClient extends grpc.Client implements IStreamsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public multiStreamAppend(request: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    public multiStreamAppend(request: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    public multiStreamAppend(request: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    public multiStreamAppendSession(callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    public multiStreamAppendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    public multiStreamAppendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    public multiStreamAppendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendStreamRequest>;
    public readSession(request: kurrentdb_protocols_v2_streams_streams_pb.ReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v2_streams_streams_pb.ReadResponse>;
    public readSession(request: kurrentdb_protocols_v2_streams_streams_pb.ReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v2_streams_streams_pb.ReadResponse>;
}
