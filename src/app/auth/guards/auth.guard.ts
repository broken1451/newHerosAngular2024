import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanMatch {

  constructor( private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    //   console.log ('AuthGuard canActivate');
    //   console.log({route, state})
    // return false;
    return this.checkStatus();
  }


  canMatch(
    route: Route,
    segments: UrlSegment[]): MaybeAsync<GuardResult> {
    // console.log ('AuthGuard canMatch');
    // console.log({route, segments})
    // return false;
   return this.checkStatus();
  }


  private checkStatus(): MaybeAsync<GuardResult>  {
     return  this.authService.checkAuth().pipe(
      tap( isAuth => console.log ('isAuth', isAuth)),
      tap( isAuth => {
        if(!isAuth) {
          this.router.navigate(['/auth/login']);
        } 
      })
     );
  }
}
