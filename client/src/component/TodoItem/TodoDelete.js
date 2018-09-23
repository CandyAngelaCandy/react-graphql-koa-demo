import React from 'react';
import { Mutation } from 'react-apollo';
import { DELETE_TODO, GET_TODOS } from './schema';

export const TodoDelete = ({ todoId }) => {
  const deleteTodoItem = deleteTodo => {
    alert('delete this todo?');
    deleteTodo({
      variables: {
        id: todoId
      },
      refetchQueries: [
        {
          query: GET_TODOS
        }
      ]
    });
  };

  return (
    <Mutation mutation={DELETE_TODO}>
      {deleteTodo => (
        <button
          onClick={() => {
            deleteTodoItem(deleteTodo);
          }}
          style={{ margin: '0 10px' }}
        >
          delete
        </button>
      )}
    </Mutation>
  );
};
