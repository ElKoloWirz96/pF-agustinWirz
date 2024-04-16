import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {

  userFrom: FormGroup;

  constructor( 
    private formBuilder: FormBuilder, 
    private matDialogRef: MatDialogRef<UserDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) private editingUser?: IUser
  ) {
    this.userFrom = this.formBuilder.group({
      nombre: ['',
      [
        Validators.required,
        Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')
      ],
      ],
      apellido: ['',
      [
        Validators.required, 
        Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')
      ],
      ],
      email: ['',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      ],
      ],
      role: ['admin', Validators.required],
    });

    if (editingUser) {
      this.userFrom.patchValue(editingUser);
    }
  }

  onSave (): void {
    if (this.userFrom.invalid) {
      this.userFrom.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userFrom.value);
    }
  }

}
