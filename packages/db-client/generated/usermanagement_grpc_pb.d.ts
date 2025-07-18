// package: event_store.client.users
// file: usermanagement.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as usermanagement_pb from "./usermanagement_pb";

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

interface IUsersService_ICreate extends grpc.MethodDefinition<usermanagement_pb.CreateReq, usermanagement_pb.CreateResp> {
    path: "/event_store.client.users.Users/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usermanagement_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<usermanagement_pb.CreateReq>;
    responseSerialize: grpc.serialize<usermanagement_pb.CreateResp>;
    responseDeserialize: grpc.deserialize<usermanagement_pb.CreateResp>;
}
interface IUsersService_IUpdate extends grpc.MethodDefinition<usermanagement_pb.UpdateReq, usermanagement_pb.UpdateResp> {
    path: "/event_store.client.users.Users/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usermanagement_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<usermanagement_pb.UpdateReq>;
    responseSerialize: grpc.serialize<usermanagement_pb.UpdateResp>;
    responseDeserialize: grpc.deserialize<usermanagement_pb.UpdateResp>;
}
interface IUsersService_IDelete extends grpc.MethodDefinition<usermanagement_pb.DeleteReq, usermanagement_pb.DeleteResp> {
    path: "/event_store.client.users.Users/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usermanagement_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<usermanagement_pb.DeleteReq>;
    responseSerialize: grpc.serialize<usermanagement_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<usermanagement_pb.DeleteResp>;
}
interface IUsersService_IDisable extends grpc.MethodDefinition<usermanagement_pb.DisableReq, usermanagement_pb.DisableResp> {
    path: "/event_store.client.users.Users/Disable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usermanagement_pb.DisableReq>;
    requestDeserialize: grpc.deserialize<usermanagement_pb.DisableReq>;
    responseSerialize: grpc.serialize<usermanagement_pb.DisableResp>;
    responseDeserialize: grpc.deserialize<usermanagement_pb.DisableResp>;
}
interface IUsersService_IEnable extends grpc.MethodDefinition<usermanagement_pb.EnableReq, usermanagement_pb.EnableResp> {
    path: "/event_store.client.users.Users/Enable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usermanagement_pb.EnableReq>;
    requestDeserialize: grpc.deserialize<usermanagement_pb.EnableReq>;
    responseSerialize: grpc.serialize<usermanagement_pb.EnableResp>;
    responseDeserialize: grpc.deserialize<usermanagement_pb.EnableResp>;
}
interface IUsersService_IDetails extends grpc.MethodDefinition<usermanagement_pb.DetailsReq, usermanagement_pb.DetailsResp> {
    path: "/event_store.client.users.Users/Details";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<usermanagement_pb.DetailsReq>;
    requestDeserialize: grpc.deserialize<usermanagement_pb.DetailsReq>;
    responseSerialize: grpc.serialize<usermanagement_pb.DetailsResp>;
    responseDeserialize: grpc.deserialize<usermanagement_pb.DetailsResp>;
}
interface IUsersService_IChangePassword extends grpc.MethodDefinition<usermanagement_pb.ChangePasswordReq, usermanagement_pb.ChangePasswordResp> {
    path: "/event_store.client.users.Users/ChangePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usermanagement_pb.ChangePasswordReq>;
    requestDeserialize: grpc.deserialize<usermanagement_pb.ChangePasswordReq>;
    responseSerialize: grpc.serialize<usermanagement_pb.ChangePasswordResp>;
    responseDeserialize: grpc.deserialize<usermanagement_pb.ChangePasswordResp>;
}
interface IUsersService_IResetPassword extends grpc.MethodDefinition<usermanagement_pb.ResetPasswordReq, usermanagement_pb.ResetPasswordResp> {
    path: "/event_store.client.users.Users/ResetPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usermanagement_pb.ResetPasswordReq>;
    requestDeserialize: grpc.deserialize<usermanagement_pb.ResetPasswordReq>;
    responseSerialize: grpc.serialize<usermanagement_pb.ResetPasswordResp>;
    responseDeserialize: grpc.deserialize<usermanagement_pb.ResetPasswordResp>;
}

export const UsersService: IUsersService;

export interface IUsersServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<usermanagement_pb.CreateReq, usermanagement_pb.CreateResp>;
    update: grpc.handleUnaryCall<usermanagement_pb.UpdateReq, usermanagement_pb.UpdateResp>;
    delete: grpc.handleUnaryCall<usermanagement_pb.DeleteReq, usermanagement_pb.DeleteResp>;
    disable: grpc.handleUnaryCall<usermanagement_pb.DisableReq, usermanagement_pb.DisableResp>;
    enable: grpc.handleUnaryCall<usermanagement_pb.EnableReq, usermanagement_pb.EnableResp>;
    details: grpc.handleServerStreamingCall<usermanagement_pb.DetailsReq, usermanagement_pb.DetailsResp>;
    changePassword: grpc.handleUnaryCall<usermanagement_pb.ChangePasswordReq, usermanagement_pb.ChangePasswordResp>;
    resetPassword: grpc.handleUnaryCall<usermanagement_pb.ResetPasswordReq, usermanagement_pb.ResetPasswordResp>;
}

export interface IUsersClient {
    create(request: usermanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: usermanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: usermanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    update(request: usermanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: usermanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: usermanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    delete(request: usermanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: usermanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: usermanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    disable(request: usermanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: usermanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: usermanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    enable(request: usermanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: usermanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: usermanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    details(request: usermanagement_pb.DetailsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usermanagement_pb.DetailsResp>;
    details(request: usermanagement_pb.DetailsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usermanagement_pb.DetailsResp>;
    changePassword(request: usermanagement_pb.ChangePasswordReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    changePassword(request: usermanagement_pb.ChangePasswordReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    changePassword(request: usermanagement_pb.ChangePasswordReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    resetPassword(request: usermanagement_pb.ResetPasswordReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
    resetPassword(request: usermanagement_pb.ResetPasswordReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
    resetPassword(request: usermanagement_pb.ResetPasswordReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: usermanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: usermanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: usermanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public update(request: usermanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: usermanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: usermanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public delete(request: usermanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: usermanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: usermanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public disable(request: usermanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: usermanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: usermanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public enable(request: usermanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: usermanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: usermanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public details(request: usermanagement_pb.DetailsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usermanagement_pb.DetailsResp>;
    public details(request: usermanagement_pb.DetailsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usermanagement_pb.DetailsResp>;
    public changePassword(request: usermanagement_pb.ChangePasswordReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    public changePassword(request: usermanagement_pb.ChangePasswordReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    public changePassword(request: usermanagement_pb.ChangePasswordReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ChangePasswordResp) => void): grpc.ClientUnaryCall;
    public resetPassword(request: usermanagement_pb.ResetPasswordReq, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
    public resetPassword(request: usermanagement_pb.ResetPasswordReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
    public resetPassword(request: usermanagement_pb.ResetPasswordReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usermanagement_pb.ResetPasswordResp) => void): grpc.ClientUnaryCall;
}
