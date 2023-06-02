// package: SectionPB
// file: src/app/Protos/SectionPB.proto

import * as src_app_Protos_SectionPB_pb from "./SectionPB_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SectionPBServiceGetAllSections = {
  readonly methodName: string;
  readonly service: typeof SectionPBService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_Protos_SectionPB_pb.StatusRepley;
  readonly responseType: typeof src_app_Protos_SectionPB_pb.SectionList;
};

type SectionPBServiceGetSpecificSection = {
  readonly methodName: string;
  readonly service: typeof SectionPBService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_Protos_SectionPB_pb.StatusRepley;
  readonly responseType: typeof src_app_Protos_SectionPB_pb.SectionObject;
};

type SectionPBServiceGetSectionListFromCaseNumber = {
  readonly methodName: string;
  readonly service: typeof SectionPBService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_Protos_SectionPB_pb.StatusRepley;
  readonly responseType: typeof src_app_Protos_SectionPB_pb.SectionInformationList;
};

type SectionPBServiceGetSpecificSectionFront = {
  readonly methodName: string;
  readonly service: typeof SectionPBService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_Protos_SectionPB_pb.StatusRepley;
  readonly responseType: typeof src_app_Protos_SectionPB_pb.SectionFrontObject;
};

type SectionPBServiceGetSectionFrontListFromCaseNumber = {
  readonly methodName: string;
  readonly service: typeof SectionPBService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_Protos_SectionPB_pb.StatusRepley;
  readonly responseType: typeof src_app_Protos_SectionPB_pb.SectionFrontList;
};

type SectionPBServiceGetAllSectionsFront = {
  readonly methodName: string;
  readonly service: typeof SectionPBService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_Protos_SectionPB_pb.StatusRepley;
  readonly responseType: typeof src_app_Protos_SectionPB_pb.SectionFrontList;
};

export class SectionPBService {
  static readonly serviceName: string;
  static readonly GetAllSections: SectionPBServiceGetAllSections;
  static readonly GetSpecificSection: SectionPBServiceGetSpecificSection;
  static readonly GetSectionListFromCaseNumber: SectionPBServiceGetSectionListFromCaseNumber;
  static readonly GetSpecificSectionFront: SectionPBServiceGetSpecificSectionFront;
  static readonly GetSectionFrontListFromCaseNumber: SectionPBServiceGetSectionFrontListFromCaseNumber;
  static readonly GetAllSectionsFront: SectionPBServiceGetAllSectionsFront;
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

export class SectionPBServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllSections(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionList|null) => void
  ): UnaryResponse;
  getAllSections(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionList|null) => void
  ): UnaryResponse;
  getSpecificSection(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionObject|null) => void
  ): UnaryResponse;
  getSpecificSection(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionObject|null) => void
  ): UnaryResponse;
  getSectionListFromCaseNumber(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionInformationList|null) => void
  ): UnaryResponse;
  getSectionListFromCaseNumber(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionInformationList|null) => void
  ): UnaryResponse;
  getSpecificSectionFront(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionFrontObject|null) => void
  ): UnaryResponse;
  getSpecificSectionFront(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionFrontObject|null) => void
  ): UnaryResponse;
  getSectionFrontListFromCaseNumber(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionFrontList|null) => void
  ): UnaryResponse;
  getSectionFrontListFromCaseNumber(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionFrontList|null) => void
  ): UnaryResponse;
  getAllSectionsFront(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionFrontList|null) => void
  ): UnaryResponse;
  getAllSectionsFront(
    requestMessage: src_app_Protos_SectionPB_pb.StatusRepley,
    callback: (error: ServiceError|null, responseMessage: src_app_Protos_SectionPB_pb.SectionFrontList|null) => void
  ): UnaryResponse;
}

