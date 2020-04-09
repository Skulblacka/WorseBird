import React from 'react';

class NavBar extends React.Component {
  constructor(){
    super()
    this.state = {
      day: true,
      month: false,
      year: false
    };
  }

  changeImage = param => e => {
    let promise = new Promise((resolve, reject) => {
      if(param=='DAY'){
        this.setState({day:true,month:false,year:false})
      }else if(param=='MONTH'){
        this.setState({day:false,month:true,year:false})
      }else{
        this.setState({day:false,month:false,year:true})
      }
      resolve(true)
    })
    promise.then(bool => console.log(this.state))
  }


  render (){
    return (
      <ul>
        <li><button onClick={this.changeImage('DAY')}>Worse Bird of the Day</button></li>
        <li><button onClick={this.changeImage('MONTH')}>Worse Bird of the Month</button></li>
        <li><button onClick={this.changeImage('YEAR')}>Worse Bird of the Year</button></li>
      </ul>
    )
  }
}

export default NavBar
