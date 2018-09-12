import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_MessageList = gql`
  query {
    Messages {
      id
      content
      author
    }
  }
`;

const MessageList = ({ data: { loading, error, Messages } }) => {
  console.log('Messages', Messages);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Fragment>
      <table>
        <tr>
          <td>ID</td>
          <td>content</td>
          <td>author</td>
        </tr>
        {Messages.map(message => {
          return (
            <tr key={message.id}>
              <td>{message.id}</td>
              <td>{message.content}</td>
              <td>{message.author}</td>
            </tr>
          );
        })}
      </table>
    </Fragment>
  );
};

export default graphql(GET_MessageList, { options: { pollInterval: 5000 } })(
  MessageList
);
