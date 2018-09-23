import React, { Fragment, PureComponent } from 'react';
import { Query } from 'react-apollo';
import TodoList from '../TodoList/TodoList';
import TodoContext from '../context/TodoContext';
import { GET_TODOS } from './schema';
import { TodoSearch } from './TodoSearch';
import { TodoAdd } from './TodoAdd';
import TodoStyle from '../../style/TodoStyle.css';

class Todo extends PureComponent {
  state = {
    filterValue: ''
  };

  getFilterValue = filterValue => {
    this.setState({
      filterValue: filterValue
    });
  };

  render() {
    return (
      <Query query={GET_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const todos = data.getTodos;

          return (
            <Fragment>
              <div className="offset-md-2 col-md-8" id="todoInfo">
                <h1>todos</h1>
                <TodoContext.Provider
                  value={{ getFilterValue: this.getFilterValue }}
                >
                  <TodoSearch />
                </TodoContext.Provider>
                <TodoAdd />
              </div>
              <TodoContext.Provider
                value={{ todos: todos, filterValue: this.state.filterValue }}
              >
                <TodoList />
              </TodoContext.Provider>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default Todo;
