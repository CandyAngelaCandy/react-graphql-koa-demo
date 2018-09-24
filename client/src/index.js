import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import './../node_modules/antd/dist/antd.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/TodoStyle.css';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
