import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_HELLO = gql`
  {
    hello
  }
`;

const Hello = ({ loading, error, data }) => {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <h1>{data.hello}</h1>;
};

export default graphql(GET_HELLO, { options: { pollInterval: 5000 } })(Hello);
