import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {

  userFrom: FormGroup;

  constructor( private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<UserDialogComponent> ) {
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
    })
  }

  onSave (): void {
    if (this.userFrom.invalid) {
      this.userFrom.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userFrom.value);
    }
  }

}
