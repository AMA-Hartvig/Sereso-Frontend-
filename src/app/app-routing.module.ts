import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseInformationComponent } from './case-information/case-information.component';
import { CaseShowCaseComponent } from './Case/case-show-case/case-show-case.component';

const routes: Routes = [{path:"hejhenning", component:CaseShowCaseComponent}, {path:"case-details", component:CaseInformationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
