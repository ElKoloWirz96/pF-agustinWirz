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

@NgModule({
  declarations: [
    FormFieldValidationErrorsPipe,
    ResaltadoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Components / Directives / Pipes
    /* Angular Modules */
    
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormFieldValidationErrorsPipe,
    ResaltadoDirective
  ]
})
export class SharedModule { }
