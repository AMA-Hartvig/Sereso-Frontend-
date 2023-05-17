import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-information',
  templateUrl: './action-information.component.html',
  styleUrls: ['./action-information.component.css']
})
export class ActionInformationComponent implements OnInit {

  displayedColumnsForCaseSectionDetails = ['MTR', 'Code', 'Observation', 'Endpoint', 'Status', 'Unit', 'Width', 'Material', 'Found' , 'DIM', 'Found2'];

  constructor() { }

  ngOnInit(): void {
  }

}
