import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
    SharedModule
  ],
  exports: [
    HomeDashboardComponent
  ]
})
export class HomeDashboardModule { }
