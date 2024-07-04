import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "../../layouts/dashboard/pages/users/models";
import { Data, Router } from "@angular/router";
import { LoginData } from "../../layouts/autch/models";

@Injectable ({providedIn: 'root'})
export class AuthService {

    private Mock_Auth_User: IUser = {
        id: 1,
        nombre: "Agustin",
        apellido: "Wirz",
        email: "agustin-96@live.com.ar",
        role: 'admin',
        createdAt: new Date()
    }
    private _authUser$ = new BehaviorSubject < IUser | null> (null);
    public authUser$ = this._authUser$.asObservable();

    constructor(private router: Router) {
         
    }

    login(data: LoginData): void {
        if (data.email !== 'agustin-96@live.com.ar' || data.password !== 'agustinelguitaje') {
            alert ('Correo o password incorrectos');
        } else {
            this._authUser$.next(this.Mock_Auth_User);

            localStorage.setItem('accessToken', 'usuarioIngresado');

            this.router.navigate(['dashboard', 'home']);
        }
    }

    verifyToken(): boolean {

        const token = localStorage.getItem('accessToken');

        if (token) {
            this._authUser$.next(this.Mock_Auth_User);
            return true;
        } else {
            return false;
        }
    }

    logout(): void{
        this._authUser$.next(null);
        localStorage.removeItem('accessToken')
    }
}