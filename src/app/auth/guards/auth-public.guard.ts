import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthPublicGuard implements CanActivate, CanMatch {

  constructor( private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      return this.checkStatus();
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]): MaybeAsync<GuardResult> {
      return this.checkStatus();
  }



  private checkStatus(): MaybeAsync<GuardResult>  {
    return  this.authService.checkAuth().pipe(
     tap( isAuth => console.log ('isAuth', isAuth)),
     tap( isAuth => {
       if(isAuth) {
         this.router.navigate(['/']);
       } 
     }),
     map( isAuth =>  {
      console.log ('isAuth2', isAuth);
        return !isAuth;
     })
    );
 }
}
