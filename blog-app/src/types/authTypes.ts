
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
