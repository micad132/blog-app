import type { UserResponseDTO } from "./userTypes.ts";


export type Comment = {
    id: number,
    createdAt: string,
    text: string,
    username: string,
}


export type CommentFetchResponse = {
    comments: CommentResponseDTO[],
}

export type CommentResponseDTO = {
    id: number,
    text: string,
    createdAt: string,
    user: UserResponseDTO,
}
