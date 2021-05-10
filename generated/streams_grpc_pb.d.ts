// package: event_store.client.streams
// file: streams.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as streams_pb from "./streams_pb";
import * as shared_pb from "./shared_pb";

interface IStreamsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    read: IStreamsService_IRead;
    append: IStreamsService_IAppend;
    delete: IStreamsService_IDelete;
    tombstone: IStreamsService_ITombstone;
}

interface IStreamsService_IRead extends grpc.MethodDefinition<streams_pb.ReadReq, streams_pb.ReadResp> {
    path: "/event_store.client.streams.Streams/Read";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<streams_pb.ReadReq>;
    requestDeserialize: grpc.deserialize<streams_pb.ReadReq>;
    responseSerialize: grpc.serialize<streams_pb.ReadResp>;
    responseDeserialize: grpc.deserialize<streams_pb.ReadResp>;
}
interface IStreamsService_IAppend extends grpc.MethodDefinition<streams_pb.AppendReq, streams_pb.AppendResp> {
    path: "/event_store.client.streams.Streams/Append";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<streams_pb.AppendReq>;
    requestDeserialize: grpc.deserialize<streams_pb.AppendReq>;
    responseSerialize: grpc.serialize<streams_pb.AppendResp>;
    responseDeserialize: grpc.deserialize<streams_pb.AppendResp>;
}
interface IStreamsService_IDelete extends grpc.MethodDefinition<streams_pb.DeleteReq, streams_pb.DeleteResp> {
    path: "/event_store.client.streams.Streams/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<streams_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<streams_pb.DeleteReq>;
    responseSerialize: grpc.serialize<streams_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<streams_pb.DeleteResp>;
}
interface IStreamsService_ITombstone extends grpc.MethodDefinition<streams_pb.TombstoneReq, streams_pb.TombstoneResp> {
    path: "/event_store.client.streams.Streams/Tombstone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<streams_pb.TombstoneReq>;
    requestDeserialize: grpc.deserialize<streams_pb.TombstoneReq>;
    responseSerialize: grpc.serialize<streams_pb.TombstoneResp>;
    responseDeserialize: grpc.deserialize<streams_pb.TombstoneResp>;
}

export const StreamsService: IStreamsService;

export interface IStreamsServer extends grpc.UntypedServiceImplementation {
    read: grpc.handleServerStreamingCall<streams_pb.ReadReq, streams_pb.ReadResp>;
    append: handleClientStreamingCall<streams_pb.AppendReq, streams_pb.AppendResp>;
    delete: grpc.handleUnaryCall<streams_pb.DeleteReq, streams_pb.DeleteResp>;
    tombstone: grpc.handleUnaryCall<streams_pb.TombstoneReq, streams_pb.TombstoneResp>;
}

export interface IStreamsClient {
    read(request: streams_pb.ReadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<streams_pb.ReadResp>;
    read(request: streams_pb.ReadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<streams_pb.ReadResp>;
    append(callback: (error: grpc.ServiceError | null, response: streams_pb.AppendResp) => void): grpc.ClientWritableStream<streams_pb.AppendReq>;
    append(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_pb.AppendResp) => void): grpc.ClientWritableStream<streams_pb.AppendReq>;
    append(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_pb.AppendResp) => void): grpc.ClientWritableStream<streams_pb.AppendReq>;
    append(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_pb.AppendResp) => void): grpc.ClientWritableStream<streams_pb.AppendReq>;
    delete(request: streams_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: streams_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: streams_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    tombstone(request: streams_pb.TombstoneReq, callback: (error: grpc.ServiceError | null, response: streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    tombstone(request: streams_pb.TombstoneReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    tombstone(request: streams_pb.TombstoneReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
}

export class StreamsClient extends grpc.Client implements IStreamsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public read(request: streams_pb.ReadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<streams_pb.ReadResp>;
    public read(request: streams_pb.ReadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<streams_pb.ReadResp>;
    public append(callback: (error: grpc.ServiceError | null, response: streams_pb.AppendResp) => void): grpc.ClientWritableStream<streams_pb.AppendReq>;
    public append(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_pb.AppendResp) => void): grpc.ClientWritableStream<streams_pb.AppendReq>;
    public append(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_pb.AppendResp) => void): grpc.ClientWritableStream<streams_pb.AppendReq>;
    public append(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_pb.AppendResp) => void): grpc.ClientWritableStream<streams_pb.AppendReq>;
    public delete(request: streams_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: streams_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: streams_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public tombstone(request: streams_pb.TombstoneReq, callback: (error: grpc.ServiceError | null, response: streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    public tombstone(request: streams_pb.TombstoneReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    public tombstone(request: streams_pb.TombstoneReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
}
