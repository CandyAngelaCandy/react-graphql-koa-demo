import gql from 'graphql-tag';

export const GET_TODO = gql`
  query getTodo($id: ID!) {
    getTodo(id: $id) {
      id
      text
      time
      completed
    }
  }
`;
