import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CaseService } from 'src/app/Services/case.service';
import { FrontPageObject } from '../../../generated/CasePB/CasePB_pb';
import { SectionService } from 'src/app/Services/section.service';
import { StatusRepley, SectionList, SectionObject } from 'src/app/generated/Sections/SectionPB_pb';
import { CDK_ROW_TEMPLATE } from '@angular/cdk/table';


@Component({
  selector: 'app-case-information-section',
  templateUrl: './case-information-section.component.html',
  styleUrls: ['./case-information-section.component.css']
})
export class CaseInformationSectionComponent implements OnInit {
  displayedColumnsForCaseDetails = ['From', 'To', 'Status', 'DIM', 'Length', 'Material', 'Type', 'Lat', 'FI' , 'DAM', 'Priority', 'Section Type'];

  @Input() frontCaseObject = this.caseService.SelectedFrontPageObject$.value;
  sectionObject!: SectionObject;
  sectionList!: SectionList;
  sectionDatasource = new MatTableDataSource<SectionObject>(new Array<SectionObject>());




  caseID!: number;
  statusRepley = new StatusRepley;

  caseResultSet = new Array<SectionObject>();

  subscription = new Array<Subscription>();
  caseDetailsDatasource = new MatTableDataSource<FrontPageObject>();

  constructor(private caseService:CaseService, private sectionService:SectionService) {

    this.caseService.numberTest$.subscribe(x => {
      if(x!= 0){
        this.sectionService.GetSectionListFromCaseNumber(x)
        console.log(x);
        this.caseDetailsDatasource.data.push(this.frontCaseObject);
      }
    })
         this.statusRepley.setCommand(this.caseID)

          this.subscription.push(this.sectionService.GetSectionListFromCaseNumber$.subscribe(y => {
           /* this.caseResultSet = y.getSectionsList(); */
           if(this.frontCaseObject.getCasenumber() != 0){
           }
           this.sectionList = y;

           this.sectionDatasource.data = y.getSectionsList();
          }))
   }

   GetSpecificInformation(){


   }

  ngOnInit(): void {
  }

}
