import React, { Component } from 'react';
import { render } from 'react-dom';

import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello from React</p>
        <div className="apple"></div>
      </div>
      );
  }
}

render(<App />, document.getElementById('app'));
