// package: CasePB
// file: src/app/Protos/CasePB.proto

var src_app_Protos_CasePB_pb = require("./CasePB_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CasePBService = (function () {
  function CasePBService() {}
  CasePBService.serviceName = "CasePB.CasePBService";
  return CasePBService;
}());

CasePBService.GetAllCases = {
  methodName: "GetAllCases",
  service: CasePBService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_Protos_CasePB_pb.StatusRepley,
  responseType: src_app_Protos_CasePB_pb.CaseList
};

CasePBService.GetFrontPageObjects = {
  methodName: "GetFrontPageObjects",
  service: CasePBService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_Protos_CasePB_pb.StatusRepley,
  responseType: src_app_Protos_CasePB_pb.FrontpageList
};

CasePBService.SelectedFrontPageObject = {
  methodName: "SelectedFrontPageObject",
  service: CasePBService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_Protos_CasePB_pb.StatusRepley,
  responseType: src_app_Protos_CasePB_pb.FrontPageObject
};

exports.CasePBService = CasePBService;

function CasePBServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CasePBServiceClient.prototype.getAllCases = function getAllCases(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CasePBService.GetAllCases, {
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

CasePBServiceClient.prototype.getFrontPageObjects = function getFrontPageObjects(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CasePBService.GetFrontPageObjects, {
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

CasePBServiceClient.prototype.selectedFrontPageObject = function selectedFrontPageObject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CasePBService.SelectedFrontPageObject, {
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

exports.CasePBServiceClient = CasePBServiceClient;

