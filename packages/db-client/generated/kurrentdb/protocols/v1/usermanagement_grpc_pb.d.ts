// package: event_store.client.users
// file: kurrentdb/protocols/v1/usermanagement.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kurrentdb_protocols_v1_usermanagement_pb from "../../../kurrentdb/protocols/v1/usermanagement_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IUsersService_ICreate;
    update: IUsersService_IUpdate;
    delete: IUsersService_IDelete;
    disable: IUsersService_IDisable;
    enable: IUsersService_IEnable;
    details: IUsersService_IDetails;
    changePassword: IUsersService_IChangePassword;
    resetPassword: IUsersService_IResetPassword;
}

interface IUsersService_ICreate extends grpc.MethodDefinition<kurrentdb_protocols_v1_usermanagement_pb.CreateReq, kurrentdb_protocols_v1_usermanagement_pb.CreateResp> {
    path: "/event_store.client.users.Users/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.CreateReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.CreateResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.CreateResp>;
}
interface IUsersService_IUpdate extends grpc.MethodDefinition<kurrentdb_protocols_v1_usermanagement_pb.UpdateReq, kurrentdb_protocols_v1_usermanagement_pb.UpdateResp> {
    path: "/event_store.client.users.Users/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.UpdateReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.UpdateResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.UpdateResp>;
}
interface IUsersService_IDelete extends grpc.MethodDefinition<kurrentdb_protocols_v1_usermanagement_pb.DeleteReq, kurrentdb_protocols_v1_usermanagement_pb.DeleteResp> {
    path: "/event_store.client.users.Users/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.DeleteReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.DeleteResp>;
}
interface IUsersService_IDisable extends grpc.MethodDefinition<kurrentdb_protocols_v1_usermanagement_pb.DisableReq, kurrentdb_protocols_v1_usermanagement_pb.DisableResp> {
    path: "/event_store.client.users.Users/Disable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.DisableReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.DisableReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.DisableResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.DisableResp>;
}
interface IUsersService_IEnable extends grpc.MethodDefinition<kurrentdb_protocols_v1_usermanagement_pb.EnableReq, kurrentdb_protocols_v1_usermanagement_pb.EnableResp> {
    path: "/event_store.client.users.Users/Enable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.EnableReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.EnableReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.EnableResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.EnableResp>;
}
interface IUsersService_IDetails extends grpc.MethodDefinition<kurrentdb_protocols_v1_usermanagement_pb.DetailsReq, kurrentdb_protocols_v1_usermanagement_pb.DetailsResp> {
    path: "/event_store.client.users.Users/Details";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.DetailsReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.DetailsReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.DetailsResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.DetailsResp>;
}
interface IUsersService_IChangePassword extends grpc.MethodDefinition<kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq, kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp> {
    path: "/event_store.client.users.Users/ChangePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp>;
}
interface IUsersService_IResetPassword extends grpc.MethodDefinition<kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq, kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp> {
    path: "/event_store.client.users.Users/ResetPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq>;
    requestDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq>;
    responseSerialize: grpc.serialize<kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp>;
    responseDeserialize: grpc.deserialize<kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp>;
}

export const UsersService: IUsersService;

export interface IUsersServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<kurrentdb_protocols_v1_usermanagement_pb.CreateReq, kurrentdb_protocols_v1_usermanagement_pb.CreateResp>;
    update: grpc.handleUnaryCall<kurrentdb_protocols_v1_usermanagement_pb.UpdateReq, kurrentdb_protocols_v1_usermanagement_pb.UpdateResp>;
    delete: grpc.handleUnaryCall<kurrentdb_protocols_v1_usermanagement_pb.DeleteReq, kurrentdb_protocols_v1_usermanagement_pb.DeleteResp>;
    disable: grpc.handleUnaryCall<kurrentdb_protocols_v1_usermanagement_pb.DisableReq, kurrentdb_protocols_v1_usermanagement_pb.DisableResp>;
    enable: grpc.handleUnaryCall<kurrentdb_protocols_v1_usermanagement_pb.EnableReq, kurrentdb_protocols_v1_usermanagement_pb.EnableResp>;
    details: grpc.handleServerStreamingCall<kurrentdb_protocols_v1_usermanagement_pb.DetailsReq, kurrentdb_protocols_v1_usermanagement_pb.DetailsResp>;
    changePassword: grpc.handleUnaryCall<kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq, kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp>;
    resetPassword: grpc.handleUnaryCall<kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq, kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp>;
}

export interface IUsersClient {
    create(request: kurrentdb_protocols_v1_usermanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: kurrentdb_protocols_v1_usermanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: kurrentdb_protocols_v1_usermanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    update(request: kurrentdb_protocols_v1_usermanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: kurrentdb_protocols_v1_usermanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: kurrentdb_protocols_v1_usermanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_usermanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_usermanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: kurrentdb_protocols_v1_usermanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    disable(request: kurrentdb_protocols_v1_usermanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: kurrentdb_protocols_v1_usermanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: kurrentdb_protocols_v1_usermanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    enable(request: kurrentdb_protocols_v1_usermanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: kurrentdb_protocols_v1_usermanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: kurrentdb_protocols_v1_usermanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    details(request: kurrentdb_protocols_v1_usermanagement_pb.DetailsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_usermanagement_pb.DetailsResp>;
    details(request: kurrentdb_protocols_v1_usermanagement_pb.DetailsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_usermanagement_pb.DetailsResp>;
    changePassword(request: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    changePassword(request: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    changePassword(request: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    resetPassword(request: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
    resetPassword(request: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
    resetPassword(request: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: kurrentdb_protocols_v1_usermanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: kurrentdb_protocols_v1_usermanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: kurrentdb_protocols_v1_usermanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public update(request: kurrentdb_protocols_v1_usermanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: kurrentdb_protocols_v1_usermanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: kurrentdb_protocols_v1_usermanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_usermanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_usermanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: kurrentdb_protocols_v1_usermanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public disable(request: kurrentdb_protocols_v1_usermanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: kurrentdb_protocols_v1_usermanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: kurrentdb_protocols_v1_usermanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public enable(request: kurrentdb_protocols_v1_usermanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: kurrentdb_protocols_v1_usermanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: kurrentdb_protocols_v1_usermanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public details(request: kurrentdb_protocols_v1_usermanagement_pb.DetailsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_usermanagement_pb.DetailsResp>;
    public details(request: kurrentdb_protocols_v1_usermanagement_pb.DetailsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kurrentdb_protocols_v1_usermanagement_pb.DetailsResp>;
    public changePassword(request: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    public changePassword(request: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    public changePassword(request: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    public resetPassword(request: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
    public resetPassword(request: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
    public resetPassword(request: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kurrentdb_protocols_v1_usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
}
