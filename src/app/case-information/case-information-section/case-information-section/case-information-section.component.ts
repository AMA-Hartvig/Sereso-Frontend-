import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CaseService } from 'src/app/Services/case.service';
import { FrontPageObject } from '../../../generated/CasePB/CasePB_pb';
import { SectionService } from 'src/app/Services/section.service';
import { StatusRepley, SectionList, SectionObject } from 'src/app/generated/Sections/SectionPB_pb';


@Component({
  selector: 'app-case-information-section',
  templateUrl: './case-information-section.component.html',
  styleUrls: ['./case-information-section.component.css']
})
export class CaseInformationSectionComponent implements OnInit {
  displayedColumnsForCaseDetails = ['From', 'To', 'Status', 'DIM', 'Length', 'Material', 'Type', 'Lat', 'FI' , 'DAM', 'Priority', 'Section Type'];

  @Input() frontCaseObject!: FrontPageObject;
  sectionObject!: SectionObject;
  sectionDatasource = new MatTableDataSource<SectionObject>();

  caseID!: number;
  statusRepley = new StatusRepley;

  caseResultSet = new Array<SectionObject>();

  subscription = new Array<Subscription>();
  caseDetailsDatasource = new MatTableDataSource<FrontPageObject>();

  constructor(private caseService:CaseService, private sectionService:SectionService) {

    this.subscription.push(this.caseService.SelectedFrontPageObject$.subscribe(x => {
      this.frontCaseObject = x;
      console.log(x.getCaseid);
      this.caseDetailsDatasource.data.push(this.frontCaseObject);

    }))

        this.caseID = this.frontCaseObject.getCaseid();



         this.statusRepley.setCommand(this.caseID)
         this.sectionService.GetSectionListFromCaseNumber(this.statusRepley)
          this.subscription.push(this.sectionService.GetSectionListFromCaseNumber$.subscribe(y => {
           this.caseResultSet = y.getSectionsList();
           this.caseResultSet.forEach(element => {
           this.sectionDatasource.data.push(element)
           console.log(element.getFrom)

           });
          }))
   }

   GetSpecificInformation(){


   }

  ngOnInit(): void {
  }

}
