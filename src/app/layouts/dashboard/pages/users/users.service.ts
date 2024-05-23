import { Injectable } from "@angular/core";
import { IUser } from "./models";
import { Observable, catchError, delay, of, throwError } from "rxjs";

const Users_DB: IUser[] = [
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

@Injectable( {
    providedIn: 'root'
})

export class UsersService {
    
    getUsers(): Observable<IUser[]> {
        return of (Users_DB).pipe(delay(2000));
        return throwError (() => new Error('Error al cargar los usuarios')).pipe(
          catchError((err) => of (err))
        );
    }

    getUserById(id: number): Observable<IUser | undefined> {
      return of(Users_DB.find((el) => el.id === id)).pipe(delay(1500));
    }
}