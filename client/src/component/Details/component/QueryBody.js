import React from 'react';
import {columns} from '../Data/column';
import {initTodoList} from '../Manipulation/DetailAction';
import {GET_TODO} from '../schema/schema';
import {Query} from 'react-apollo';
import {Table} from 'antd';

const QueryBody = ({ todoId }) => {
  return (
    <Query query={GET_TODO} variables={{ id: todoId }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const todo = data.getTodo;
        let todoList = initTodoList(todo);

        return <Table columns={columns} dataSource={todoList} />;
      }}
    </Query>
  );
};
export default QueryBody;
