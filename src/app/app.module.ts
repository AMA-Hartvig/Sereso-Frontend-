import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
// Angular Materials Start
//Angular matrials imports
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DateAdapter, MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTreeModule } from '@angular/material/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatBadgeModule } from '@angular/material/badge'
import { MsGraphAngularModule } from './ms-graph-angular/ms-graph-angular.module';
import {ModenLoginComponent} from './ModenLogin/ModenLogin.component'
import {FancyLoaderComponent  } from './fancy-loader/fancy-loader.component';
// Angular Materials End



import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseShowCaseComponent } from './Case/case-show-case/case-show-case.component';
import { CaseInformationComponent } from './Case/CaseInformation/case-information.component';
import { CaseInformationDetailsComponent } from './Case/case-information-details/case-information-details.component';
import { CaseInformationSectionComponent } from './Case/case-information-section/case-information-section.component';
import { CaseInformationSectionDetailsComponent } from './Section/case-information-section-details/case-information-section-details.component';
import { ActionInformationComponent } from './Action/action-information/action-information.component';
import { SectionInformationComponent } from './Section/section-information/section-information.component';
import { ActionListComponent } from './Action/action-list/action-list.component';
import { ActionFiltersComponent } from './Action/action-filters/action-filters.component';
import { ActionAddedComponent } from './Action/action-added/action-added.component';
import { VisualPresentatorComponent } from './VisualMedia/visual-presentator/visual-presentator.component';


@NgModule({
  declarations: [
    AppComponent,
    CaseShowCaseComponent,
    CaseInformationComponent,
    CaseInformationDetailsComponent,
    CaseInformationSectionComponent,
    CaseInformationSectionDetailsComponent,
    ActionInformationComponent,
    SectionInformationComponent,
    ActionListComponent,
    ActionFiltersComponent,
    ActionAddedComponent,
    VisualPresentatorComponent,
    ModenLoginComponent,
    FancyLoaderComponent,
  ],
  imports: [
    BrowserModule,
    MatTreeModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatBadgeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ClipboardModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    DragDropModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatMenuModule,
    MatStepperModule,
    MatRippleModule,
    FlexLayoutModule,
    MsGraphAngularModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
