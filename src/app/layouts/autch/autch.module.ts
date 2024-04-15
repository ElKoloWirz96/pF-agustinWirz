import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutchRoutingModule } from './autch-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutchRoutingModule,
    SharedModule
  ]
})
export class AutchModule { }
