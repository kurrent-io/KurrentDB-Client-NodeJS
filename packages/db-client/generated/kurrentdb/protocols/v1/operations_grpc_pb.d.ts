// package: event_store.client.operations
// file: kurrentdb/protocols/v1/operations.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v1_operations_pb from "../../../kurrentdb/protocols/v1/operations_pb";
import * as kurrentdb_protocols_v1_shared_pb from "../../../kurrentdb/protocols/v1/shared_pb";

interface IOperationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startScavenge: IOperationsService_IStartScavenge;
    stopScavenge: IOperationsService_IStopScavenge;
    shutdown: IOperationsService_IShutdown;
    mergeIndexes: IOperationsService_IMergeIndexes;
    resignNode: IOperationsService_IResignNode;
    setNodePriority: IOperationsService_ISetNodePriority;
    restartPersistentSubscriptions: IOperationsService_IRestartPersistentSubscriptions;
}

interface IOperationsService_IStartScavenge extends grpc.MethodDefinition<kurrentdb_protocols_v1_operations_pb.StartScavengeReq, kurrentdb_protocols_v1_operations_pb.ScavengeResp> {
    path: "/event_store.client.operations.Operations/StartScavenge";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_operations_pb.StartScavengeReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_operations_pb.StartScavengeReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_operations_pb.ScavengeResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_operations_pb.ScavengeResp>;
}
interface IOperationsService_IStopScavenge extends grpc.MethodDefinition<kurrentdb_protocols_v1_operations_pb.StopScavengeReq, kurrentdb_protocols_v1_operations_pb.ScavengeResp> {
    path: "/event_store.client.operations.Operations/StopScavenge";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_operations_pb.StopScavengeReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_operations_pb.StopScavengeReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_operations_pb.ScavengeResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_operations_pb.ScavengeResp>;
}
interface IOperationsService_IShutdown extends grpc.MethodDefinition<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/Shutdown";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
}
interface IOperationsService_IMergeIndexes extends grpc.MethodDefinition<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/MergeIndexes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
}
interface IOperationsService_IResignNode extends grpc.MethodDefinition<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/ResignNode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
}
interface IOperationsService_ISetNodePriority extends grpc.MethodDefinition<kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq, kurrentdb_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/SetNodePriority";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
}
interface IOperationsService_IRestartPersistentSubscriptions extends grpc.MethodDefinition<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/RestartPersistentSubscriptions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
}

export const OperationsService: IOperationsService;

export interface IOperationsServer extends grpc.UntypedServiceImplementation {
    startScavenge: grpc.handleUnaryCall<kurrentdb_protocols_v1_operations_pb.StartScavengeReq, kurrentdb_protocols_v1_operations_pb.ScavengeResp>;
    stopScavenge: grpc.handleUnaryCall<kurrentdb_protocols_v1_operations_pb.StopScavengeReq, kurrentdb_protocols_v1_operations_pb.ScavengeResp>;
    shutdown: grpc.handleUnaryCall<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty>;
    mergeIndexes: grpc.handleUnaryCall<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty>;
    resignNode: grpc.handleUnaryCall<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty>;
    setNodePriority: grpc.handleUnaryCall<kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq, kurrentdb_protocols_v1_shared_pb.Empty>;
    restartPersistentSubscriptions: grpc.handleUnaryCall<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_shared_pb.Empty>;
}

export interface IOperationsClient {
    startScavenge(request: kurrentdb_protocols_v1_operations_pb.StartScavengeReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    startScavenge(request: kurrentdb_protocols_v1_operations_pb.StartScavengeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    startScavenge(request: kurrentdb_protocols_v1_operations_pb.StartScavengeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    stopScavenge(request: kurrentdb_protocols_v1_operations_pb.StopScavengeReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    stopScavenge(request: kurrentdb_protocols_v1_operations_pb.StopScavengeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    stopScavenge(request: kurrentdb_protocols_v1_operations_pb.StopScavengeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    shutdown(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    shutdown(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    shutdown(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    mergeIndexes(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    mergeIndexes(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    mergeIndexes(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    resignNode(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    resignNode(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    resignNode(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    setNodePriority(request: kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    setNodePriority(request: kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    setNodePriority(request: kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartPersistentSubscriptions(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartPersistentSubscriptions(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartPersistentSubscriptions(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class OperationsClient extends grpc.Client implements IOperationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public startScavenge(request: kurrentdb_protocols_v1_operations_pb.StartScavengeReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public startScavenge(request: kurrentdb_protocols_v1_operations_pb.StartScavengeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public startScavenge(request: kurrentdb_protocols_v1_operations_pb.StartScavengeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public stopScavenge(request: kurrentdb_protocols_v1_operations_pb.StopScavengeReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public stopScavenge(request: kurrentdb_protocols_v1_operations_pb.StopScavengeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public stopScavenge(request: kurrentdb_protocols_v1_operations_pb.StopScavengeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public shutdown(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public shutdown(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public shutdown(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public mergeIndexes(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public mergeIndexes(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public mergeIndexes(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public resignNode(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public resignNode(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public resignNode(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public setNodePriority(request: kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public setNodePriority(request: kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public setNodePriority(request: kurrentdb_protocols_v1_operations_pb.SetNodePriorityReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartPersistentSubscriptions(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartPersistentSubscriptions(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartPersistentSubscriptions(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}
