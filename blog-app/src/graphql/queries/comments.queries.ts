
import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($text: String!) {
    createComment(commentRequestDTO: { text: $text}) {
      id
        text
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments {
    comments {
      id
      title
      content
      createdAt
    }
  }
`;

export const GET_COMMENT = gql`
  query GetComment($id: Int!) {
    comment(id: $id) {
      id
      title
      content
      createdAt
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation RemoveComment($id: Int!) {
    removeComment(id: $id)
  }
`;
