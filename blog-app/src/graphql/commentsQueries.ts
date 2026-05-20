
import { gql, useMutation } from '@apollo/client';

const CREATE_COMMENT = gql`
  mutation CreateComment($title: String!, $content: String!, $date: String!) {
    createComment(commentRequestDTO: { title: $title, content: $content, date: $date }) {
      id
      title
      content
    }
  }
`;

const GET_COMMENTS = gql`
  query GetComments {
    comments {
      id
      title
      content
      createdAt
    }
  }
`;

const GET_COMMENT = gql`
  query GetComment($id: Int!) {
    comment(id: $id) {
      id
      title
      content
      createdAt
    }
  }
`;

const REMOVE_COMMENT = gql`
  mutation RemoveComment($id: Int!) {
    removeComment(id: $id)
  }
`;
