import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from './models';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import Swal from 'sweetalert2';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
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

  loading = false;

  //Lista de usuarios

  user: IUser[] = [];

  constructor(private matDialog: MatDialog, private usersService: UsersService) {}

  // Carga de usuarios
  
  ngOnInit(): void {
    this.loading = true;
    this.usersService.getUsers().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => {
        Swal.fire('Error', 'Ocurrio un error', 'error');
      },
      complete: () => {
        this.loading = false;
      },
    })
  }

  //Funcion para abrir el dialogo y cargar datos
  
  openDialog(editingUser?: IUser): void {
    this.matDialog.open(UserDialogComponent, {
      data: editingUser,
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Alumno ingresado",
            showConfirmButton: false,
            timer: 1500
          });
          if (editingUser) {
            
            // Editar usuario existente

            this.user = this.user.map((u: IUser) => u.id === editingUser.id ? { ...u, ...result } : u);
          } else {
            if (result) {

              // Cargar nuevo usuario en la lista de alumnos

              result.createdAt = new Date();

              this.usersService.createUser(result).subscribe({
                next: (usuarioCreado) => {
                  this.user = [...this.user, usuarioCreado];
                }
              })
            }
          }
        }
      },
    });
  }

  //Funcion para borrar un usuario de la lista

  onDeleteUser(id: number): void {
    Swal.fire({
      title: "¿Estas seguro de querer borrar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Alumno eliminado!",
          text: "El alumno a sido eliminado correctamente.",
          icon: "success"
        });
        this.user = this.user.filter((u) => u.id != id);
      }
    });
    
  }
}
