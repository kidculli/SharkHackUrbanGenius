import React from 'react';

class Details extends React.Component {
  
  render(){
    return(
      <div className="details">
        <span>{this.props.title}</span>
      </div>
    )
  }

}

export default Details
