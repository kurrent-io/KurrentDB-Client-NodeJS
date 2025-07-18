// package: event_store.client.persistent_subscriptions
// file: persistentsubscriptions.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as persistentsubscriptions_pb from "./persistentsubscriptions_pb";
import * as shared_pb from "./shared_pb";

interface IPersistentSubscriptionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IPersistentSubscriptionsService_ICreate;
    update: IPersistentSubscriptionsService_IUpdate;
    delete: IPersistentSubscriptionsService_IDelete;
    read: IPersistentSubscriptionsService_IRead;
    getInfo: IPersistentSubscriptionsService_IGetInfo;
    replayParked: IPersistentSubscriptionsService_IReplayParked;
    list: IPersistentSubscriptionsService_IList;
    restartSubsystem: IPersistentSubscriptionsService_IRestartSubsystem;
}

interface IPersistentSubscriptionsService_ICreate extends grpc.MethodDefinition<persistentsubscriptions_pb.CreateReq, persistentsubscriptions_pb.CreateResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<persistentsubscriptions_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<persistentsubscriptions_pb.CreateReq>;
    responseSerialize: grpc.serialize<persistentsubscriptions_pb.CreateResp>;
    responseDeserialize: grpc.deserialize<persistentsubscriptions_pb.CreateResp>;
}
interface IPersistentSubscriptionsService_IUpdate extends grpc.MethodDefinition<persistentsubscriptions_pb.UpdateReq, persistentsubscriptions_pb.UpdateResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<persistentsubscriptions_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<persistentsubscriptions_pb.UpdateReq>;
    responseSerialize: grpc.serialize<persistentsubscriptions_pb.UpdateResp>;
    responseDeserialize: grpc.deserialize<persistentsubscriptions_pb.UpdateResp>;
}
interface IPersistentSubscriptionsService_IDelete extends grpc.MethodDefinition<persistentsubscriptions_pb.DeleteReq, persistentsubscriptions_pb.DeleteResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<persistentsubscriptions_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<persistentsubscriptions_pb.DeleteReq>;
    responseSerialize: grpc.serialize<persistentsubscriptions_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<persistentsubscriptions_pb.DeleteResp>;
}
interface IPersistentSubscriptionsService_IRead extends grpc.MethodDefinition<persistentsubscriptions_pb.ReadReq, persistentsubscriptions_pb.ReadResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Read";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<persistentsubscriptions_pb.ReadReq>;
    requestDeserialize: grpc.deserialize<persistentsubscriptions_pb.ReadReq>;
    responseSerialize: grpc.serialize<persistentsubscriptions_pb.ReadResp>;
    responseDeserialize: grpc.deserialize<persistentsubscriptions_pb.ReadResp>;
}
interface IPersistentSubscriptionsService_IGetInfo extends grpc.MethodDefinition<persistentsubscriptions_pb.GetInfoReq, persistentsubscriptions_pb.GetInfoResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/GetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<persistentsubscriptions_pb.GetInfoReq>;
    requestDeserialize: grpc.deserialize<persistentsubscriptions_pb.GetInfoReq>;
    responseSerialize: grpc.serialize<persistentsubscriptions_pb.GetInfoResp>;
    responseDeserialize: grpc.deserialize<persistentsubscriptions_pb.GetInfoResp>;
}
interface IPersistentSubscriptionsService_IReplayParked extends grpc.MethodDefinition<persistentsubscriptions_pb.ReplayParkedReq, persistentsubscriptions_pb.ReplayParkedResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/ReplayParked";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<persistentsubscriptions_pb.ReplayParkedReq>;
    requestDeserialize: grpc.deserialize<persistentsubscriptions_pb.ReplayParkedReq>;
    responseSerialize: grpc.serialize<persistentsubscriptions_pb.ReplayParkedResp>;
    responseDeserialize: grpc.deserialize<persistentsubscriptions_pb.ReplayParkedResp>;
}
interface IPersistentSubscriptionsService_IList extends grpc.MethodDefinition<persistentsubscriptions_pb.ListReq, persistentsubscriptions_pb.ListResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<persistentsubscriptions_pb.ListReq>;
    requestDeserialize: grpc.deserialize<persistentsubscriptions_pb.ListReq>;
    responseSerialize: grpc.serialize<persistentsubscriptions_pb.ListResp>;
    responseDeserialize: grpc.deserialize<persistentsubscriptions_pb.ListResp>;
}
interface IPersistentSubscriptionsService_IRestartSubsystem extends grpc.MethodDefinition<shared_pb.Empty, shared_pb.Empty> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/RestartSubsystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<shared_pb.Empty>;
    responseSerialize: grpc.serialize<shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<shared_pb.Empty>;
}

export const PersistentSubscriptionsService: IPersistentSubscriptionsService;

export interface IPersistentSubscriptionsServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<persistentsubscriptions_pb.CreateReq, persistentsubscriptions_pb.CreateResp>;
    update: grpc.handleUnaryCall<persistentsubscriptions_pb.UpdateReq, persistentsubscriptions_pb.UpdateResp>;
    delete: grpc.handleUnaryCall<persistentsubscriptions_pb.DeleteReq, persistentsubscriptions_pb.DeleteResp>;
    read: grpc.handleBidiStreamingCall<persistentsubscriptions_pb.ReadReq, persistentsubscriptions_pb.ReadResp>;
    getInfo: grpc.handleUnaryCall<persistentsubscriptions_pb.GetInfoReq, persistentsubscriptions_pb.GetInfoResp>;
    replayParked: grpc.handleUnaryCall<persistentsubscriptions_pb.ReplayParkedReq, persistentsubscriptions_pb.ReplayParkedResp>;
    list: grpc.handleUnaryCall<persistentsubscriptions_pb.ListReq, persistentsubscriptions_pb.ListResp>;
    restartSubsystem: grpc.handleUnaryCall<shared_pb.Empty, shared_pb.Empty>;
}

export interface IPersistentSubscriptionsClient {
    create(request: persistentsubscriptions_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    update(request: persistentsubscriptions_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    delete(request: persistentsubscriptions_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    read(): grpc.ClientDuplexStream<persistentsubscriptions_pb.ReadReq, persistentsubscriptions_pb.ReadResp>;
    read(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<persistentsubscriptions_pb.ReadReq, persistentsubscriptions_pb.ReadResp>;
    read(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<persistentsubscriptions_pb.ReadReq, persistentsubscriptions_pb.ReadResp>;
    getInfo(request: persistentsubscriptions_pb.GetInfoReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    getInfo(request: persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    getInfo(request: persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    replayParked(request: persistentsubscriptions_pb.ReplayParkedReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    replayParked(request: persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    replayParked(request: persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    list(request: persistentsubscriptions_pb.ListReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    list(request: persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    list(request: persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class PersistentSubscriptionsClient extends grpc.Client implements IPersistentSubscriptionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: persistentsubscriptions_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public update(request: persistentsubscriptions_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public delete(request: persistentsubscriptions_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public read(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<persistentsubscriptions_pb.ReadReq, persistentsubscriptions_pb.ReadResp>;
    public read(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<persistentsubscriptions_pb.ReadReq, persistentsubscriptions_pb.ReadResp>;
    public getInfo(request: persistentsubscriptions_pb.GetInfoReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    public getInfo(request: persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    public getInfo(request: persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    public replayParked(request: persistentsubscriptions_pb.ReplayParkedReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    public replayParked(request: persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    public replayParked(request: persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    public list(request: persistentsubscriptions_pb.ListReq, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    public list(request: persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    public list(request: persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
}
