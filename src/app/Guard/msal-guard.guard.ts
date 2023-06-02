import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../Services/loading.service';
import { MSGraphService } from '../Services/msgraph.service';

const timerout = (sec: number) =>
  new Promise(r => {
    setTimeout(r, sec);
  });

@Injectable({
  providedIn: 'root'
})
export class MsalGuardGuard implements CanActivate {
  constructor(
    private spinner: LoadingService,
    private router: Router,
    private msGraphService: MSGraphService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;

    if (this.msGraphService.msalInstance.getActiveAccount() != null) {
      return true;
    }
    return this.router.navigateByUrl('*');
  }

  canActivateChild() {
    if (this.msGraphService.msalInstance.getActiveAccount() != null) {
      return true;
    }
    return this.router.navigateByUrl('*');
  }
}
