import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';
import { MaterialModule } from '../../../material/material.module';
import { CardComponent } from '../../components/card/card.component';


@NgModule({
  declarations: [
    ListPageComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    MaterialModule
  ],
  exports: [CardComponent]
})
export class ListPageModule { }
