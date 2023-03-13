import { Component, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {CaseShowCaseComponent,  } from '../Case/case-show-case/case-show-case.component';
import { FrontPageObject } from '../generated/CasePB/CasePB_pb';
import { Subscription } from 'rxjs';
import {  CaseService } from '../Services/case.service';

@Component({
  selector: 'app-case-information',
  templateUrl: './case-information.component.html',
  styleUrls: ['./case-information.component.css']
})
export class CaseInformationComponent implements OnInit {
  frontDatasource = new MatTableDataSource<FrontPageObject>();




  @Output() frontCaseObject = new FrontPageObject();


  subscription = new Array<Subscription>();

  constructor(private caseService:CaseService) {
    this.subscription.push(this.caseService.SelectedFrontPageObject$.subscribe(x => {
      this.frontCaseObject = x;
/*       console.log(this.frontCaseObject.getCasename);
      console.log(this.frontCaseObject.getCasenumber);
      console.log(this.frontCaseObject.getDescription); */
    }))


   };

   ngOnInit(): void {

   }

   ngOnDestroy(): void {
    this.subscription.forEach(x => {
      x.unsubscribe();
    });
  };

}
