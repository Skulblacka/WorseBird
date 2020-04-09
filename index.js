import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from './Components/NavBar';
import Bottum from './Components/Bottum'
import Birds from './Components/Birds'
import Controller from './Components/Controller'
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
        <Controller/>
        <Bottum/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
