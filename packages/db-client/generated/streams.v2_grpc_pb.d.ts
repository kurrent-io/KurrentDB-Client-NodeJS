// package: kurrentdb.protocol.v2
// file: streams.v2.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as streams_v2_pb from "./streams.v2_pb";
import * as dynamic_value_pb from "./dynamic-value_pb";

interface IStreamsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    multiStreamAppend: IStreamsServiceService_IMultiStreamAppend;
    multiStreamAppendSession: IStreamsServiceService_IMultiStreamAppendSession;
}

interface IStreamsServiceService_IMultiStreamAppend extends grpc.MethodDefinition<streams_v2_pb.MultiStreamAppendRequest, streams_v2_pb.MultiStreamAppendResponse> {
    path: "/kurrentdb.protocol.v2.StreamsService/MultiStreamAppend";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<streams_v2_pb.MultiStreamAppendRequest>;
    requestDeserialize: grpc.deserialize<streams_v2_pb.MultiStreamAppendRequest>;
    responseSerialize: grpc.serialize<streams_v2_pb.MultiStreamAppendResponse>;
    responseDeserialize: grpc.deserialize<streams_v2_pb.MultiStreamAppendResponse>;
}
interface IStreamsServiceService_IMultiStreamAppendSession extends grpc.MethodDefinition<streams_v2_pb.AppendStreamRequest, streams_v2_pb.MultiStreamAppendResponse> {
    path: "/kurrentdb.protocol.v2.StreamsService/MultiStreamAppendSession";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<streams_v2_pb.AppendStreamRequest>;
    requestDeserialize: grpc.deserialize<streams_v2_pb.AppendStreamRequest>;
    responseSerialize: grpc.serialize<streams_v2_pb.MultiStreamAppendResponse>;
    responseDeserialize: grpc.deserialize<streams_v2_pb.MultiStreamAppendResponse>;
}

export const StreamsServiceService: IStreamsServiceService;

export interface IStreamsServiceServer extends grpc.UntypedServiceImplementation {
    multiStreamAppend: grpc.handleUnaryCall<streams_v2_pb.MultiStreamAppendRequest, streams_v2_pb.MultiStreamAppendResponse>;
    multiStreamAppendSession: grpc.handleClientStreamingCall<streams_v2_pb.AppendStreamRequest, streams_v2_pb.MultiStreamAppendResponse>;
}

export interface IStreamsServiceClient {
    multiStreamAppend(request: streams_v2_pb.MultiStreamAppendRequest, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    multiStreamAppend(request: streams_v2_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    multiStreamAppend(request: streams_v2_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    multiStreamAppendSession(callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_v2_pb.AppendStreamRequest>;
    multiStreamAppendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_v2_pb.AppendStreamRequest>;
    multiStreamAppendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_v2_pb.AppendStreamRequest>;
    multiStreamAppendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_v2_pb.AppendStreamRequest>;
}

export class StreamsServiceClient extends grpc.Client implements IStreamsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public multiStreamAppend(request: streams_v2_pb.MultiStreamAppendRequest, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    public multiStreamAppend(request: streams_v2_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    public multiStreamAppend(request: streams_v2_pb.MultiStreamAppendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientUnaryCall;
    public multiStreamAppendSession(callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_v2_pb.AppendStreamRequest>;
    public multiStreamAppendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_v2_pb.AppendStreamRequest>;
    public multiStreamAppendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_v2_pb.AppendStreamRequest>;
    public multiStreamAppendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_v2_pb.MultiStreamAppendResponse) => void): grpc.ClientWritableStream<streams_v2_pb.AppendStreamRequest>;
}
