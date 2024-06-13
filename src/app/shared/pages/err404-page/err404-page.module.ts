import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Err404PageRoutingModule } from './err404-page-routing.module';
import { Err404PageComponent } from './err404-page.component';


@NgModule({
  declarations: [
    Err404PageComponent
  ],
  imports: [
    CommonModule,
    Err404PageRoutingModule
  ]
})
export class Err404PageModule { }
