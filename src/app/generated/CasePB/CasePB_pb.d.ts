// package: CasePB
// file: src/app/Protos/CasePB.proto

import * as jspb from "google-protobuf";

export class CaseObject extends jspb.Message {
  getCaseid(): number;
  setCaseid(value: number): void;

  getCasenumber(): number;
  setCasenumber(value: number): void;

  getCasename(): string;
  setCasename(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPriceyear(): number;
  setPriceyear(value: number): void;

  getCreationdate(): string;
  setCreationdate(value: string): void;

  getCasetypeid(): number;
  setCasetypeid(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getCaseunitid(): number;
  setCaseunitid(value: number): void;

  getFloor(): number;
  setFloor(value: number): void;

  getCasesystemid(): number;
  setCasesystemid(value: number): void;

  getYear(): number;
  setYear(value: number): void;

  getCasedescription(): string;
  setCasedescription(value: string): void;

  getCaseimagepath(): string;
  setCaseimagepath(value: string): void;

  getCasemoviepath(): string;
  setCasemoviepath(value: string): void;

  getCaseimportpath(): string;
  setCaseimportpath(value: string): void;

  getCasepdfpath(): string;
  setCasepdfpath(value: string): void;

  getWellnumberLang(): string;
  setWellnumberLang(value: string): void;

  getWellnumberBips(): string;
  setWellnumberBips(value: string): void;

  getUserid(): number;
  setUserid(value: number): void;

  getPropertybbr(): number;
  setPropertybbr(value: number): void;

  getPropertyname(): string;
  setPropertyname(value: string): void;

  getPropertyage(): number;
  setPropertyage(value: number): void;

  getPropertytypeid(): number;
  setPropertytypeid(value: number): void;

  getPropertyapplicationid(): number;
  setPropertyapplicationid(value: number): void;

  getPropertyaddress(): string;
  setPropertyaddress(value: string): void;

  getPropertypostalnumber(): number;
  setPropertypostalnumber(value: number): void;

  getPropertycity(): string;
  setPropertycity(value: string): void;

  getPropertycadastrenumber(): string;
  setPropertycadastrenumber(value: string): void;

  getPropertyownerlow(): string;
  setPropertyownerlow(value: string): void;

  getCaselanguage(): number;
  setCaselanguage(value: number): void;

  getStandardrenovationcaseid(): number;
  setStandardrenovationcaseid(value: number): void;

  getEntrepreneurid(): number;
  setEntrepreneurid(value: number): void;

  getDistrictid(): number;
  setDistrictid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CaseObject.AsObject;
  static toObject(includeInstance: boolean, msg: CaseObject): CaseObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CaseObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CaseObject;
  static deserializeBinaryFromReader(message: CaseObject, reader: jspb.BinaryReader): CaseObject;
}

export namespace CaseObject {
  export type AsObject = {
    caseid: number,
    casenumber: number,
    casename: string,
    description: string,
    priceyear: number,
    creationdate: string,
    casetypeid: number,
    amount: number,
    caseunitid: number,
    floor: number,
    casesystemid: number,
    year: number,
    casedescription: string,
    caseimagepath: string,
    casemoviepath: string,
    caseimportpath: string,
    casepdfpath: string,
    wellnumberLang: string,
    wellnumberBips: string,
    userid: number,
    propertybbr: number,
    propertyname: string,
    propertyage: number,
    propertytypeid: number,
    propertyapplicationid: number,
    propertyaddress: string,
    propertypostalnumber: number,
    propertycity: string,
    propertycadastrenumber: string,
    propertyownerlow: string,
    caselanguage: number,
    standardrenovationcaseid: number,
    entrepreneurid: number,
    districtid: number,
  }
}

export class CaseList extends jspb.Message {
  clearCasesList(): void;
  getCasesList(): Array<CaseObject>;
  setCasesList(value: Array<CaseObject>): void;
  addCases(value?: CaseObject, index?: number): CaseObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CaseList.AsObject;
  static toObject(includeInstance: boolean, msg: CaseList): CaseList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CaseList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CaseList;
  static deserializeBinaryFromReader(message: CaseList, reader: jspb.BinaryReader): CaseList;
}

export namespace CaseList {
  export type AsObject = {
    casesList: Array<CaseObject.AsObject>,
  }
}

export class FrontPageObject2 extends jspb.Message {
  getCasenumber(): number;
  setCasenumber(value: number): void;

  getCasename(): string;
  setCasename(value: string): void;

  getClientname(): string;
  setClientname(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCaseimportid(): number;
  setCaseimportid(value: number): void;

  getClienttype(): string;
  setClienttype(value: string): void;

  getSections(): number;
  setSections(value: number): void;

  getLaterals(): number;
  setLaterals(value: number): void;

  getManholes(): number;
  setManholes(value: number): void;

  getGroups(): number;
  setGroups(value: number): void;

  getSectionspercentage(): number;
  setSectionspercentage(value: number): void;

  getLateralspercentage(): number;
  setLateralspercentage(value: number): void;

  getManholespercentage(): number;
  setManholespercentage(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  getCaseid(): number;
  setCaseid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrontPageObject2.AsObject;
  static toObject(includeInstance: boolean, msg: FrontPageObject2): FrontPageObject2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrontPageObject2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrontPageObject2;
  static deserializeBinaryFromReader(message: FrontPageObject2, reader: jspb.BinaryReader): FrontPageObject2;
}

export namespace FrontPageObject2 {
  export type AsObject = {
    casenumber: number,
    casename: string,
    clientname: string,
    description: string,
    caseimportid: number,
    clienttype: string,
    sections: number,
    laterals: number,
    manholes: number,
    groups: number,
    sectionspercentage: number,
    lateralspercentage: number,
    manholespercentage: number,
    total: number,
    caseid: number,
  }
}

export class FrontPageObject extends jspb.Message {
  getCaseid(): number;
  setCaseid(value: number): void;

  getCasenumber(): number;
  setCasenumber(value: number): void;

  getCasename(): string;
  setCasename(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCaseimportid(): number;
  setCaseimportid(value: number): void;

  getImporttypeid(): number;
  setImporttypeid(value: number): void;

  getCustomername(): string;
  setCustomername(value: string): void;

  getImporttypename(): string;
  setImporttypename(value: string): void;

  getCasetypeid(): number;
  setCasetypeid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrontPageObject.AsObject;
  static toObject(includeInstance: boolean, msg: FrontPageObject): FrontPageObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrontPageObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrontPageObject;
  static deserializeBinaryFromReader(message: FrontPageObject, reader: jspb.BinaryReader): FrontPageObject;
}

export namespace FrontPageObject {
  export type AsObject = {
    caseid: number,
    casenumber: number,
    casename: string,
    description: string,
    caseimportid: number,
    importtypeid: number,
    customername: string,
    importtypename: string,
    casetypeid: number,
  }
}

export class FrontpageList extends jspb.Message {
  clearFpobjectsList(): void;
  getFpobjectsList(): Array<FrontPageObject>;
  setFpobjectsList(value: Array<FrontPageObject>): void;
  addFpobjects(value?: FrontPageObject, index?: number): FrontPageObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrontpageList.AsObject;
  static toObject(includeInstance: boolean, msg: FrontpageList): FrontpageList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrontpageList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrontpageList;
  static deserializeBinaryFromReader(message: FrontpageList, reader: jspb.BinaryReader): FrontpageList;
}

export namespace FrontpageList {
  export type AsObject = {
    fpobjectsList: Array<FrontPageObject.AsObject>,
  }
}

export class CaseUnitObject extends jspb.Message {
  getCaseunitid(): number;
  setCaseunitid(value: number): void;

  getCaseunitname(): string;
  setCaseunitname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CaseUnitObject.AsObject;
  static toObject(includeInstance: boolean, msg: CaseUnitObject): CaseUnitObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CaseUnitObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CaseUnitObject;
  static deserializeBinaryFromReader(message: CaseUnitObject, reader: jspb.BinaryReader): CaseUnitObject;
}

export namespace CaseUnitObject {
  export type AsObject = {
    caseunitid: number,
    caseunitname: string,
  }
}

export class UserObject extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getUserlogin(): string;
  setUserlogin(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserObject.AsObject;
  static toObject(includeInstance: boolean, msg: UserObject): UserObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserObject;
  static deserializeBinaryFromReader(message: UserObject, reader: jspb.BinaryReader): UserObject;
}

export namespace UserObject {
  export type AsObject = {
    userid: number,
    userlogin: string,
    username: string,
  }
}

export class PropertyUsabilityObject extends jspb.Message {
  getPropertyusabilityid(): number;
  setPropertyusabilityid(value: number): void;

  getPropertyusabilityname(): string;
  setPropertyusabilityname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyUsabilityObject.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyUsabilityObject): PropertyUsabilityObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyUsabilityObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyUsabilityObject;
  static deserializeBinaryFromReader(message: PropertyUsabilityObject, reader: jspb.BinaryReader): PropertyUsabilityObject;
}

export namespace PropertyUsabilityObject {
  export type AsObject = {
    propertyusabilityid: number,
    propertyusabilityname: string,
  }
}

export class CaseSystemObject extends jspb.Message {
  getCasesystemid(): number;
  setCasesystemid(value: number): void;

  getCasesystemname(): string;
  setCasesystemname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CaseSystemObject.AsObject;
  static toObject(includeInstance: boolean, msg: CaseSystemObject): CaseSystemObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CaseSystemObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CaseSystemObject;
  static deserializeBinaryFromReader(message: CaseSystemObject, reader: jspb.BinaryReader): CaseSystemObject;
}

export namespace CaseSystemObject {
  export type AsObject = {
    casesystemid: number,
    casesystemname: string,
  }
}

export class PropertyTypeObject extends jspb.Message {
  getPropertytypeid(): number;
  setPropertytypeid(value: number): void;

  getPropertytypename(): string;
  setPropertytypename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyTypeObject.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyTypeObject): PropertyTypeObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyTypeObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyTypeObject;
  static deserializeBinaryFromReader(message: PropertyTypeObject, reader: jspb.BinaryReader): PropertyTypeObject;
}

export namespace PropertyTypeObject {
  export type AsObject = {
    propertytypeid: number,
    propertytypename: string,
  }
}

export class RenovationAppendixObject extends jspb.Message {
  getRenovationappendixid(): number;
  setRenovationappendixid(value: number): void;

  getRenovationappendixprice(): string;
  setRenovationappendixprice(value: string): void;

  getManuel(): string;
  setManuel(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenovationAppendixObject.AsObject;
  static toObject(includeInstance: boolean, msg: RenovationAppendixObject): RenovationAppendixObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenovationAppendixObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenovationAppendixObject;
  static deserializeBinaryFromReader(message: RenovationAppendixObject, reader: jspb.BinaryReader): RenovationAppendixObject;
}

export namespace RenovationAppendixObject {
  export type AsObject = {
    renovationappendixid: number,
    renovationappendixprice: string,
    manuel: string,
    amount: number,
  }
}

export class StatusRepley extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getCommand(): number;
  setCommand(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRepley.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRepley): StatusRepley.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusRepley, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRepley;
  static deserializeBinaryFromReader(message: StatusRepley, reader: jspb.BinaryReader): StatusRepley;
}

export namespace StatusRepley {
  export type AsObject = {
    status: string,
    command: number,
  }
}

