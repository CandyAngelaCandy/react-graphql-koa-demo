import React, { Fragment } from 'react';
import { GET_TODOS, UPDATE_TODO } from './schema';
import { Mutation } from 'react-apollo';

export const TodoText = ({ todo }) => {
  const updateTodoEdit = updateTodo => {
    updateTodo({
      variables: {
        id: todo.id,
        input: {
          editable: true
        }
      },
      refetchQueries: [
        {
          query: GET_TODOS
        }
      ]
    });
  };

  const updateTodoText = (e, updateTodo) => {
    updateTodo({
      variables: {
        id: todo.id,
        input: {
          text: e.target.innerHTML
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
                updateTodoEdit(updateTodo);
              }}
              onBlur={e => {
                updateTodoText(e, updateTodo);
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
