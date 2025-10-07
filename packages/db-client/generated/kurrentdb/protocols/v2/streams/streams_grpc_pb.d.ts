// package: kurrentdb.protocol.v2.streams
// file: kurrentdb/protocols/v2/streams/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v2_streams_streams_pb from "../../../../kurrentdb/protocols/v2/streams/streams_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IStreamsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    append: IStreamsServiceService_IAppend;
    appendSession: IStreamsServiceService_IAppendSession;
}

interface IStreamsServiceService_IAppend extends grpc.MethodDefinition<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, kurrentdb_protocols_v2_streams_streams_pb.AppendResponse> {
    path: "/kurrentdb.protocol.v2.streams.StreamsService/Append";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.AppendResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.AppendResponse>;
}
interface IStreamsServiceService_IAppendSession extends grpc.MethodDefinition<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse> {
    path: "/kurrentdb.protocol.v2.streams.StreamsService/AppendSession";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse>;
}

export const StreamsServiceService: IStreamsServiceService;

export interface IStreamsServiceServer extends grpc.UntypedServiceImplementation {
    append: grpc.handleUnaryCall<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, kurrentdb_protocols_v2_streams_streams_pb.AppendResponse>;
    appendSession: grpc.handleClientStreamingCall<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse>;
}

export interface IStreamsServiceClient {
    append(request: kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendResponse) => void): grpc.ClientUnaryCall;
    append(request: kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendResponse) => void): grpc.ClientUnaryCall;
    append(request: kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendResponse) => void): grpc.ClientUnaryCall;
    appendSession(callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    appendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    appendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    appendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
}

export class StreamsServiceClient extends grpc.Client implements IStreamsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public append(request: kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendResponse) => void): grpc.ClientUnaryCall;
    public append(request: kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendResponse) => void): grpc.ClientUnaryCall;
    public append(request: kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendResponse) => void): grpc.ClientUnaryCall;
    public appendSession(callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    public appendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    public appendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    public appendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
}
