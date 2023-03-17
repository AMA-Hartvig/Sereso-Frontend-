import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  StatusRepley,
  SectionList,
  SectionObject
} from 'src/app/generated/Sections/SectionPB_pb';
import { SectionService } from 'src/app/Services/section.service';

@Component({
  selector: 'app-case-information-section-details',
  templateUrl: './case-information-section-details.component.html',
  styleUrls: ['./case-information-section-details.component.css']
})
export class CaseInformationSectionDetailsComponent implements OnInit {

  displayedColumnsForCaseSectionDetails = ['MTR', 'Code', 'Observation', 'Endpoint', 'Status', 'Unit', 'Width', 'Material', 'Found' , 'DIM', 'Found2'];

  @Input() SectionObject = this.sectionService.GetSpecificSection$.value

  sectionDatasource = new MatTableDataSource<SectionObject>();

  constructor(    private sectionService: SectionService) {
    this.sectionDatasource.data.push(this.SectionObject);

   }

  ngOnInit(): void {
  }

}
