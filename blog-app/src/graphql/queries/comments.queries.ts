
import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($text: String!) {
    createComment(text: $text) {
      id
        text
    }
  }
`;

export const GET_COMMENTS = gql`
    query GetComments {
        comments {
            id
            text
            user {
                id
                city
                role
                username
            }
            createdAt
        }
    }
`;

export const GET_COMMENT = gql`
    query GetComment($id: Int!) {
        comment(id: $id) {
            id
            text
            createdAt
            user {
                id
                city
                role
                username
            }
        }
    }
`;

export const REMOVE_COMMENT = gql`
  mutation RemoveComment($id: Int!) {
    removeComment(id: $id)
  }
`;
