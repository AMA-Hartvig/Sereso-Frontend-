import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CaseService } from 'src/app/Services/case.service';
import { FrontPageObject } from '../../generated/CasePB/CasePB_pb';

import { SectionService } from 'src/app/Services/section.service';
import { StatusRepley, SectionList, SectionObject } from 'src/app/generated/Sections/SectionPB_pb';
import { Value } from '@ngx-grpc/well-known-types';
import { CDK_ROW_TEMPLATE } from '@angular/cdk/table';

@Component({
  selector: 'app-case-information-details',
  templateUrl: './case-information-details.component.html',
  styleUrls: ['./case-information-details.component.css']
})
export class CaseInformationDetailsComponent implements OnInit {
  displayedColumnsForCaseDetails = ['From', 'To', 'Status', 'DIM', 'Length', 'Material', 'Type', 'Lat', 'FI' , 'DAM', 'Priority', 'Section Type'];

  @Input() frontCaseObject!: FrontPageObject;

  caseID!: number;
  statusRepley = new StatusRepley;


  sectionObject = new SectionObject;
  subscription = new Array<Subscription>();
  caseDetailsDatasource = new MatTableDataSource<FrontPageObject>();

  constructor(private caseService:CaseService, sectionService:SectionService) {
    this.subscription.push(this.caseService.SelectedFrontPageObject$.subscribe(x => {
      this.frontCaseObject = x;
      this.caseDetailsDatasource.data.push(this.frontCaseObject);

    }))



/*     constructor(public dialogRef: MatDialogRef<AssigmentListModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, private assignemnetService: AssignmentService) {
      this.dataprojekt = this.data.projekt;
      this.assignemnetService.GetAssignmentOnProjket(this.dataprojekt.getProjektnr());
      this.assignemnetService.projektAssignmentList$.subscribe(x => {
        this.matdatasource.data = new Array<Assignment>();
        x.getAssignmentlistList().forEach((item, index) => {
          this.matdatasource.data.push(item);
        }) */


        this.caseID = this.frontCaseObject.getCaseid();

          console.log(" frontcaseobject" + this.caseID)

        this.statusRepley.setCommand(this.caseID)
         sectionService.GetSpecificSection(this.statusRepley)




   }

   GetSpecificInformation(){

   }

  ngOnInit(): void {
  }

}
