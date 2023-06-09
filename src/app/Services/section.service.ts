import { Injectable } from '@angular/core';
import {environment} from '../Environment/Environment'
import {SectionObject, SectionList, StatusRepley, SectionInformationList} from '../generated/Sections/SectionPB_pb'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { grpc } from '@improbable-eng/grpc-web';
import { SectionPBService } from '../generated/Sections/SectionPB_pb_service';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  hostAddress = environment.config.apiUrl;

  sectionResult = new Array<SectionObject>();

  GetAllSections$ = new BehaviorSubject<SectionList>(new SectionList());
  GetSpecificSection$ = new BehaviorSubject<SectionObject>(new SectionObject());
  GetSectionListFromCaseNumber$ = new BehaviorSubject<SectionInformationList>(new SectionInformationList());

  constructor(private httpclient: HttpClient) {


  }

  public GetSectionList() {
    let requst = new StatusRepley();
    grpc.invoke(SectionPBService.GetAllSections, {
      request: requst,
      host: this.hostAddress,
      onMessage: (Message: SectionList) => {
        this.GetAllSections$.next(Message);
      },
      onEnd: (res) => {

      },
    });
  }

  public GetSpecificSection(status : number) {
    let requst = new StatusRepley();
    requst.setCommand(status);
    grpc.invoke(SectionPBService.GetSpecificSection, {
      request: requst,
      host: this.hostAddress,
      onMessage: (Message: SectionObject) => {
        this.GetSpecificSection$.next(Message);
      },
      onEnd: (res) => {

      },
    });
  }

  public GetSectionListFromCaseNumber(status :number) {
    let requst = new StatusRepley();
    console.log(status)
    requst.setCommand(status);
    grpc.invoke(SectionPBService.GetSectionListFromCaseNumber, {
      request: requst,
      host: this.hostAddress,
      onMessage: (Message: SectionInformationList) => {
        this.GetSectionListFromCaseNumber$.next(Message);

      },
      onEnd: (res) => {
      },
    });
  }




}
