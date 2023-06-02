import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SectionObject } from 'src/app/generated/Sections/SectionPB_pb';
import { SectionService } from 'src/app/Services/section.service';

@Component({
  selector: 'app-section-information',
  templateUrl: './section-information.component.html',
  styleUrls: ['./section-information.component.css']
})
export class SectionInformationComponent implements OnInit {
  sectionObject: SectionObject = new SectionObject();

  formgroup = new FormGroup({
    getSectionCode: new FormControl(0),
    getFrom: new FormControl(0)
  });

  constructor(
    private sectionService: SectionService,
    private _formBuilder: FormBuilder
  ) {
    this.sectionService.GetSpecificSection$.subscribe(x => {
      this.sectionObject = x;
      console.log(x);
      this.formgroup.get('getSectionCode')!.setValue(x.getInspectionSectionnumber());
      this.formgroup.get('getFrom')!.setValue(x.getFrom());
    });
  }
  ngOnInit(): void { }
}
