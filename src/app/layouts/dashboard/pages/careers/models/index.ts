import { IUser } from "../../users/models";

export interface CISales {
    id: number;
    careers: string;
    buyer: IUser;
}