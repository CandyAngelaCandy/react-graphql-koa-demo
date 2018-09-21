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

export const CREATE_TODO = gql`
  mutation createTodo($input: TodoInput) {
    createTodo(input: $input) {
      id
      text
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID, $input: TodoInput) {
    updateTodo(id: $id, input: $input) {
      id
      text
    }
  }
`;
