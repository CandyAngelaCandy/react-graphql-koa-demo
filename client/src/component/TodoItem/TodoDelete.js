import React from 'react';
import { Mutation } from 'react-apollo';
import { DELETE_TODO } from './schema/schema';
import { Popconfirm } from 'antd';
import { deleteTodoItem } from './Manipulation/TodoItemAction';

export const TodoDelete = ({ todoId }) => {
  return (
    <Mutation mutation={DELETE_TODO}>
      {deleteTodo => (
        <Popconfirm
          placement="topLeft"
          title="delete this todo?"
          onConfirm={() => {
            deleteTodoItem(deleteTodo, todoId);
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
