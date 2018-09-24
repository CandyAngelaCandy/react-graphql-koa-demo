import React from 'react';
import { Header } from './component/Header';
import QueryBody from './component/QueryBody';

const TodoDetail = ({ match }) => {
  const todoId = match.params.id;
  return (
    <div className="col-md-6 offset-md-3 mt-2">
      <Header />
      <QueryBody todoId={todoId} />
    </div>
  );
};

export default TodoDetail;
