import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones del angular material

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FontSizeDirective } from './directives/font-size.directive';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    FormFieldValidationErrorsPipe,
    ResaltadoDirective,
    FontSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Components / Directives / Pipes
    /* Angular Modules */
    
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormFieldValidationErrorsPipe,
    ResaltadoDirective,
    DragDropModule,
    FontSizeDirective,
    MatTableModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
