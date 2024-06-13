import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'new-hero',
        loadChildren: () => import('../new-page/new-page.module').then(m => m.NewPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search-page/search-page.module').then(m => m.SearchPageModule)
      },
      {
        path: 'edit-hero/:id',
        loadChildren: () => import('../new-page/new-page.module').then(m => m.NewPageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../list-page/list-page.module').then(m => m.ListPageModule)
      },
      {
        path: 'by/:id',
        loadChildren: () => import('../hero-page/hero-page.module').then(m => m.HeroPageModule)
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutPageRoutingModule { }
