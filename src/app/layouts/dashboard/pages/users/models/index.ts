export type UserRole = 'admin' | 'user';

export interface IUser {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    role: UserRole;
    createdAt: Date;
}

export interface CreateUserPaylod {
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    role: UserRole | null;
    createdAt: Date | null;
}