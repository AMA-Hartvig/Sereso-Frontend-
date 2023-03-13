import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from './loading.service';
import {CaseObject, CaseList, StatusRepley, FrontPageObject, FrontpageList} from '../generated/CasePB/CasePB_pb'
import {CasePBService} from '../generated/CasePB/CasePB_pb_service'
import { grpc } from '@improbable-eng/grpc-web';
import {environment} from '../Environment/Environment'


@Injectable({
  providedIn: 'root'
})
export class CaseService {

  hostAddress = environment.config.apiUrl;

  caseResult = new Array<CaseObject>();

  frontResult = new Array<FrontPageObject>();


  GetAllCases$ = new BehaviorSubject<CaseList>(new CaseList());
  GetFrontPageObjects$ = new BehaviorSubject<FrontpageList>(new FrontpageList());
  SelectedFrontPageObject$ = new BehaviorSubject<FrontPageObject>(new FrontPageObject());
  SelecetedCase$ = new BehaviorSubject<CaseObject>(new CaseObject());

  constructor(private httpclient: HttpClient, private spinner: LoadingService) { }


  public GetAllCases() {
    this.spinner.StartLoading();
    let requst = new StatusRepley();
    grpc.invoke(CasePBService.GetAllCases, {
      request: requst,
      host: this.hostAddress,
      onMessage: (Message: CaseList) => {
        this.GetAllCases$.next(Message);
        // new BehaviorSubject<CaseObject>(new CaseList());
        // this.PickedCustomoer$.next(Message.getCustomerlistList()[0])
/*         console.log("Got Data" + Message); */
      },
      onEnd: (res) => {
        this.spinner.stopLoading();
      },
    });
  }

  public GetFrontPageObjects() {
    this.spinner.StartLoading();
    let requst = new StatusRepley();
    grpc.invoke(CasePBService.GetFrontPageObjects, {
      request: requst,
      host: this.hostAddress,
      onMessage: (Message: FrontpageList) => {
        this.GetFrontPageObjects$.next(Message);
        // new BehaviorSubject<CaseObject>(new CaseList());
        // this.PickedCustomoer$.next(Message.getCustomerlistList()[0])
  /*       console.log("Got Data" + Message); */
      },
      onEnd: (res) => {
        this.spinner.stopLoading();
      },
    });
  }



}
