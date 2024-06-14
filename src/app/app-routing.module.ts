import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthPublicGuard } from './auth/guards/auth-public.guard';
import { auth2Guard } from './auth/guards/auth2.guard';
import { authPublic2Guard } from './auth/guards/auth-public2.guard';

const routes: Routes = [

    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule),
      // canActivate: [AuthPublicGuard]
      canActivate: [authPublic2Guard]
    },
    {
      path: 'heroes',
      // canActivate: [AuthGuard],
      canActivate: [auth2Guard],
      // canMatch: [AuthGuard],
      loadChildren: () => import('./heroes/heroes.module').then(m=>m.HeroesModule)
    },
    {
      path: '404',
      loadChildren: () => import('./shared/pages/err404-page/err404-page.module').then(m=>m.Err404PageModule)
    },
    {
      path: '',
      redirectTo: 'heroes',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '404'
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
