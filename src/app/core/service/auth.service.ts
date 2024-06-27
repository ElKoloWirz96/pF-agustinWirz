import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../../layouts/dashboard/pages/users/models";
import { Data } from "@angular/router";
import { LoginData } from "../../layouts/autch/models";

@Injectable ({providedIn: 'root'})
export class AuthService {

    private _authUser$ = new BehaviorSubject < IUser | null> (null);
    public authUser$ = this._authUser$.asObservable();

    login(data: LoginData): void {
        if (data.email !== 'agustin-96@live.com.ar' || data.password !== 'agustinelguitaje') {
            alert ('Correo o password incorrectos');
        } else {
            this._authUser$.next({
                id: 1,
                nombre: "Agustin",
                apellido: "Wirz",
                email: "agustin-96@live.com.ar",
                role: 'admin',
                createdAt: new Date()
            });
        }
    }

    logout(): void{
        this._authUser$.next(null);
    }
}