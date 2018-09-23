import React, { Component } from 'react';
import Todo from './component/Todo/Todo';
import TodoDetail from './component/Details/TodoDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="offset-md-3 col-md-8">
          <Route exact path="/todo/" component={Todo} />
          <Route path="/todo/:id" component={TodoDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
