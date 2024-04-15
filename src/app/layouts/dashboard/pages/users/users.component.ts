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

  // Datos a cargar en el HTML
  displayedColumns: string[] = [
    'id', 
    'nombre', 
    'apellido', 
    'email',
    'role', 
    'createdAt',
    'actions',
  ];

  //Lista de usuarios
  user: IUser[] = [
    {
      id: 1,
      nombre: "Agustin",
      apellido: "Wirz",
      email: "agustin-96@live.com.ar",
      role: 'admin',
      createdAt: new Date()
    },
    {
      id: 2,
      nombre: "Franco",
      apellido: "Carchedi",
      email: "FrancoIzzi@hotmail.com",
      role: 'user',
      createdAt: new Date()
    },
    {
      id: 3,
      nombre: "Florencia",
      apellido: "Rodriguez",
      email: "noreply@coderhouse.com",
      role: 'user',
      createdAt: new Date()
    }
  ];

  constructor(private matDialog: MatDialog) {}

  //Funcion para abrir el dialogo y cargar datos
  
  openDialog(): void {
    this.matDialog.open(UserDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          result.id = new Date().getTime().toString().substring(0, 2);
          result.createdAt = new Date();
          this.user = [...this.user, result];
        }
      },
    });
  }

  //Funcion para borrar un usuario de la lista

  onDeleteUser(id: number): void {
    this.user = this.user.filter((u) => u.id != id);
  }
}
