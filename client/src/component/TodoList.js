import React, { Fragment } from 'react';
import TodoContext from './context/TodoContext';
import { Mutation } from 'react-apollo';
import { DELETE_TODO, GET_TODOS, UPDATE_TODO } from './schema';
import { Link } from 'react-router-dom';

const TodoList = () => {
  return (
    <TodoContext.Consumer>
      {({ todos, filterValue }) => {
        todos =
          filterValue === ''
            ? todos
            : todos.filter(todo => todo.text.includes(filterValue));
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
                        <Mutation mutation={UPDATE_TODO}>
                          {updateTodo => (
                            <input
                              type="checkbox"
                              onChange={() => {
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
                              }}
                            />
                          )}
                        </Mutation>
                      </td>
                      <td className="text-center">
                        {todo.completed ? (
                          <del>
                            <span>{todo.text}</span>
                          </del>
                        ) : (
                          <Mutation mutation={UPDATE_TODO}>
                            {updateTodo => (
                              <span
                                contentEditable={todo.editable}
                                suppressContentEditableWarning={true}
                                onDoubleClick={() => {
                                  updateTodo({
                                    variables: {
                                      id: todoId,
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
                                }}
                                ref={el => {
                                  this.todoContent = el;
                                }}
                                onChange={() => {
                                  console.log(
                                    'update text change',
                                    this.todoContent.value
                                  );
                                }}
                                onBlur={e => {
                                  updateTodo({
                                    variables: {
                                      id: todoId,
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
                                }}
                              >
                                {todo.text}
                              </span>
                            )}
                          </Mutation>
                        )}
                      </td>
                      <td className="text-center">{todo.time}</td>
                      <td className="text-center">
                        <Link to={'/todo/' + todoId}>
                          <button
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
};

export default TodoList;
