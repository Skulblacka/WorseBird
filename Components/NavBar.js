import React from 'react';

class NavBar extends React.Component {
  constructor(props){
    super()
    this.state = {
      sourceDay: 'https://download.ams.birds.cornell.edu/api/v1/asset/202984001/900',
      sourceMonth: 'https://www.scitecheuropa.eu/wp-content/uploads/2019/09/Colour-bird-e1568033112774-696x392.jpg',
      sourceYear: 'https://www.lovethegarden.com/sites/default/files/content/articles/UK_wildbirds-01-robin.jpg',
      printSrc: 'https://download.ams.birds.cornell.edu/api/v1/asset/202984001/900'
    };
  }
  

  changeImage = param => e => {
    let promise = new Promise((resolve, reject) => {
      if(param=='DAY'){
        this.setState({printSrc:this.state.sourceDay})
      }else if(param=='MONTH'){
        this.setState({printSrc:this.state.sourceMonth})
      }else{
        this.setState({printSrc:this.state.sourceYear})
      }
      resolve(true)
    })
    promise.then(bool => console.log(this.state))
  }


  render (){
    return (
      <div>
        <ul><a>WorseBird</a>
          
          <li><button onClick={this.changeImage('DAY')}>Worse Bird of the Day</button></li>
          <li><button onClick={this.changeImage('MONTH')}>Worse Bird of the Month</button></li>
          <li><button onClick={this.changeImage('YEAR')}>Worse Bird of the Year</button></li>
        </ul>
        <img src={this.state.printSrc}/>
      </div>
    )
  }
}

export default NavBar
