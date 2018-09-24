import gql from 'graphql-tag';
export const GET_TODOS = gql`
  query {
    getTodos {
      id
      text
      completed
      visible
      editable
      deleted
      time
    }
  }
`;

export const CREATE_TODO = gql`
  mutation createTodo($input: TodoInput) {
    createTodo(input: $input) {
      id
      text
      completed
    }
  }
`;
