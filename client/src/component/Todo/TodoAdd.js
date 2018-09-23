import React from 'react';
import { CREATE_TODO, GET_TODOS } from './schema';
import { Mutation } from 'react-apollo';

export const TodoAdd = () => {
  const addTodoItem = (createTodo, todoText) => {
    createTodo({
      variables: {
        input: {
          text: todoText
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
    <Mutation mutation={CREATE_TODO}>
      {createTodo => (
        <div className="row input-group mb-3">
          <input
            type="text"
            ref={el => {
              this.input = el;
            }}
            placeholder="add todo item"
          />
          <button
            className="btn btn-info rounded-0"
            onClick={() => {
              addTodoItem(createTodo, this.input.value);
            }}
          >
            add todo
          </button>
        </div>
      )}
    </Mutation>
  );
};
