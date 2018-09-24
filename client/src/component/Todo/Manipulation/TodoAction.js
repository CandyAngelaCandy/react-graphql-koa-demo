import { GET_TODOS } from '../schema/schema';
import { message } from 'antd/lib/index';

export const addTodoItem = (createTodo, todoText) => {
  if (todoText === '') {
    message.error('The todo content can not be null!');
  } else {
    createTodo({
      variables: {
        input: {
          text: todoText
        }
      },
      refetchQueries: [
        {
          query: GET_TODOS
        }
      ]
    });
    message.success('add todo success');
  }
};
