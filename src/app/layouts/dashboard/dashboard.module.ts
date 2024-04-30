import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { UsersModule } from './pages/users/users.module';
import { PipesYDirectivasModule } from './pages/pipes-y-directivas/pipes-y-directivas.module';
import { ProductsModule } from './pages/products/products.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    UsersModule,
    PipesYDirectivasModule,
    ProductsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
