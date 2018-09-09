import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const GET_HELLO = gql`
  {
    hello
  }
`;

const Hello = () => (
    <Query query={GET_HELLO}>
        {({ loading, error, data }) => {
            console.log(data);
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <h1>{data.hello}</h1>
            );
        }}
    </Query>
);


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <Hello/>
                </div>
            </div>
        );
    }
}

export default App;
