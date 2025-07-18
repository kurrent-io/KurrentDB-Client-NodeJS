// package: event_store.client.projections
// file: projectionmanagement.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as projectionmanagement_pb from "./projectionmanagement_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as shared_pb from "./shared_pb";

interface IProjectionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IProjectionsService_ICreate;
    update: IProjectionsService_IUpdate;
    delete: IProjectionsService_IDelete;
    statistics: IProjectionsService_IStatistics;
    disable: IProjectionsService_IDisable;
    enable: IProjectionsService_IEnable;
    reset: IProjectionsService_IReset;
    state: IProjectionsService_IState;
    result: IProjectionsService_IResult;
    restartSubsystem: IProjectionsService_IRestartSubsystem;
}

interface IProjectionsService_ICreate extends grpc.MethodDefinition<projectionmanagement_pb.CreateReq, projectionmanagement_pb.CreateResp> {
    path: "/event_store.client.projections.Projections/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<projectionmanagement_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<projectionmanagement_pb.CreateReq>;
    responseSerialize: grpc.serialize<projectionmanagement_pb.CreateResp>;
    responseDeserialize: grpc.deserialize<projectionmanagement_pb.CreateResp>;
}
interface IProjectionsService_IUpdate extends grpc.MethodDefinition<projectionmanagement_pb.UpdateReq, projectionmanagement_pb.UpdateResp> {
    path: "/event_store.client.projections.Projections/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<projectionmanagement_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<projectionmanagement_pb.UpdateReq>;
    responseSerialize: grpc.serialize<projectionmanagement_pb.UpdateResp>;
    responseDeserialize: grpc.deserialize<projectionmanagement_pb.UpdateResp>;
}
interface IProjectionsService_IDelete extends grpc.MethodDefinition<projectionmanagement_pb.DeleteReq, projectionmanagement_pb.DeleteResp> {
    path: "/event_store.client.projections.Projections/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<projectionmanagement_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<projectionmanagement_pb.DeleteReq>;
    responseSerialize: grpc.serialize<projectionmanagement_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<projectionmanagement_pb.DeleteResp>;
}
interface IProjectionsService_IStatistics extends grpc.MethodDefinition<projectionmanagement_pb.StatisticsReq, projectionmanagement_pb.StatisticsResp> {
    path: "/event_store.client.projections.Projections/Statistics";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<projectionmanagement_pb.StatisticsReq>;
    requestDeserialize: grpc.deserialize<projectionmanagement_pb.StatisticsReq>;
    responseSerialize: grpc.serialize<projectionmanagement_pb.StatisticsResp>;
    responseDeserialize: grpc.deserialize<projectionmanagement_pb.StatisticsResp>;
}
interface IProjectionsService_IDisable extends grpc.MethodDefinition<projectionmanagement_pb.DisableReq, projectionmanagement_pb.DisableResp> {
    path: "/event_store.client.projections.Projections/Disable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<projectionmanagement_pb.DisableReq>;
    requestDeserialize: grpc.deserialize<projectionmanagement_pb.DisableReq>;
    responseSerialize: grpc.serialize<projectionmanagement_pb.DisableResp>;
    responseDeserialize: grpc.deserialize<projectionmanagement_pb.DisableResp>;
}
interface IProjectionsService_IEnable extends grpc.MethodDefinition<projectionmanagement_pb.EnableReq, projectionmanagement_pb.EnableResp> {
    path: "/event_store.client.projections.Projections/Enable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<projectionmanagement_pb.EnableReq>;
    requestDeserialize: grpc.deserialize<projectionmanagement_pb.EnableReq>;
    responseSerialize: grpc.serialize<projectionmanagement_pb.EnableResp>;
    responseDeserialize: grpc.deserialize<projectionmanagement_pb.EnableResp>;
}
interface IProjectionsService_IReset extends grpc.MethodDefinition<projectionmanagement_pb.ResetReq, projectionmanagement_pb.ResetResp> {
    path: "/event_store.client.projections.Projections/Reset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<projectionmanagement_pb.ResetReq>;
    requestDeserialize: grpc.deserialize<projectionmanagement_pb.ResetReq>;
    responseSerialize: grpc.serialize<projectionmanagement_pb.ResetResp>;
    responseDeserialize: grpc.deserialize<projectionmanagement_pb.ResetResp>;
}
interface IProjectionsService_IState extends grpc.MethodDefinition<projectionmanagement_pb.StateReq, projectionmanagement_pb.StateResp> {
    path: "/event_store.client.projections.Projections/State";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<projectionmanagement_pb.StateReq>;
    requestDeserialize: grpc.deserialize<projectionmanagement_pb.StateReq>;
    responseSerialize: grpc.serialize<projectionmanagement_pb.StateResp>;
    responseDeserialize: grpc.deserialize<projectionmanagement_pb.StateResp>;
}
interface IProjectionsService_IResult extends grpc.MethodDefinition<projectionmanagement_pb.ResultReq, projectionmanagement_pb.ResultResp> {
    path: "/event_store.client.projections.Projections/Result";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<projectionmanagement_pb.ResultReq>;
    requestDeserialize: grpc.deserialize<projectionmanagement_pb.ResultReq>;
    responseSerialize: grpc.serialize<projectionmanagement_pb.ResultResp>;
    responseDeserialize: grpc.deserialize<projectionmanagement_pb.ResultResp>;
}
interface IProjectionsService_IRestartSubsystem extends grpc.MethodDefinition<shared_pb.Empty, shared_pb.Empty> {
    path: "/event_store.client.projections.Projections/RestartSubsystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<shared_pb.Empty>;
    responseSerialize: grpc.serialize<shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<shared_pb.Empty>;
}

