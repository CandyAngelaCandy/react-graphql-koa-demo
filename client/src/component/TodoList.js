import React, { Fragment, PureComponent } from 'react';
import TodoContext from './context/TodoContext';

class TodoList extends PureComponent {
  render() {
    return (
      <TodoContext.Consumer>
        {todos => (
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
                  //console.log('task array -----------' + todoItem.taskItems);
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
                        <button
                          onClick={() => {
                            // localStorage.setItem('todoId', todo.id);
                            // hashHistory.push(`/todos/${todo.id}`);
                          }}
                        >
                          detail
                        </button>
                        <button
                          onClick={() => {
                            //this.props.deleteTodo(todo.id);
                          }}
                          style={{ margin: '0 10px' }}
                        >
                          delete
                        </button>
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
        )}
      </TodoContext.Consumer>
    );
  }
}

export default TodoList;
