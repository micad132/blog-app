import type { UserRole } from "./authTypes.ts";

export type UserResponseDTO = {
    id: number,
    city: string,
    role: UserRole,
    username: string,
}