export const ProjectionsService: IProjectionsService;

export interface IProjectionsServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<projectionmanagement_pb.CreateReq, projectionmanagement_pb.CreateResp>;
    update: grpc.handleUnaryCall<projectionmanagement_pb.UpdateReq, projectionmanagement_pb.UpdateResp>;
    delete: grpc.handleUnaryCall<projectionmanagement_pb.DeleteReq, projectionmanagement_pb.DeleteResp>;
    statistics: grpc.handleServerStreamingCall<projectionmanagement_pb.StatisticsReq, projectionmanagement_pb.StatisticsResp>;
    disable: grpc.handleUnaryCall<projectionmanagement_pb.DisableReq, projectionmanagement_pb.DisableResp>;
    enable: grpc.handleUnaryCall<projectionmanagement_pb.EnableReq, projectionmanagement_pb.EnableResp>;
    reset: grpc.handleUnaryCall<projectionmanagement_pb.ResetReq, projectionmanagement_pb.ResetResp>;
    state: grpc.handleUnaryCall<projectionmanagement_pb.StateReq, projectionmanagement_pb.StateResp>;
    result: grpc.handleUnaryCall<projectionmanagement_pb.ResultReq, projectionmanagement_pb.ResultResp>;
    restartSubsystem: grpc.handleUnaryCall<shared_pb.Empty, shared_pb.Empty>;
}

export interface IProjectionsClient {
    create(request: projectionmanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    update(request: projectionmanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    delete(request: projectionmanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    statistics(request: projectionmanagement_pb.StatisticsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<projectionmanagement_pb.StatisticsResp>;
    statistics(request: projectionmanagement_pb.StatisticsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<projectionmanagement_pb.StatisticsResp>;
    disable(request: projectionmanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    enable(request: projectionmanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    reset(request: projectionmanagement_pb.ResetReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    reset(request: projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    reset(request: projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    state(request: projectionmanagement_pb.StateReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    state(request: projectionmanagement_pb.StateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    state(request: projectionmanagement_pb.StateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    result(request: projectionmanagement_pb.ResultReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    result(request: projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    result(request: projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ProjectionsClient extends grpc.Client implements IProjectionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: projectionmanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public update(request: projectionmanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public delete(request: projectionmanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public statistics(request: projectionmanagement_pb.StatisticsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<projectionmanagement_pb.StatisticsResp>;
    public statistics(request: projectionmanagement_pb.StatisticsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<projectionmanagement_pb.StatisticsResp>;
    public disable(request: projectionmanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public enable(request: projectionmanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public reset(request: projectionmanagement_pb.ResetReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    public reset(request: projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    public reset(request: projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    public state(request: projectionmanagement_pb.StateReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    public state(request: projectionmanagement_pb.StateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    public state(request: projectionmanagement_pb.StateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    public result(request: projectionmanagement_pb.ResultReq, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    public result(request: projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    public result(request: projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shared_pb.Empty) => void): grpc.ClientUnaryCall;
}
