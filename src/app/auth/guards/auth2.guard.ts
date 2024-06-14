import { inject } from '@angular/core';
import { CanActivateFn, GuardResult, MaybeAsync, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const auth2Guard: CanActivateFn = (route, state) => {
  return check();
};

const check = (): MaybeAsync<GuardResult> => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return  authService.checkAuth().pipe(
    tap( isAuth => console.log ('isAuth', isAuth)),
    tap( isAuth => {
      if(!isAuth) {
        router.navigate(['/auth/login']);
      } 
    })
   );
}