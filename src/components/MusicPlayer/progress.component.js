import React from 'react';

class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="progressCenter">
        <progress
           value={this.props.position}
           max="1"></progress>
        <div>
          <span className="start_point">{this.props.elapsed}</span>
          <span className="end_point">{this.props.total}</span>
        </div>
      </div>
    )
  }

}

export default Progress
