// package: CasePB
// file: src/app/Protos/CasePB.proto

import * as src_app_Protos_CasePB_pb from "./CasePB_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CasePBServiceGetAllCases = {
  readonly methodName: string;
  readonly service: typeof CasePBService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_Protos_CasePB_pb.StatusRepley;
  readonly responseType: typeof src_app_Protos_CasePB_pb.CaseList;
};

type CasePBServiceGetFrontPageObjects = {
  readonly methodName: string;
  readonly service: typeof CasePBService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_Protos_CasePB_pb.StatusRepley;
  readonly responseType: typeof src_app_Protos_CasePB_pb.FrontpageList;
};

export class CasePBService {
  static readonly serviceName: string;
  static readonly GetAllCases: CasePBServiceGetAllCases;
  static readonly GetFrontPageObjects: CasePBServiceGetFrontPageObjects;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CasePBServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllCases(
    requestMessage: src_app_Protos_CasePB_pb.StatusRepley,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_CasePB_pb.CaseList|null) => void
  ): UnaryResponse;
  getAllCases(
    requestMessage: src_app_Protos_CasePB_pb.StatusRepley,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_CasePB_pb.CaseList|null) => void
  ): UnaryResponse;
  getFrontPageObjects(
    requestMessage: src_app_Protos_CasePB_pb.StatusRepley,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_CasePB_pb.FrontpageList|null) => void
  ): UnaryResponse;
  getFrontPageObjects(
    requestMessage: src_app_Protos_CasePB_pb.StatusRepley,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_CasePB_pb.FrontpageList|null) => void
  ): UnaryResponse;
}

