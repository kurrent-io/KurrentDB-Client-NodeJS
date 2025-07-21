// package: event_store.client.gossip
// file: kurrentdb/protocols/v1/gossip.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v1_gossip_pb from "../../../kurrentdb/protocols/v1/gossip_pb";
import * as kurrentdb_protocols_v1_shared_pb from "../../../kurrentdb/protocols/v1/shared_pb";

interface IGossipService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    read: IGossipService_IRead;
}

interface IGossipService_IRead extends grpc.MethodDefinition<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_gossip_pb.ClusterInfo> {
    path: "/event_store.client.gossip.Gossip/Read";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_gossip_pb.ClusterInfo>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_gossip_pb.ClusterInfo>;
}

export const GossipService: IGossipService;

export interface IGossipServer extends grpc.UntypedServiceImplementation {
    read: grpc.handleUnaryCall<kurrentdb_protocols_v1_shared_pb.Empty, kurrentdb_protocols_v1_gossip_pb.ClusterInfo>;
}

export interface IGossipClient {
    read(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
    read(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
    read(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
}

export class GossipClient extends grpc.Client implements IGossipClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public read(request: kurrentdb_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
    public read(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
    public read(request: kurrentdb_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
}
