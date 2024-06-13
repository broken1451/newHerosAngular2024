import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageRoutingModule } from './layout-page-routing.module';
import { LayoutPageComponent } from './layout-page.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    LayoutPageRoutingModule,
    MaterialModule
  ]
})
export class LayoutPageModule { }
