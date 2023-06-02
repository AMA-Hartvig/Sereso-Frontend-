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

  //@Input("SectionObject") SectionObject:SectionObject = this.sectionService.GetSpecificSection$.value
  /*
  @Input() SectionFrontObject = this.sectionService.GetSpecificSection$.value */

    sectionDatasource = new MatTableDataSource<SectionObject>();
    sectionObject:SectionObject = new SectionObject();
  constructor(private sectionService: SectionService) {
    this.sectionService.GetSpecificSection$.subscribe(x => {
      this.sectionObject = x;
      console.log(x)
      this.sectionDatasource.data.push(this.sectionObject);
    })

   }


  ngOnInit(): void {
  }

}
