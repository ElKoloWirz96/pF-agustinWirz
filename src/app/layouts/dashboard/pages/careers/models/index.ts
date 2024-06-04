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