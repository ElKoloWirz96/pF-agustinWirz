import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../../layouts/dashboard/pages/users/models";

@Injectable ({providedIn: 'root'})
export class AuthService {
    [x: string]: any;

    authUser$ = new BehaviorSubject < IUser | null> (null);

    login(): void {
        this.authUser$.next({
            id: 1,
            nombre: "Agustin",
            apellido: "Wirz",
            email: "agustin-96@live.com.ar",
            role: 'admin',
            createdAt: new Date()
        });
    }
}