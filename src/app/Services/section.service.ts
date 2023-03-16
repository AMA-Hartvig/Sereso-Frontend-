import { Injectable } from '@angular/core';
import {environment} from '../Environment/Environment'
import {SectionObject, SectionList, StatusRepley} from '../generated/Sections/SectionPB_pb'
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
  GetSectionListFromCaseNumber$ = new BehaviorSubject<SectionList>(new SectionList());

  constructor(private httpclient: HttpClient) {


  }

  public GetSectionList() {

    let requst = new StatusRepley();
    grpc.invoke(SectionPBService.GetAllSections, {
      request: requst,
      host: this.hostAddress,
      onMessage: (Message: SectionList) => {
        this.GetAllSections$.next(Message);

        // new BehaviorSubject<CaseObject>(new CaseList());
        // this.PickedCustomoer$.next(Message.getCustomerlistList()[0])
/*         console.log("Got Data" + Message); */
      },
      onEnd: (res) => {

      },
    });
  }

  public GetSpecificSection(status :StatusRepley) {

    let requst = new StatusRepley();
    grpc.invoke(SectionPBService.GetSpecificSection, {
      request: requst,
      host: this.hostAddress,
      onMessage: (Message: SectionObject) => {
        this.GetSpecificSection$.next(Message);
        // new BehaviorSubject<CaseObject>(new CaseList());
        // this.PickedCustomoer$.next(Message.getCustomerlistList()[0])
/*         console.log("Got Data" + Message); */
      },
      onEnd: (res) => {

      },
    });
  }

  public GetSectionListFromCaseNumber(status :number) {
    this.GetSectionListFromCaseNumber$.next(new SectionList());
    let requst = new StatusRepley();
    requst.setCommand(status);
    console.log(status)
    grpc.invoke(SectionPBService.GetSectionListFromCaseNumber, {
      request: requst,
      host: this.hostAddress,
      onMessage: (Message: SectionList) => {
        this.GetSectionListFromCaseNumber$.next(Message);
          console.log(Message);
        // new BehaviorSubject<CaseObject>(new CaseList());
        // this.PickedCustomoer$.next(Message.getCustomerlistList()[0])

      },
      onEnd: (res) => {
      },
    });
  }




}
