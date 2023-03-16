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


// Angular Materials End



import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectHandlerComponent } from './Handlers/project-handler/project-handler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseShowCaseComponent } from './Case/case-show-case/case-show-case.component';
import { CaseInformationComponent } from './case-information/case-information.component';
import { CaseInformationDetailsComponent } from './case-information/case-information-details/case-information-details/case-information-details.component';
import { SectionDetailsComponent } from './Section/SectionDetails/section-details/section-details.component';
import { CaseInformationSectionComponent } from './case-information/case-information-section/case-information-section/case-information-section.component';
import { CaseInformationSectionDetailsComponent } from './case-information/case-information-section/case-information-section-details/case-information-section-details/case-information-section-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectHandlerComponent,
    CaseShowCaseComponent,
    CaseInformationComponent,
    CaseInformationDetailsComponent,
    SectionDetailsComponent,
    CaseInformationSectionComponent,
    CaseInformationSectionDetailsComponent


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



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
