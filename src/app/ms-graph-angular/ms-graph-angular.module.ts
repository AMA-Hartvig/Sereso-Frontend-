import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MSGraphService } from '../Services/msgraph.service';
import { MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { AuthenticationResult, EventType, InteractionType, LogLevel, PublicClientApplication } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const msalConfig = {
  auth: {
    clientId: environment.config.Graphclientid,
    authority: "https://login.microsoftonline.com/organizations",
    knownAuthorities: [],
    //redirectUri: environment.config.graphurl,
    postLogoutRedirectUri: environment.config.graphurlsignOut,
    navigateToLoginRequestUrl: true,

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
            /* console.error(message); */
            return;
          // case LogLevel.Info:
          //   console.info(message);
          //   return;
          // case LogLevel.Verbose:
          //   console.debug(message);
          //   return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
      piiLoggingEnabled: false,
    },
    windowHashTimeout: 60000,
    iframeHashTimeout: 6000,
    loadFrameTimeout: 0,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MsalModule.forRoot(msalInstance,
      {
        interactionType: InteractionType.Popup, authRequest: {
          scopes: ['user.read'],
        }, loginFailedRoute: environment.config.loginFailedRoute
      },
      {
        interactionType: InteractionType.Popup,
        protectedResourceMap: new Map([['https://graph.microsoft.com/v1.0/User/', ['user.read']]])
      })
  ]
  , providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true
  }],
})
export class MsGraphAngularModule {

  constructor() {
    this.t();
  }
  public t() {
    msalInstance.addEventCallback((event) => {
      switch (event.eventType) {
        case EventType.LOGIN_SUCCESS:
          let username = (event.payload as AuthenticationResult).account?.username;
          break;
        case EventType.LOGIN_FAILURE:
          // sessionStorage.clear();
          // this.logedIn$.next(false);
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
        case EventType.LOGOUT_END:
          console.log("Logoutend is now born")
          break;
        case EventType.HANDLE_REDIRECT_START:
          console.log("Redirect is now born")
          break;
        case EventType.POPUP_OPENED:
          console.log("Pop_Up is open");
          break;
        case EventType.LOGIN_START:
          console.log("Login_Started");
          break;
          case EventType.ACQUIRE_TOKEN_SUCCESS:
            // this.jwt.GetAccesToken(msalInstance.getActiveAccount()?.username);
            break;
        default:
          console.log("this event is not handeld" + event.eventType)
          break;
      }


    })
    // this.msalInstance
    //   .handleRedirectPromise()
    //   .then(tokenResponse => {
    //     // this.logedIn$ = tokenResponse.
    //     console.log("TokenResponse " + tokenResponse);
    //   })
    //   .catch((error) => {
    //     alert(error)
    //   });
  }

}
