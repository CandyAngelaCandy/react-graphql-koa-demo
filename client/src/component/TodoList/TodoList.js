import React, { Fragment } from 'react';
import TodoContext from '../context/TodoContext';
import { Head } from './Head';
import { TodoItem } from '../TodoItem/TodoItem';

const TodoList = () => {
  const filterTodo = (todos, filterValue) => {
    todos =
      filterValue === ''
        ? todos
        : todos.filter(todo => todo.text.includes(filterValue));
    return todos;
  };
  return (
    <TodoContext.Consumer>
      {({ todos, filterValue }) => {
        todos = filterTodo(todos, filterValue);
        return (
          <div className="offset-md-2 col-md-8">
            <table className="table">
              <thead>
                <Head />
              </thead>
              <tbody>
                {todos.map(todo => {
                  return <TodoItem todo={todo} />;
                })}
              </tbody>
            </table>
          </div>
        );
      }}
    </TodoContext.Consumer>
  );
};

export default TodoList;
