import React from 'react';
import { Mutation } from 'react-apollo';
import { DELETE_TODO, GET_TODOS } from './schema';
import { Popconfirm, message } from 'antd';

export const TodoDelete = ({ todoId }) => {
  const deleteTodoItem = deleteTodo => {
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

  return (
    <Mutation mutation={DELETE_TODO}>
      {deleteTodo => (
        <Popconfirm
          placement="topLeft"
          title="delete this todo?"
          onConfirm={() => {
            deleteTodoItem(deleteTodo);
          }}
          okText="Yes"
          cancelText="No"
        >
          <button className="deleteTodo">delete</button>
        </Popconfirm>
      )}
    </Mutation>
  );
};
