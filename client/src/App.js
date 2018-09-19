import React, { Component } from 'react';
import Todos from './component/Todo';
import NumbersWithData from './component/Compose';

class App extends Component {
  render() {
    return (
      <div className="offset-md-3 col-md-8">
        <Todos />
      </div>
    );
  }
}

export default App;
