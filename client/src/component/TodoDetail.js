import React from 'react';
import { Query } from 'react-apollo';
import { GET_TODO } from './schema';
import { Link } from 'react-router-dom';

const TodoDetail = ({ match }) => {
  return (
    <div className="col-md-6 offset-md-3 mt-2">
      <h1>detail todo</h1>
      <Link to="/todo">
        <button className="btn btn-link">back to todos</button>
      </Link>
      <Query query={GET_TODO} variables={{ id: match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const todo = data.getTodo[0];
          return (
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th className="text-center">todo</th>
                  <th className="text-center">创建时间</th>
                  <th className="text-center">完成情况</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">{todo.id}</td>
                  <td className="text-center">{todo.text}</td>
                  <td className="text-center">{todo.time}</td>
                  <td className="text-center">
                    {todo.completed ? 'yes' : 'no'}
                  </td>
                </tr>
              </tbody>
            </table>
          );
        }}
      </Query>
    </div>
  );
};

export default TodoDetail;