let id = 0;
const uuid = () => {
  return id++;
};

export const filterTodo = (todos, filterValue) => {
  todos =
    filterValue === ''
      ? todos
      : todos.filter(todo => todo.text.includes(filterValue));
  return todos;
};

export const initTodoList = todos => {
  let todoList = [];
  todos.map(todo => {
    const todoItem = {
      key: uuid(),
      id: todo.id,
      completed: todo.completed,
      text: todo.text,
      time: todo.time,
      editable: todo.editable,
      color: '#fff'
    };
    todoList.push(todoItem);
  });

  if (todoList.length !== 0) {
    todoList[todoList.length - 1].color = '#E1FFFF';
  }
  return todoList;
};
