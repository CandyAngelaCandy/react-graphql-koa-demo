import React, { Fragment } from 'react';
import { Mutation, Query } from 'react-apollo';
import TodoList from './TodoList';
import TodoContext from './context/TodoContext';
import { CREATE_TODO, GET_TODOS } from './schema';

const Todo = () => {
  return (
    <Fragment>
      <div className="header">
        <h1>todos</h1>
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
              //this.getTodos();
            }}
          >
            search
          </button>
        </div>
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
                  createTodo({
                    variables: {
                      input: {
                        text: this.input.value
                      }
                    },
                    refetchQueries: [
                      {
                        query: GET_TODOS
                      }
                    ]
                  });
                }}
              >
                add todo
              </button>
            </div>
          )}
        </Mutation>
      </div>
      <Query query={GET_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <TodoContext.Provider value={data.getTodos}>
              <TodoList />
            </TodoContext.Provider>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default Todo;
