import { FormControl } from "@angular/forms";
import { IUser } from "../../users/models";

export interface ICareers {
    id: number;
    career: string;
    details: string;
    price: number;
    duration: string;
}

export interface CISales {
    id: number;
    careers: ICareers;
    buyer: IUser;
}

export interface IcareerForm {
    career: FormControl < ICareers | null >;
    details: FormControl < string | null >;
    price: FormControl < string | number | null >;
    duration: FormControl < string | null >;
    user: FormControl < IUser | null >;
}