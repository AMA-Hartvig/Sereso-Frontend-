// package: SectionPB
// file: src/app/Protos/SectionPB.proto

import * as jspb from "google-protobuf";

export class SectionObject extends jspb.Message {
  getLateralid(): number;
  setLateralid(value: number): void;

  getCaseid(): number;
  setCaseid(value: number): void;

  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getDimension(): string;
  setDimension(value: string): void;

  getLength(): number;
  setLength(value: number): void;

  getMaterial(): string;
  setMaterial(value: string): void;

  getType(): string;
  setType(value: string): void;

  getLateral(): number;
  setLateral(value: number): void;

  getFi(): string;
  setFi(value: string): void;

  getDamage(): number;
  setDamage(value: number): void;

  getPriority(): number;
  setPriority(value: number): void;

  getRehab(): number;
  setRehab(value: number): void;

  getSectiontype(): string;
  setSectiontype(value: string): void;

  getSystem(): string;
  setSystem(value: string): void;

  getPosition(): string;
  setPosition(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  getReportnumber(): string;
  setReportnumber(value: string): void;

  getBst(): string;
  setBst(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getDirection(): string;
  setDirection(value: string): void;

  getCleaned(): string;
  setCleaned(value: string): void;

  getWeather(): string;
  setWeather(value: string): void;

  getInuse(): string;
  setInuse(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  getCarnumber(): string;
  setCarnumber(value: string): void;

  getCasenumber(): string;
  setCasenumber(value: string): void;

  getInspectionmethod(): string;
  setInspectionmethod(value: string): void;

  getMediaid(): string;
  setMediaid(value: string): void;

  getFromtype(): string;
  setFromtype(value: string): void;

  getTotype(): string;
  setTotype(value: string): void;

  getInspectionreason(): string;
  setInspectionreason(value: string): void;

  getSystemdocumentation(): string;
  setSystemdocumentation(value: string): void;

  getSystemmedia(): string;
  setSystemmedia(value: string): void;

  getPhysicalindex(): number;
  setPhysicalindex(value: number): void;

  getAmountofplugs(): string;
  setAmountofplugs(value: string): void;

  getExcept(): string;
  setExcept(value: string): void;

  getManholelateral(): string;
  setManholelateral(value: string): void;

  getPrework(): string;
  setPrework(value: string): void;

  getMilled(): string;
  setMilled(value: string): void;

  getLateraltypeid(): number;
  setLateraltypeid(value: number): void;

  getRenovationstatusid(): number;
  setRenovationstatusid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionObject.AsObject;
  static toObject(includeInstance: boolean, msg: SectionObject): SectionObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SectionObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionObject;
  static deserializeBinaryFromReader(message: SectionObject, reader: jspb.BinaryReader): SectionObject;
}

export namespace SectionObject {
  export type AsObject = {
    lateralid: number,
    caseid: number,
    from: string,
    to: string,
    status: string,
    dimension: string,
    length: number,
    material: string,
    type: string,
    lateral: number,
    fi: string,
    damage: number,
    priority: number,
    rehab: number,
    sectiontype: string,
    system: string,
    position: string,
    description: string,
    date: string,
    reportnumber: string,
    bst: string,
    address: string,
    direction: string,
    cleaned: string,
    weather: string,
    inuse: string,
    operator: string,
    carnumber: string,
    casenumber: string,
    inspectionmethod: string,
    mediaid: string,
    fromtype: string,
    totype: string,
    inspectionreason: string,
    systemdocumentation: string,
    systemmedia: string,
    physicalindex: number,
    amountofplugs: string,
    except: string,
    manholelateral: string,
    prework: string,
    milled: string,
    lateraltypeid: number,
    renovationstatusid: number,
  }
}

export class SectionList extends jspb.Message {
  clearSectionsList(): void;
  getSectionsList(): Array<SectionObject>;
  setSectionsList(value: Array<SectionObject>): void;
  addSections(value?: SectionObject, index?: number): SectionObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionList.AsObject;
  static toObject(includeInstance: boolean, msg: SectionList): SectionList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SectionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionList;
  static deserializeBinaryFromReader(message: SectionList, reader: jspb.BinaryReader): SectionList;
}

export namespace SectionList {
  export type AsObject = {
    sectionsList: Array<SectionObject.AsObject>,
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

