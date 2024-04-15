export type UserRole = 'admin' | 'user';

export interface IUser {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    role: UserRole;
    createdAt: Date;
}
