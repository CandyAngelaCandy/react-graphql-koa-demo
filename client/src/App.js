import React, { Component } from 'react';
import Todo from './component/Todo';

class App extends Component {
  render() {
    return (
      <div className="offset-md-3 col-md-8">
        <Todo />
      </div>
    );
  }
}

export default App;
