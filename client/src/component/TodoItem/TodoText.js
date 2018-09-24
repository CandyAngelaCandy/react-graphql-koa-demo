import React, { Fragment } from 'react';
import { UPDATE_TODO } from './schema/schema';
import { Mutation } from 'react-apollo';
import { updateTodoEdit, updateTodoText } from './Manipulation/TodoItemAction';

export const TodoText = ({ todo }) => {
  return (
    <Fragment>
      {todo.completed ? (
        <del>
          <span>{todo.text}</span>
        </del>
      ) : (
        <Mutation mutation={UPDATE_TODO}>
          {updateTodo => (
            <span
              contentEditable={todo.editable}
              suppressContentEditableWarning={true}
              onDoubleClick={() => {
                updateTodoEdit(updateTodo, todo);
              }}
              onBlur={e => {
                updateTodoText(e, updateTodo, todo);
              }}
            >
              {todo.text}
            </span>
          )}
        </Mutation>
      )}
    </Fragment>
  );
};
