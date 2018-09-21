import React from 'react';

const todoValue = {
  todos: [],
  filterValue: ''
};

const TodoContext = React.createContext(todoValue);
export default TodoContext;
