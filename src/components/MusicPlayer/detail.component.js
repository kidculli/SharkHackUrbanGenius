import React from 'react';

class Details extends React.Component {
  
  render(){
    return(
      <div className="details">{this.props.artist} &nbsp; - &nbsp; {this.props.title}</div>
    )
  }

}

export default Details
