import React from 'react';
import { GET_TODOS, UPDATE_TODO } from './schema';
import { Mutation } from 'react-apollo';

export const TodoFinishedState = ({ todoId }) => {
  const updateTodoFinish = updateTodo => {
    updateTodo({
      variables: {
        id: todoId,
        input: {
          completed: true
        }
      },
      refetchQueries: [
        {
          query: GET_TODOS
        }
      ]
    });
  };

  return (
    <Mutation mutation={UPDATE_TODO}>
      {updateTodo => (
        <input
          type="checkbox"
          onChange={() => {
            updateTodoFinish(updateTodo);
          }}
        />
      )}
    </Mutation>
  );
};
