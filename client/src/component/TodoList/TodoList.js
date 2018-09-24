import React, { PureComponent } from 'react';
import TodoContext from '../context/TodoContext';
import { Table } from 'antd';
import { columns } from './Data/column';
import { filterTodo, initTodoList } from './Manipulation/TodoAction';

class TodoList extends PureComponent {
  render() {
    return (
      <TodoContext.Consumer>
        {({ todos, filterValue }) => {
          todos = filterTodo(todos, filterValue);
          let todoList = initTodoList(todos);

          return (
            <div className="offset-md-2 col-md-8">
              <Table
                columns={columns}
                dataSource={todoList}
                pagination={{
                  pageSize: 5,
                  total: todoList.length,
                  defaultCurrent: 2
                }}
              />
            </div>
          );
        }}
      </TodoContext.Consumer>
    );
  }
}

export default TodoList;
