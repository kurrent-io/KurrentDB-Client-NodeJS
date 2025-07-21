// package: event_store.client.streams
// file: kurrentdb/protocols/v1/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v1_streams_pb from "../../../kurrentdb/protocols/v1/streams_pb";
import * as kurrentdb_protocols_v1_shared_pb from "../../../kurrentdb/protocols/v1/shared_pb";
import * as kurrentdb_protocols_v1_status_pb from "../../../kurrentdb/protocols/v1/status_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IStreamsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    read: IStreamsService_IRead;
    append: IStreamsService_IAppend;
    delete: IStreamsService_IDelete;
    tombstone: IStreamsService_ITombstone;
    batchAppend: IStreamsService_IBatchAppend;
}

interface IStreamsService_IRead extends grpc.MethodDefinition<kurrentdb_protocols_v1_streams_pb.ReadReq, kurrentdb_protocols_v1_streams_pb.ReadResp> {
    path: "/event_store.client.streams.Streams/Read";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.ReadReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.ReadReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.ReadResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.ReadResp>;
}
interface IStreamsService_IAppend extends grpc.MethodDefinition<kurrentdb_protocols_v1_streams_pb.AppendReq, kurrentdb_protocols_v1_streams_pb.AppendResp> {
    path: "/event_store.client.streams.Streams/Append";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.AppendResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.AppendResp>;
}
interface IStreamsService_IDelete extends grpc.MethodDefinition<kurrentdb_protocols_v1_streams_pb.DeleteReq, kurrentdb_protocols_v1_streams_pb.DeleteResp> {
    path: "/event_store.client.streams.Streams/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.DeleteReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.DeleteResp>;
}
interface IStreamsService_ITombstone extends grpc.MethodDefinition<kurrentdb_protocols_v1_streams_pb.TombstoneReq, kurrentdb_protocols_v1_streams_pb.TombstoneResp> {
    path: "/event_store.client.streams.Streams/Tombstone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.TombstoneReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.TombstoneReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.TombstoneResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.TombstoneResp>;
}
interface IStreamsService_IBatchAppend extends grpc.MethodDefinition<kurrentdb_protocols_v1_streams_pb.BatchAppendReq, kurrentdb_protocols_v1_streams_pb.BatchAppendResp> {
    path: "/event_store.client.streams.Streams/BatchAppend";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.BatchAppendReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.BatchAppendReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_streams_pb.BatchAppendResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_streams_pb.BatchAppendResp>;
}

export const StreamsService: IStreamsService;

export interface IStreamsServer extends grpc.UntypedServiceImplementation {
    read: grpc.handleServerStreamingCall<kurrentdb_protocols_v1_streams_pb.ReadReq, kurrentdb_protocols_v1_streams_pb.ReadResp>;
    append: grpc.handleClientStreamingCall<kurrentdb_protocols_v1_streams_pb.AppendReq, kurrentdb_protocols_v1_streams_pb.AppendResp>;
    delete: grpc.handleUnaryCall<kurrentdb_protocols_v1_streams_pb.DeleteReq, kurrentdb_protocols_v1_streams_pb.DeleteResp>;
    tombstone: grpc.handleUnaryCall<kurrentdb_protocols_v1_streams_pb.TombstoneReq, kurrentdb_protocols_v1_streams_pb.TombstoneResp>;
    batchAppend: grpc.handleBidiStreamingCall<kurrentdb_protocols_v1_streams_pb.BatchAppendReq, kurrentdb_protocols_v1_streams_pb.BatchAppendResp>;
}

export interface IStreamsClient {
    read(request: kurrentdb_protocols_v1_streams_pb.ReadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_streams_pb.ReadResp>;
    read(request: kurrentdb_protocols_v1_streams_pb.ReadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_streams_pb.ReadResp>;
    append(callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    append(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    append(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    append(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    delete(request: kurrentdb_protocols_v1_streams_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_streams_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_streams_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    tombstone(request: kurrentdb_protocols_v1_streams_pb.TombstoneReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    tombstone(request: kurrentdb_protocols_v1_streams_pb.TombstoneReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    tombstone(request: kurrentdb_protocols_v1_streams_pb.TombstoneReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    batchAppend(): grpc.ClientDuplexStream<kurrentdb_protocols_v1_streams_pb.BatchAppendReq, kurrentdb_protocols_v1_streams_pb.BatchAppendResp>;
    batchAppend(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kurrentdb_protocols_v1_streams_pb.BatchAppendReq, kurrentdb_protocols_v1_streams_pb.BatchAppendResp>;
    batchAppend(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kurrentdb_protocols_v1_streams_pb.BatchAppendReq, kurrentdb_protocols_v1_streams_pb.BatchAppendResp>;
}

export class StreamsClient extends grpc.Client implements IStreamsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public read(request: kurrentdb_protocols_v1_streams_pb.ReadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_streams_pb.ReadResp>;
    public read(request: kurrentdb_protocols_v1_streams_pb.ReadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_streams_pb.ReadResp>;
    public append(callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    public append(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    public append(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    public append(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<kurrentdb_protocols_v1_streams_pb.AppendReq>;
    public delete(request: kurrentdb_protocols_v1_streams_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_streams_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_streams_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public tombstone(request: kurrentdb_protocols_v1_streams_pb.TombstoneReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    public tombstone(request: kurrentdb_protocols_v1_streams_pb.TombstoneReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    public tombstone(request: kurrentdb_protocols_v1_streams_pb.TombstoneReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    public batchAppend(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kurrentdb_protocols_v1_streams_pb.BatchAppendReq, kurrentdb_protocols_v1_streams_pb.BatchAppendResp>;
    public batchAppend(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kurrentdb_protocols_v1_streams_pb.BatchAppendReq, kurrentdb_protocols_v1_streams_pb.BatchAppendResp>;
}
