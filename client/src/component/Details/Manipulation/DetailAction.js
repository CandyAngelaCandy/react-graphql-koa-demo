export const initTodoList = todo => {
  let todoList = [];
  const todoItem = {
    key: 0,
    id: todo.id,
    completed: todo.completed,
    text: todo.text,
    time: todo.time
  };
  todoList.push(todoItem);
  return todoList;
};
