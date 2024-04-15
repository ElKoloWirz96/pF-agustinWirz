import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from './models';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  [x: string]: any;

  displayedColumns: string[] = [
    'id', 
    'nombre', 
    'apellido', 
    'email', 
    'createdAt'
  ];

  user: IUser[] = [
    {
      id: 1,
      nombre: "Agustin",
      apellido: "Wirz",
      email: "agustin-96@live.com.ar",
      createdAt: new Date()
    },
    {
      id: 2,
      nombre: "Franco",
      apellido: "Carchedi",
      email: "FrancoIzzi@hotmail.com",
      createdAt: new Date()
    },
    {
      id: 3,
      nombre: "Florencia",
      apellido: "Rodriguez",
      email: "noreply@coderhouse.com",
      createdAt: new Date()
    }
  ];

  constructor(private matDialog: MatDialog) {}
  
  openDialog(): void {
    this.matDialog.open(UserDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.user = [...this.user, result];
        }
      },
    });
  }

}
