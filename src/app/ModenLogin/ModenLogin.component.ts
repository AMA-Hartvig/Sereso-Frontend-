import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/Services/loading.service';
import { MSGraphService } from 'src/app/Services/msgraph.service';

@Component({
  selector: 'app-ModenLogin',
  templateUrl: './ModenLogin.component.html',
  styleUrls: ['./ModenLogin.component.css']
})
export class ModenLoginComponent implements OnInit {

  UserIsSignedIn = this.msGraphService.logedIn$;
  isIframe = false;
  isLoading = this.spinner.isLoading$;

  constructor(private spinner:LoadingService,private _formbuilder: FormBuilder, private route: Router, private msGraphService: MSGraphService) {
  }

  ngOnInit(): void {

  }
  loginmsal() {
    this.msGraphService.MsalPopUpLogin()
  }

  logoutmsal() {
    this.msGraphService.MsalPopUpLogOut();
  }

  islogedIn() {
    return this.msGraphService.IsLogedIn()
  }

}
