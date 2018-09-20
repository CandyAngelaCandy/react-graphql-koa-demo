import React, { Fragment, PureComponent } from 'react';
import { DELETE_TODO, GET_TODOS } from './schema';
import TodoContext from './context/TodoContext';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

class FilterTodoList extends PureComponent {
  render() {
    return (
      <TodoContext.Consumer>
        {({ todos, filterValue }) => {
          todos = todos.filter(todo => todo.text.includes(filterValue));
          return (
            <Fragment>
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">完成</th>
                    <th className="text-center">todo</th>
                    <th className="text-center">创建时间</th>
                    <th className="text-center">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map(todo => {
                    const todoId = todo.id;
                    return (
                      <tr key={todo.id}>
                        <td className="text-center">{todo.id}</td>
                        <td className="text-center">
                          <input
                            type="checkbox"
                            onChange={() => {
                              //this.props.toogleTodo(todo);
                            }}
                          />
                        </td>
                        <td className="text-center">
                          {todo.completed ? (
                            <del>
                              <span>{todo.text}</span>
                            </del>
                          ) : (
                            <span
                              contentEditable={todo.editable}
                              onDoubleClick={() => {
                                //this.props.editTodo(todo);
                              }}
                              onBlur={() => {
                                // this.props.updateTodo(
                                //     todo,
                                //     this.todoContent.innerText
                                // );
                              }}
                              ref={el => {
                                this.todoContent = el;
                              }}
                            >
                              {todo.text}
                            </span>
                          )}
                        </td>
                        <td className="text-center">{todo.time}</td>
                        <td className="text-center">
                          <Link to={'/todo/' + todoId}>
                            <button
                              onClick={() => {
                                // localStorage.setItem('todoId', todo.id);
                                // hashHistory.push(`/todos/${todo.id}`);
                              }}
                            >
                              detail
                            </button>
                          </Link>
                          <Mutation mutation={DELETE_TODO}>
                            {deleteTodo => (
                              <button
                                onClick={() => {
                                  alert('delete this todo?');
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
                                }}
                                style={{ margin: '0 10px' }}
                              >
                                delete
                              </button>
                            )}
                          </Mutation>

                          <button
                            onClick={() => {
                              // this.props.addTask(
                              //     todo.id,
                              //     this.taskInput.value
                              // );
                            }}
                          >
                            add task
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Fragment>
          );
        }}
      </TodoContext.Consumer>
    );
  }
}

export default FilterTodoList;
