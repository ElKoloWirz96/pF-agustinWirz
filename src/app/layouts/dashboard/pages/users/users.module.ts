import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';



import { SharedModule } from '../../../../shared/shared.module';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { PipesYDirectivasModule } from '../pipes-y-directivas/pipes-y-directivas.module';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserDialogComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    PipesYDirectivasModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
