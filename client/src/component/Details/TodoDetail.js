import React from 'react';
import { Header } from './Header';
import { QueryBody } from './QueryBody';

const TodoDetail = ({ match }) => {
  return (
    <div className="col-md-6 offset-md-3 mt-2">
      <Header />
      <QueryBody match={match} />
    </div>
  );
};

export default TodoDetail;
