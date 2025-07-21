// package: event_store.client.projections
// file: kurrentdb/protocols/v1/projectionmanagement.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v1_projectionmanagement_pb from "../../../kurrentdb/protocols/v1/projectionmanagement_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as kurrentdb_protocols_v1_shared_pb from "../../../kurrentdb/protocols/v1/shared_pb";

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

interface IProjectionsService_ICreate extends grpc.MethodDefinition<kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq, kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp> {
    path: "/event_store.client.projections.Projections/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp>;
}
interface IProjectionsService_IUpdate extends grpc.MethodDefinition<kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq, kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp> {
    path: "/event_store.client.projections.Projections/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp>;
}
interface IProjectionsService_IDelete extends grpc.MethodDefinition<kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq, kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp> {
    path: "/event_store.client.projections.Projections/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp>;
}
interface IProjectionsService_IStatistics extends grpc.MethodDefinition<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsReq, kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsResp> {
    path: "/event_store.client.projections.Projections/Statistics";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsResp>;
}
interface IProjectionsService_IDisable extends grpc.MethodDefinition<kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq, kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp> {
    path: "/event_store.client.projections.Projections/Disable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp>;
}
interface IProjectionsService_IEnable extends grpc.MethodDefinition<kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq, kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp> {
    path: "/event_store.client.projections.Projections/Enable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp>;
}
interface IProjectionsService_IReset extends grpc.MethodDefinition<kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq, kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp> {
    path: "/event_store.client.projections.Projections/Reset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp>;
}
interface IProjectionsService_IState extends grpc.MethodDefinition<kurrentdb_protocols_v1_projectionmanagement_pb.StateReq, kurrentdb_protocols_v1_projectionmanagement_pb.StateResp> {
    path: "/event_store.client.projections.Projections/State";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.StateReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.StateReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.StateResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.StateResp>;
}
interface IProjectionsService_IResult extends grpc.MethodDefinition<kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq, kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp> {
    path: "/event_store.client.projections.Projections/Result";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp>;
}
interface IProjectionsService_IRestartSubsystem extends grpc.MethodDefinition<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.projections.Projections/RestartSubsystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
}

export const ProjectionsService: IProjectionsService;

export interface IProjectionsServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq, kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp>;
    update: grpc.handleUnaryCall<kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq, kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp>;
    delete: grpc.handleUnaryCall<kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq, kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp>;
    statistics: grpc.handleServerStreamingCall<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsReq, kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    disable: grpc.handleUnaryCall<kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq, kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp>;
    enable: grpc.handleUnaryCall<kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq, kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp>;
    reset: grpc.handleUnaryCall<kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq, kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp>;
    state: grpc.handleUnaryCall<kurrentdb_protocols_v1_projectionmanagement_pb.StateReq, kurrentdb_protocols_v1_projectionmanagement_pb.StateResp>;
    result: grpc.handleUnaryCall<kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq, kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp>;
    restartSubsystem: grpc.handleUnaryCall<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty>;
}

export interface IProjectionsClient {
    create(request: kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    update(request: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    statistics(request: kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    statistics(request: kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    disable(request: kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    enable(request: kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    reset(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    reset(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    reset(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    state(request: kurrentdb_protocols_v1_projectionmanagement_pb.StateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    state(request: kurrentdb_protocols_v1_projectionmanagement_pb.StateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    state(request: kurrentdb_protocols_v1_projectionmanagement_pb.StateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    result(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    result(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    result(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ProjectionsClient extends grpc.Client implements IProjectionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: kurrentdb_protocols_v1_projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public update(request: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public statistics(request: kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    public statistics(request: kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    public disable(request: kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: kurrentdb_protocols_v1_projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public enable(request: kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: kurrentdb_protocols_v1_projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public reset(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    public reset(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    public reset(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    public state(request: kurrentdb_protocols_v1_projectionmanagement_pb.StateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    public state(request: kurrentdb_protocols_v1_projectionmanagement_pb.StateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    public state(request: kurrentdb_protocols_v1_projectionmanagement_pb.StateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    public result(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    public result(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    public result(request: kurrentdb_protocols_v1_projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}
