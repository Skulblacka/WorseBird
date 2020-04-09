import React, { Component } from 'react';
import NavBar from './NavBar';
import Birds from './Birds'
class Controller extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div> 
        <NavBar/>
        <Birds/>  
      </div>
    );
  }
}
export default Controller