import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AutchComponent } from './layouts/autch/autch.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';


const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./layouts/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'autch',
    loadChildren: () => import('./layouts/autch/autch.module').then((m) => m.AutchModule),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: '',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
