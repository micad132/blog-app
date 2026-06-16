import { gql, type TypedDocumentNode } from "@apollo/client";
import type { UpdateUserVars, UserUpdateResponseDTO } from "../../types/userTypes.ts";

export const REMOVE_USER = gql`
  mutation RemoveUser($id: Int!) {
    deleteUserById(userId: $id)
  }
`;


export const UPDATE_USER: TypedDocumentNode<UserUpdateResponseDTO, UpdateUserVars> = gql`
    mutation UpdateUser($input: UpdateUserDTO!) {
        updateUser(updateUserDTO: $input) {
            id
            city
            country
    }
    }
`;

export const UPDATE_PASSWORD = gql`
    mutation ChangeMyPassword($input: ChangePasswordDTO!)  {
        changeMyPassword(input: $input)
    }
`

export const GET_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id,
            username,
            role,
            country,
            city,
        }
    }
`

