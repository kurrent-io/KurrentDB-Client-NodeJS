// package: kurrentdb.protocol.v2
// file: kurrentdb/protocols/v2/features/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v2_features_service_pb from "../../../../kurrentdb/protocols/v2/features/service_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as kurrentdb_protocols_v2_core_pb from "../../../../kurrentdb/protocols/v2/core_pb";

interface IServerInfoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getServerInfo: IServerInfoServiceService_IGetServerInfo;
}

interface IServerInfoServiceService_IGetServerInfo extends grpc.MethodDefinition<kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest, kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse> {
    path: "/kurrentdb.protocol.v2.ServerInfoService/GetServerInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse>;
}

export const ServerInfoServiceService: IServerInfoServiceService;

export interface IServerInfoServiceServer extends grpc.UntypedServiceImplementation {
    getServerInfo: grpc.handleUnaryCall<kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest, kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse>;
}

export interface IServerInfoServiceClient {
    getServerInfo(request: kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse) => void): grpc.ClientUnaryCall;
    getServerInfo(request: kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse) => void): grpc.ClientUnaryCall;
    getServerInfo(request: kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse) => void): grpc.ClientUnaryCall;
}

export class ServerInfoServiceClient extends grpc.Client implements IServerInfoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getServerInfo(request: kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse) => void): grpc.ClientUnaryCall;
    public getServerInfo(request: kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse) => void): grpc.ClientUnaryCall;
    public getServerInfo(request: kurrentdb_protocols_v2_features_service_pb.ServerInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v2_features_service_pb.ServerInfoResponse) => void): grpc.ClientUnaryCall;
}
