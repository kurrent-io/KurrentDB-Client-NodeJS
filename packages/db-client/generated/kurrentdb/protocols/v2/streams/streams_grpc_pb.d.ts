// package: kurrentdb.protocol.v2.streams
// file: kurrentdb/protocols/v2/streams/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v2_streams_streams_pb from "../../../../kurrentdb/protocols/v2/streams/streams_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IStreamsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    appendSession: IStreamsServiceService_IAppendSession;
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
    appendSession: grpc.handleClientStreamingCall<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest, kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse>;
}

export interface IStreamsServiceClient {
    appendSession(callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    appendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    appendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    appendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
}

export class StreamsServiceClient extends grpc.Client implements IStreamsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public appendSession(callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    public appendSession(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    public appendSession(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
    public appendSession(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_streams_streams_pb.AppendSessionResponse) => void): grpc.ClientWritableStream<kurrentdb_protocols_v2_streams_streams_pb.AppendRequest>;
}
