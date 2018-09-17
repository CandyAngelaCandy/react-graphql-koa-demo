import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ADD_Message = gql`
  mutation createMessage($author: String, $content: String) {
    createMessage(input: { author: $author, content: $content }) {
      id
    }
  }
`;

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      author: ''
    };
  }

  addMessage = () => {
    this.props
      .mutate({
        variables: { author: this.state.author, content: this.state.content }
      })
      .then(res => {
        console.log(res, '成功啦');
      })
  };

  handleContent = event => {
    this.setState({
      content: event.target.value
    });
  };

  handleAuthor = event => {
    this.setState({
      author: event.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <input
          type="text"
          placeholder="content"
          ref={el => {
            this.content = el;
          }}
          onChange={this.handleContent}
        />
        <input
          type="text"
          placeholder="author"
          ref={el => {
            this.author = el;
          }}
          onChange={this.handleAuthor}
        />
        <button onClick={this.addMessage}>add Message</button>
      </Fragment>
    );
  }
}

export default graphql(ADD_Message, { options: { pollInterval: 5000 } })(
  AddMessage
);
