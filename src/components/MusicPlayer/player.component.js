import React from 'react';
import ClassNames from 'classnames';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const playPauseClass = ClassNames({
      'fa fa-play': this.props.playStatus == 'PLAYING' ? false : true,
      'fa fa-pause': this.props.playStatus == 'PLAYING' ? true : false
    });
    return(
      <div>

        <table className="player">
					<tbody>
            <tr>
              <td>
                <span onClick={this.props.backward}>
                  <i className="fa fa-step-backward backward"></i>
                </span>
              </td>
					    <td>
                <span onClick={this.props.togglePlay} title="Play">
                  <i className="fa fa-play play"></i>
                </span>
              </td>
					    <td>
                <span onClick={this.props.forward}>
                  <i className="fa fa-step-forward forward"></i>
                </span>
              </td>
				    </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default Player
        // <div className="actions">
        //     <button onClick={this.props.backward}><i className="fa fa-backward"></i></button>
        //     <button onClick={this.props.togglePlay}><i className={playPauseClass}></i></button>
        //     <button onClick={this.props.stop}><i className="fa fa-stop"></i></button>
        //     <button onClick={this.props.random}><i className="fa fa-random"></i></button>
        //     <button onClick={this.props.forward}><i className="fa fa-forward"></i></button>
        // </div>