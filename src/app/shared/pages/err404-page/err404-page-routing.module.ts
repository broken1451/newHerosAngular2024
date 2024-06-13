import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404PageComponent } from './err404-page.component';

const routes: Routes = [
  {
    path: '',
    component: Err404PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Err404PageRoutingModule { }
