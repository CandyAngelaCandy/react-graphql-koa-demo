import gql from 'graphql-tag';

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

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

export const GET_TODO = gql`
  query {
    getTodo(id: "4") {
      id
      text
      completed
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
