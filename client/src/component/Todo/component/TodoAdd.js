import React from 'react';
import { CREATE_TODO } from '../schema/schema';
import { Mutation } from 'react-apollo';
import { addTodoItem } from '../Manipulation/TodoAction';

export const TodoAdd = () => {
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
