import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from './Components/NavBar';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <NavBar/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
