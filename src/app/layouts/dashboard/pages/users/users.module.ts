import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import {MatTableModule} from '@angular/material/table';

import { SharedModule } from '../../../../shared/shared.module';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    SharedModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
