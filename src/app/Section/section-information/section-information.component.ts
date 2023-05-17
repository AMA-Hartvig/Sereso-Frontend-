import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SectionObject } from 'src/app/generated/Sections/SectionPB_pb';
import { SectionService } from 'src/app/Services/section.service';

@Component({
  selector: 'app-section-information',
  templateUrl: './section-information.component.html',
  styleUrls: ['./section-information.component.css']
})
export class SectionInformationComponent implements OnInit {

  @Input() SectionObject = this.sectionService.GetSpecificSection$.value
  /*
  @Input() SectionFrontObject = this.sectionService.GetSpecificSection$.value */

    sectionDatasource = new MatTableDataSource<SectionObject>();

  constructor(private sectionService: SectionService) {
    this.sectionDatasource.data.push(this.SectionObject);

   }


  ngOnInit(): void {
  }

}
