import React, { Component } from 'react';
import Todo from './component/Todo';
import TodoDetail from './component/TodoDetail';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="offset-md-3 col-md-8">
          <Route exact path="/todo" component={Todo} />
          <Route path="/todo/:id" exact component={TodoDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
