import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { EventType, LogLevel, PublicClientApplication } from '@azure/msal-browser';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})

export class MSGraphService {
  msalConfig = {
    auth: {
      clientId: environment.config.Graphclientid,
      authority: "https://login.microsoftonline.com/organizations",
      knownAuthorities: [],
      postLogoutRedirectUri: environment.config.loginFailedRoute,
      navigateToLoginRequestUrl: false
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
    },
    system: {
      loggerOptions: {
        loggerCallback: (
          level: LogLevel,
          message: string,
          containsPii: boolean
        ): void => {
          if (containsPii) {
            return;
          }
          switch (level) {
            case LogLevel.Error:
              console.error(message);
              return;
            case LogLevel.Info:
              console.info(message);
              return;
            case LogLevel.Verbose:
              console.debug(message);
              return;
            case LogLevel.Warning:
              console.warn(message);
              return;
          }
        },
        piiLoggingEnabled: false,
      },
      windowHashTimeout: 60000,
      iframeHashTimeout: 6000,
      loadFrameTimeout: 0
    },
  };

  tokenTest = "";
  logedIn$ = new BehaviorSubject<boolean>(true);
  public msalInstance = new PublicClientApplication(this.msalConfig);
  constructor(private spinner: LoadingService, private msalService: MsalService, private route: Router, private httpClient: HttpClient) {
  };

  public GetUserName(): String {
    let resultName = "";
    this.msalService.instance.getAllAccounts().forEach(x => {
      if (x.username.length > 1)
        resultName = x.username.split("@")[0];
    });
    return resultName;
  };

  public MsalPopUpLogin() {
    this.spinner.StartLoading();
    this.msalService.loginPopup().subscribe(x => {
      this.msalInstance.setActiveAccount(x.account);
      this.logedIn$.next(true);
    });
  };

  public MsalCalenderTest() {

    return;
  }

  public MsalPopUpLogOut() {
    this.msalService.logoutPopup().subscribe(x => {
      this.route.navigateByUrl("/");
      sessionStorage.clear();
      this.logedIn$.next(false);
    });
  };

  public t() {
    this.msalInstance.addEventCallback((event) => {
      switch (event.eventType) {
        case EventType.LOGIN_SUCCESS:
          this.logedIn$.next(true);
          break;
        case EventType.LOGIN_FAILURE:
          break;
        case EventType.SSO_SILENT_FAILURE:
          alert("SSO Silent Failure")
          break;
        case EventType.LOGOUT_FAILURE:
          alert("Sign out failed.. contact IT-Admins")
          break;
        case EventType.LOGOUT_SUCCESS:
          console.log("Signout as succened..");
          break;
        case EventType.HANDLE_REDIRECT_END:
          console.log("Redirect is at its end.")
          break;
        case EventType.HANDLE_REDIRECT_START:
          console.log("Redirect is now born")
          break;
        default:
          console.log('eventtype ' + event.eventType + ' is not beeing handled. (Line 167:msgraphService)')
          break;
      };
    });
    // this.msalInstance
    //   .handleRedirectPromise()
    //   .then(tokenResponse => {
    //     // this.logedIn$ = tokenResponse.
    //     console.log("TokenResponse " + tokenResponse);
    //   })
    //   .catch((error) => {
    //     alert(error)
    //   });
  };

  IsLogedIn(): boolean {

    if (this.msalInstance.getAllAccounts().length <= 0 ) {
      this.logedIn$.next(false);
      return false;
    };
    if (this.msalInstance.getAllAccounts() != undefined ) {
      this.logedIn$.next(true);
      return true
    }
    return false;
  };

  // 47ef611a-4138-4e64-ae1e-c4955da11160 - Administration
  // fd7b705a-8d70-471d-81b1-87211c34b016 - Ledelse
  //c080bae0-c409-4f76-8ae2-9d60770db21a - Ledelse-Admins
  // a1c89356-d811-440e-aece-2998dafff7ae - Marketing
  IsInAdminGroup(): boolean {
    return true;
  };

  IsInEpAdminGroup(): boolean {
    return true;
  };
};
