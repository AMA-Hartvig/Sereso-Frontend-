import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CaseService } from 'src/app/Services/case.service';
import { FrontPageObject } from '../../generated/CasePB/CasePB_pb';
import { SectionService } from 'src/app/Services/section.service';
import {
  StatusRepley,
  SectionList,
  SectionObject,
} from 'src/app/generated/Sections/SectionPB_pb';
import { CDK_ROW_TEMPLATE } from '@angular/cdk/table';
import { Router } from '@angular/router';

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

  @Input() CaseNumber = this.caseService.SelectedFrontPageObject$.value;
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
/*     this.sectionService.GetSectionListFromCaseNumber$.subscribe(x => {
      this.sectionList = x;
      this.sectionDatasource.data = this.sectionList!.getSectionsList();
    }) */

    this.caseService.numberTest$.subscribe(x => {
      if (x != 0) {
        this.sectionService.GetSectionListFromCaseNumber(
          this.CaseNumber.getCasenumber()

        );


      }
    });


    this.subscription.push(
      this.sectionService.GetSectionListFromCaseNumber$.subscribe(y => {
        this.sectionResultSet = y.getSectionsList();

        if (this.CaseNumber.getCasenumber() != 0) {
          this.sectionList = y;
        }
        this.sectionDatasource.data = this.sectionList!.getSectionsList();
      })
    );
  }


    /* this.statusRepley.setCommand(this.caseID); */
/*
    this.subscription.push(
      this.sectionService.GetAllSections$.subscribe(y => {
        this.sectionResultSet = y.getSectionsList();

        if (this.CaseNumber.getCasenumber() != 0) {
          this.sectionList = y;
        }

      })
    ); */
  }

  GetCaseDetails(item: SectionObject) {
    this.sectionService.GetSpecificSection$.next(item);
    this.route.navigateByUrl('section-detail');
  }

  ngOnInit(): void {}
}
