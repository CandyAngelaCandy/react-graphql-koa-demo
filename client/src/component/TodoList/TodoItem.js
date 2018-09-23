import React from 'react';
import { Link } from 'react-router-dom';
import { TodoFinishedState } from './TodoFinishedState';
import { TodoText } from './TodoText';
import { TodoDelete } from './TodoDelete';

export const TodoItem = ({ todo }) => {
  const todoId = todo.id;
  return (
    <tr key={todoId}>
      <td className="text-center">{todoId}</td>
      <td className="text-center">
        <TodoFinishedState todoId={todoId} />
      </td>
      <td className="text-center">
        <TodoText todo={todo} />
      </td>
      <td className="text-center">{todo.time}</td>
      <td className="text-center">
        <Link to={'/todo/' + todoId}>
          <button>detail</button>
        </Link>
        <TodoDelete todoId={todoId} />
      </td>
    </tr>
  );
};
