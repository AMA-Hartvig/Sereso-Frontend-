import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CaseService } from 'src/app/Services/case.service';
import { FrontPageObject } from '../../../generated/CasePB/CasePB_pb';
import { SectionService } from 'src/app/Services/section.service';
import {
  StatusRepley,
  SectionList,
  SectionObject
} from 'src/app/generated/Sections/SectionPB_pb';
import { CDK_ROW_TEMPLATE } from '@angular/cdk/table';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-case-information-section',
  templateUrl: './case-information-section.component.html',
  styleUrls: ['./case-information-section.component.css']
})
export class CaseInformationSectionComponent implements OnInit {
  displayedColumnsForCaseDetails = [
    'From',
    'To',
    'Status',
    'DIM',
    'Length',
    'Material',
    'Type',
    'Lat',
    'FI',
    'DAM',
    'Priority',
    'Section Type'
  ];

  @Input() frontCaseObject = this.caseService.SelectedFrontPageObject$.value;
  sectionObject?: SectionObject;
  sectionList?: SectionList;
/*   sectionDatasource = new MatTableDataSource<SectionObject>(
    new Array<SectionObject>()
  ); */

  sectionDatasource = new MatTableDataSource<SectionObject>();

  caseID!: number;
  statusRepley = new StatusRepley();

  sectionResultSet = new Array<SectionObject>();

  subscription = new Array<Subscription>();
  caseDetailsDatasource = new MatTableDataSource<FrontPageObject>();

  constructor(
    private caseService: CaseService,
    private sectionService: SectionService,
    private route: Router
  ) {
    this.caseService.numberTest$.subscribe(x => {
      console.log("this is the number" + x );
      if (x != 0) {

        /* this.sectionService.GetSectionListFromCaseNumber(this.frontCaseObject.getCaseimportid());
 */        this.sectionService.GetSectionListFromCaseNumber(x);


        this.caseDetailsDatasource.data.push(this.frontCaseObject);
      }
    });

    this.statusRepley.setCommand(this.caseID);

    this.subscription.push(
      this.sectionService.GetSectionListFromCaseNumber$.subscribe(y => {

        this.sectionResultSet = y.getSectionsList();

/* y.getSectionsList().forEach(element => {
  this.caseResultSet.push(element)


});
*/

        /* this.caseResultSet = y.getSectionsList(); */
        if (this.frontCaseObject.getCasenumber() != 0) {

          this.sectionList = y;
        }


    /*     y.getSectionsList().forEach(element => {
          this.sectionDatasource.data.push(element)
        }); */

        /* this.sectionDatasource.data.push( this.caseResultSet.pop()) ; */

        this.sectionList?.getSectionsList().forEach(element => {
          this.sectionObject = element;
           /*  console.log(element.toString()) */
          this.sectionDatasource.data.push(this.sectionObject) ;
        });



    /*     this.sectionDatasource.data = y.getSectionsList(); */
        /* y.getSectionsList().forEach(element => {
          this.sectionDatasource.data.push(element);
        }); */
      })
    );
  }

  GetCaseDetails(item:SectionObject) {
    this.sectionService.GetSpecificSection$.next(item);
    this.route.navigateByUrl('section-detail');
  }



  ngOnInit(): void {}
}
