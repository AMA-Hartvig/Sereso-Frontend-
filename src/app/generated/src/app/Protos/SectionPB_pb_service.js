// package: SectionPB
// file: src/app/Protos/SectionPB.proto

var src_app_Protos_SectionPB_pb = require("../../../src/app/Protos/SectionPB_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SectionPBService = (function () {
  function SectionPBService() {}
  SectionPBService.serviceName = "SectionPB.SectionPBService";
  return SectionPBService;
}());

SectionPBService.GetAllSections = {
  methodName: "GetAllSections",
  service: SectionPBService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_Protos_SectionPB_pb.StatusRepley,
  responseType: src_app_Protos_SectionPB_pb.SectionList
};

SectionPBService.GetSpecificSection = {
  methodName: "GetSpecificSection",
  service: SectionPBService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_Protos_SectionPB_pb.StatusRepley,
  responseType: src_app_Protos_SectionPB_pb.SectionObject
};

SectionPBService.GetSectionListFromCaseNumber = {
  methodName: "GetSectionListFromCaseNumber",
  service: SectionPBService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_Protos_SectionPB_pb.StatusRepley,
  responseType: src_app_Protos_SectionPB_pb.SectionInformationList
};

SectionPBService.GetSpecificSectionFront = {
  methodName: "GetSpecificSectionFront",
  service: SectionPBService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_Protos_SectionPB_pb.StatusRepley,
  responseType: src_app_Protos_SectionPB_pb.SectionFrontObject
};

SectionPBService.GetSectionFrontListFromCaseNumber = {
  methodName: "GetSectionFrontListFromCaseNumber",
  service: SectionPBService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_Protos_SectionPB_pb.StatusRepley,
  responseType: src_app_Protos_SectionPB_pb.SectionFrontList
};

SectionPBService.GetAllSectionsFront = {
  methodName: "GetAllSectionsFront",
  service: SectionPBService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_Protos_SectionPB_pb.StatusRepley,
  responseType: src_app_Protos_SectionPB_pb.SectionFrontList
};

exports.SectionPBService = SectionPBService;

function SectionPBServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SectionPBServiceClient.prototype.getAllSections = function getAllSections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SectionPBService.GetAllSections, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SectionPBServiceClient.prototype.getSpecificSection = function getSpecificSection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SectionPBService.GetSpecificSection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SectionPBServiceClient.prototype.getSectionListFromCaseNumber = function getSectionListFromCaseNumber(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SectionPBService.GetSectionListFromCaseNumber, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SectionPBServiceClient.prototype.getSpecificSectionFront = function getSpecificSectionFront(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SectionPBService.GetSpecificSectionFront, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SectionPBServiceClient.prototype.getSectionFrontListFromCaseNumber = function getSectionFrontListFromCaseNumber(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SectionPBService.GetSectionFrontListFromCaseNumber, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SectionPBServiceClient.prototype.getAllSectionsFront = function getAllSectionsFront(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SectionPBService.GetAllSectionsFront, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SectionPBServiceClient = SectionPBServiceClient;

