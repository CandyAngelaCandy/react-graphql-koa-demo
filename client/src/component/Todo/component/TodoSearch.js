import React from 'react';
import TodoContext from '../../context/TodoContext';

export const TodoSearch = () => {
  return (
    <TodoContext>
      {({ getFilterValue }) => {
        return (
          <div className="row input-group mb-3">
            <input
              type="text"
              ref={el => {
                this.filterInput = el;
              }}
              placeholder="filter todo item"
            />
            <button
              className="btn btn-info rounded-0"
              onClick={() => {
                getFilterValue(this.filterInput.value);
              }}
            >
              search
            </button>
          </div>
        );
      }}
    </TodoContext>
  );
};
