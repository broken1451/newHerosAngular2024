import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroPageRoutingModule } from './hero-page-routing.module';
import { HeroPageComponent } from './hero-page.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    HeroPageComponent,
    
  ],
  imports: [
    CommonModule,
    HeroPageRoutingModule,
    MaterialModule
  ]
})
export class HeroPageModule { }
