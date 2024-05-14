import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutchComponent } from './autch.component';

const routes: Routes = [

  {
    path: '',
    component: AutchComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutchRoutingModule { }
