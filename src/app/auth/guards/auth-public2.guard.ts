import { inject } from '@angular/core';
import { CanActivateFn, GuardResult, MaybeAsync, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

export const authPublic2Guard: CanActivateFn = (route, state) => {
  return check();
};


const check = (): MaybeAsync<GuardResult> => {

  const authService = inject(AuthService);
  const router = inject(Router);
  return  authService.checkAuth().pipe(
    tap( isAuth => console.log ('isAuth', isAuth)),
    tap( isAuth => {
      if(isAuth) {
        router.navigate(['/']);
      } 
    }),
    map( isAuth =>  {
     console.log ('isAuth2', isAuth);
       return !isAuth;
    })
   );
}