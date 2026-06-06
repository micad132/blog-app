
export type Login = {
    username: string,
    password: string,
}

export type Register = {
    username: string,
    password: string,
    confirmPassword: string,
    city: string,
    country: string,
}

export type RegisterRequest = {
    username: string,
    password: string,
    city: string,
    country: string,
}

export type User = {
    id: number,
    username: string;
    city: string,
    country: string,
    role: UserRole;
}

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export const USER_DEFAULT_VALUES: User = {
    id: 0,
    username: '',
    city: '',
    country: '',
    role: UserRole.USER,
}
