import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPageRoutingModule } from './new-page-routing.module';
import { NewPageComponent } from './new-page.component';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewPageComponent
  ],
  imports: [
    CommonModule,
    NewPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class NewPageModule { }
