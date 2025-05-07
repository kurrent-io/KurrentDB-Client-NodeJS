// package: kurrentdb.protocol.streams.v2
// file: streams/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as streams_streams_pb from "../streams/streams_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IStreamsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    multiStreamAppend: IStreamsServiceService_IMultiStreamAppend;
    multiStreamAppendSession: IStreamsServiceService_IMultiStreamAppendSession;
}

interface IStreamsServiceService_IMultiStreamAppend extends grpc.MethodDefinition<streams_streams_pb.MultiStreamAppendRequest, streams_streams_pb.MultiStreamAppendResponse> {
    path: "/kurrentdb.protocol.streams.v2.StreamsService/MultiStreamAppend";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<streams_streams_pb.MultiStreamAppendRequest>;
    requestDeserialize: grpc.deserialize<streams_streams_pb.MultiStreamAppendRequest>;
    responseSerialize: grpc.serialize<streams_streams_pb.MultiStreamAppendResponse>;
    responseDeserialize: grpc.deserialize<streams_streams_pb.MultiStreamAppendResponse>;
}
interface IStreamsServiceService_IMultiStreamAppendSession extends grpc.MethodDefinition<streams_streams_pb.AppendStreamRequest, streams_streams_pb.MultiStreamAppendResponse> {
    path: "/kurrentdb.protocol.streams.v2.StreamsService/MultiStreamAppendSession";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<streams_streams_pb.AppendStreamRequest>;
    requestDeserialize: grpc.deserialize<streams_streams_pb.AppendStreamRequest>;
    responseSerialize: grpc.serialize<streams_streams_pb.MultiStreamAppendResponse>;
    responseDeserialize: grpc.deserialize<streams_streams_pb.MultiStreamAppendResponse>;
}

export const StreamsServiceService: IStreamsServiceService;

export interface IStreamsServiceServer extends grpc.UntypedServiceImplementation {
    multiStreamAppend: grpc.handleUnaryCall<streams_streams_pb.MultiStreamAppendRequest, streams_streams_pb.MultiStreamAppendResponse>;
    multiStreamAppendSession: grpc.handleClientStreamingCall<streams_streams_pb.AppendStreamRequest, streams_streams_pb.MultiStreamAppendResponse>;
}

export interface IStreamsServiceClient {
    multiStreamAppend(request: streams_streams_pb.MultiStreamAppendRequest, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    multiStreamAppend(request: streams_streams_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    multiStreamAppend(request: streams_streams_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    multiStreamAppendSession(callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_streams_pb.AppendStreamRequest>;
    multiStreamAppendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_streams_pb.AppendStreamRequest>;
    multiStreamAppendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_streams_pb.AppendStreamRequest>;
    multiStreamAppendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_streams_pb.AppendStreamRequest>;
}

export class StreamsServiceClient extends grpc.Client implements IStreamsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public multiStreamAppend(request: streams_streams_pb.MultiStreamAppendRequest, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    public multiStreamAppend(request: streams_streams_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    public multiStreamAppend(request: streams_streams_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    public multiStreamAppendSession(callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_streams_pb.AppendStreamRequest>;
    public multiStreamAppendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_streams_pb.AppendStreamRequest>;
    public multiStreamAppendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_streams_pb.AppendStreamRequest>;
    public multiStreamAppendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_streams_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_streams_pb.AppendStreamRequest>;
}
