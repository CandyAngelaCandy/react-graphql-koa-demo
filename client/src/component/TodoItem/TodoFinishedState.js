import React from 'react';
import { UPDATE_TODO } from './schema/schema';
import { Mutation } from 'react-apollo';
import { updateTodoFinish } from './Manipulation/TodoItemAction';

export const TodoFinishedState = ({ todoId }) => {
  return (
    <Mutation mutation={UPDATE_TODO}>
      {updateTodo => (
        <input
          type="checkbox"
          onChange={() => {
            updateTodoFinish(updateTodo, todoId);
          }}
        />
      )}
    </Mutation>
  );
};
