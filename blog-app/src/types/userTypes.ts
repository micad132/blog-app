import type { UserRole } from "./authTypes.ts";

export type UserResponseDTO = {
    id: number,
    city: string,
    country: string,
    role: UserRole,
    username: string,
}

export type UsersFetchResponse = {
    users: UserResponseDTO[],
}

export type UserUpdateDTO = {
    id: number,
    username: string,
    city: string,
    country: string,
}

export type UserUpdateValues =  Omit<UserUpdateDTO, "id">

export type UserUpdateResponseDTO = {
    updateUser: {
        id: number;
        city: string;
        country: string;
    };
};

export type UpdateUserVars = {
    input: UserUpdateDTO;
};

export type UpdatePasswordDTO = {
    oldPassword: string,
    newPassword: string,
};
