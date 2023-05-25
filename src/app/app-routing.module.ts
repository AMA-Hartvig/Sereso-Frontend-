import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseInformationComponent } from './Case/CaseInformation/case-information.component';
import { CaseShowCaseComponent } from './Case/case-show-case/case-show-case.component';
import { CaseInformationSectionDetailsComponent } from './Section/case-information-section-details/case-information-section-details.component';
import { SectionInformationComponent } from './Section/section-information/section-information.component';
import { ModenLoginComponent } from './ModenLogin/ModenLogin.component';
import { MsalGuardGuard } from './Guard/msal-guard.guard';

const routes: Routes = [
  {path:"Cases", component:CaseShowCaseComponent,canActivate: [MsalGuardGuard]},
  {path:"case-details", component:CaseInformationComponent,canActivate: [MsalGuardGuard]},
{path:"section-detail", component:SectionInformationComponent,canActivate: [MsalGuardGuard]},
{
  path: '',
  component: ModenLoginComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
