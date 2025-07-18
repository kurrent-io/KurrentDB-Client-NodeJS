// package: event_store.client.persistent_subscriptions
// file: kurrentdb/protocols/v1/persistentsubscriptions.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v1_persistentsubscriptions_pb from "../../../kurrentdb/protocols/v1/persistentsubscriptions_pb";
import * as kurrentdb_protocols_v1_shared_pb from "../../../kurrentdb/protocols/v1/shared_pb";

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

interface IPersistentSubscriptionsService_ICreate extends grpc.MethodDefinition<kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp>;
}
interface IPersistentSubscriptionsService_IUpdate extends grpc.MethodDefinition<kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp>;
}
interface IPersistentSubscriptionsService_IDelete extends grpc.MethodDefinition<kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp>;
}
interface IPersistentSubscriptionsService_IRead extends grpc.MethodDefinition<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Read";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadResp>;
}
interface IPersistentSubscriptionsService_IGetInfo extends grpc.MethodDefinition<kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/GetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp>;
}
interface IPersistentSubscriptionsService_IReplayParked extends grpc.MethodDefinition<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/ReplayParked";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp>;
}
interface IPersistentSubscriptionsService_IList extends grpc.MethodDefinition<kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp>;
}
interface IPersistentSubscriptionsService_IRestartSubsystem extends grpc.MethodDefinition<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/RestartSubsystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
}

export const PersistentSubscriptionsService: IPersistentSubscriptionsService;

export interface IPersistentSubscriptionsServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp>;
    update: grpc.handleUnaryCall<kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp>;
    delete: grpc.handleUnaryCall<kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp>;
    read: grpc.handleBidiStreamingCall<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    getInfo: grpc.handleUnaryCall<kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp>;
    replayParked: grpc.handleUnaryCall<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp>;
    list: grpc.handleUnaryCall<kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp>;
    restartSubsystem: grpc.handleUnaryCall<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty>;
}

export interface IPersistentSubscriptionsClient {
    create(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    update(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    read(): grpc.ClientDuplexStream<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    read(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    read(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    getInfo(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    getInfo(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    getInfo(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    replayParked(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    replayParked(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    replayParked(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    list(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    list(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    list(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class PersistentSubscriptionsClient extends grpc.Client implements IPersistentSubscriptionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public update(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public read(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    public read(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadReq, kurrentdb_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    public getInfo(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    public getInfo(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    public getInfo(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    public replayParked(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    public replayParked(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    public replayParked(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    public list(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    public list(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    public list(request: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}
