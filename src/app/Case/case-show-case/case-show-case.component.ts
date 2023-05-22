import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {  CaseService } from '../../Services/case.service';
import { LoadingService } from '../../Services/loading.service';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { CaseObject, CaseList, FrontPageObject } from 'src/app/generated/CasePB/CasePB_pb';
import { event } from 'jquery';


@Component({
  selector: 'app-case-show-case',
  templateUrl: './case-show-case.component.html',
  styleUrls: ['./case-show-case.component.css']
})
export class CaseShowCaseComponent implements OnInit ,AfterViewInit {

  displayedColumnsForFrontPageCase = ['Case Number', 'ProjectName', 'ClientName', 'Description', 'ClientType', 'ImportType', 'Sections', 'Laterals', 'Manholes'];

  displayedColumnsKunde = ['navn', 'adresse', 'by'];

  caseDatasource = new MatTableDataSource<CaseObject>();
  frontDatasource = new MatTableDataSource<FrontPageObject>();

  caseresultSet = new Array<CaseObject>();
 frontresultSet = new Array<FrontPageObject>();

  /* @Output() caseEmit = new EventEmitter<FrontPageObject>();  */


  /* @Output() caseEmit = new EventEmitter<FrontPageObject>(); */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild("caseTableSort", { read: MatSort }) sort!: MatSort;

  isLoading = this.spinner.isLoading$;
  FilterOptions = new Array<string>();


  constructor(private caseService: CaseService, private spinner: LoadingService, private route: Router) {

//
    this.caseService.GetFrontPageObjects();
    this.caseService.GetFrontPageObjects$.subscribe(x => {
      this.frontresultSet = x.getFpobjectsList();

      if(this.caseService.caseResult.length >= 1){
        this.frontDatasource.data = this.caseService.frontResult;
        this.spinner.stopLoading();
        return;

      }
      this.frontDatasource.data = x.getFpobjectsList();
      this.FilterOptions = new Array<any>();

      this.spinner.stopLoading();
    });

   }


  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.frontDatasource.filter = filterValue.trim().toLowerCase();
  };

  GetCaseDetails(item:FrontPageObject) {
    /* console.log(item); */
    this.caseService.numberTest$.next(item.getCaseimportid())
    this.caseService.SelectedFrontPageObject$.next(item);


    this.route.navigateByUrl('case-details');
  };
}
