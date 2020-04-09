import React from 'react';

class NavBar extends React.Component {
  constructor(){

  }

  render (){
    return (
      <ul>
        <li><button>Worse Bird of the Day</button></li>
        <li><button>Worse Bird of the Month</button></li>
        <li><button>Worse Bird of the Year</button></li>
      </ul>
    )
  }
}

export default NavBar
