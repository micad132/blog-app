import { gql, type TypedDocumentNode } from "@apollo/client";
import type { UpdateUserVars, UserUpdateResponseDTO } from "../../types/userTypes.ts";

export const REMOVE_USER = gql`
  mutation RemoveUser($id: Int!) {
    deleteMyAccount(id: $id)
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

