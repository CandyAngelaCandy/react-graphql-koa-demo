import React, { Fragment, PureComponent } from 'react';
import { Mutation, Query } from 'react-apollo';
import TodoList from './TodoList';
import TodoContext from './context/TodoContext';
import { CREATE_TODO, GET_TODOS } from './schema';

class Todo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFileter: false,
      filterValue: ''
    };
  }

  render() {
    return (
      <Fragment>
        <Query query={GET_TODOS}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            let todos = data.getTodos;

            return (
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
                      this.setState({
                        isFileter: true,
                        filterValue: this.filterInput.value
                      });
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
                <TodoContext.Provider
                  value={{ todos: todos, filterValue: this.state.filterValue }}
                >
                  <TodoList />
                </TodoContext.Provider>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Todo;
