import { message } from 'antd/lib/index';
import { GET_TODOS } from '../schema/schema';

export const deleteTodoItem = (deleteTodo, todoId) => {
  deleteTodo({
    variables: {
      id: todoId
    },
    refetchQueries: [
      {
        query: GET_TODOS
      }
    ]
  });
  message.success('delete success');
};

export const updateTodoFinish = (updateTodo, todoId) => {
  updateTodo({
    variables: {
      id: todoId,
      input: {
        completed: true
      }
    },
    refetchQueries: [
      {
        query: GET_TODOS
      }
    ]
  });
};

export const updateTodoEdit = (updateTodo, todo) => {
  updateTodo({
    variables: {
      id: todo.id,
      input: {
        editable: true
      }
    },
    refetchQueries: [
      {
        query: GET_TODOS
      }
    ]
  });
};

export const updateTodoText = (e, updateTodo, todo) => {
  updateTodo({
    variables: {
      id: todo.id,
      input: {
        text: e.target.innerHTML
      }
    },
    refetchQueries: [
      {
        query: GET_TODOS
      }
    ]
  });
};
