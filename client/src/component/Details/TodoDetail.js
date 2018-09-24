import React from 'react';
import { Header } from './Header';
import { GET_TODO } from './schema';
import { Query } from 'react-apollo';
import { Table } from 'antd';
import { columns } from './Data/column';
import { initTodoList } from './Manipulation/DetailAction';

const TodoDetail = ({ match }) => {
  const todoId = match.params.id;
  return (
    <div className="col-md-6 offset-md-3 mt-2">
      <Header />
      <Query query={GET_TODO} variables={{ id: todoId }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const todo = data.getTodo;
          let todoList = initTodoList(todo);

          return <Table columns={columns} dataSource={todoList} />;
        }}
      </Query>
    </div>
  );
};

export default TodoDetail;
