// package: event_store.client.server_features
// file: kurrentdb/protocols/v1/serverfeatures.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v1_serverfeatures_pb from "../../../kurrentdb/protocols/v1/serverfeatures_pb";
import * as kurrentdb_protocols_v1_shared_pb from "../../../kurrentdb/protocols/v1/shared_pb";

interface IServerFeaturesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSupportedMethods: IServerFeaturesService_IGetSupportedMethods;
}

interface IServerFeaturesService_IGetSupportedMethods extends grpc.MethodDefinition<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods> {
    path: "/event_store.client.server_features.ServerFeatures/GetSupportedMethods";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods>;
}

export const ServerFeaturesService: IServerFeaturesService;

export interface IServerFeaturesServer extends grpc.UntypedServiceImplementation {
    getSupportedMethods: grpc.handleUnaryCall<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods>;
}

export interface IServerFeaturesClient {
    getSupportedMethods(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods) => void): grpc.ClientUnaryCall;
    getSupportedMethods(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods) => void): grpc.ClientUnaryCall;
    getSupportedMethods(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods) => void): grpc.ClientUnaryCall;
}

export class ServerFeaturesClient extends grpc.Client implements IServerFeaturesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getSupportedMethods(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods) => void): grpc.ClientUnaryCall;
    public getSupportedMethods(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods) => void): grpc.ClientUnaryCall;
    public getSupportedMethods(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_serverfeatures_pb.SupportedMethods) => void): grpc.ClientUnaryCall;
}
