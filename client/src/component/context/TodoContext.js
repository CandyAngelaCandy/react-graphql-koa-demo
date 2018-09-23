import React from 'react';

const TodoContext = React.createContext({
  todos: [],
  filterValue: '',
  getFilterValue: () => {}
});
export default TodoContext;
