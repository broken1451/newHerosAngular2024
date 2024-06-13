import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
    },
    {
      path: 'heroes',
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
