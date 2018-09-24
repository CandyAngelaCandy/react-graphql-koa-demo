import React, { PureComponent } from 'react';
import TodoContext from '../context/TodoContext';
import { Table } from 'antd';
import { columns } from './Data/column';
import { filterTodo, initTodoList } from './Manipulation/TodoAction';

class TodoList extends PureComponent {
  state = {
    pagination: {
      pageSize: 5
    },
    todoList: []
  };

  changeCurrentPage = () => {
    this.setState({
      pagination: {
        current: 3
      }
    });
  };

  render() {
    return (
      <TodoContext.Consumer>
        {({ todos, filterValue }) => {
          todos = filterTodo(todos, filterValue);
          let todoList = initTodoList(todos);

          return (
            <div className="offset-md-2 col-md-8">
              <button className="btn btn-link" onClick={this.changeCurrentPage}>
                View new items
              </button>
              <Table
                columns={columns}
                dataSource={todoList}
                pagination={this.state.pagination}
                rowKey={record => record.key}
              />
            </div>
          );
        }}
      </TodoContext.Consumer>
    );
  }
}

export default TodoList;
