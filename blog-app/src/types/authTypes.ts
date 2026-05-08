
export type Login = {
    username: string,
    password: string,
}

export type Register = {
    username: string,
    password: string,
    confirmPassword: string,
    city: string,
}

export type RegisterRequest = {
    username: string,
    password: string,
    city: string,
}

export type User = {
    sub: number;
    username: string;
    role: UserRole;
}

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export const USER_DEFAULT_VALUES: User = {
    sub: 0,
    username: '',
    role: UserRole.USER,
}
