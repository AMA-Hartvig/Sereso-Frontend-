import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {

  /* actionListDatasource = new MatTableDataSource<ActionObject>(); */

  displayedColumnsForActionList = ['Code', 'Geo', 'Description', 'Unit'];


  constructor() { }

  ngOnInit(): void {
  }

}
