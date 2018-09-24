import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Fragment>
      <h1 className="col-md-6 offset-md-3 mt-2">detail todo</h1>
      <Link to="/todo">
        <button className="btn btn-link">back to todos</button>
      </Link>
    </Fragment>
  );
};
