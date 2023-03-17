import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseInformationComponent } from './Case/CaseInformation/case-information.component';
import { CaseShowCaseComponent } from './Case/case-show-case/case-show-case.component';
import { CaseInformationSectionDetailsComponent } from './Section/case-information-section-details/case-information-section-details.component';

const routes: Routes = [{path:"hejhenning", component:CaseShowCaseComponent}, {path:"case-details", component:CaseInformationComponent},
{path:"section-detail", component:CaseInformationSectionDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
