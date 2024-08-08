import { Injectable } from "@angular/core";
import { CreateUserPaylod, IUser } from "./models";
import { Observable, catchError, delay, of, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment.development";

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

  constructor(private httpClient: HttpClient) {}
    
    getUsers(): Observable<IUser[]> {

      return this.httpClient.get<IUser[]>(environment.baseAPIURL + '/users')
    //    return of (Users_DB).pipe(delay(2000));
    //    return throwError (() => new Error('Error al cargar los usuarios')).pipe(
    //      catchError((err) => of (err))
    //    );
    }

    getUserById(id: number): Observable<IUser | undefined> {

      return this.httpClient.get<IUser>(environment.baseAPIURL + '/users/' + id)
      //return of(Users_DB.find((el) => el.id === id)).pipe(delay(1500));
    }
    createUser(payload: CreateUserPaylod) : Observable<IUser> {
      return this.httpClient.post<IUser>(environment.baseAPIURL + '/users', payload)
    }
}