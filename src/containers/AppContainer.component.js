import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MusicPlayerContainer from './MusicPlayerContainer.component';
import DefinitionsContainer from './DefinitionsContainer.component';
import LyricsContainer from './LyricsContainer.component';

class AppContainer extends React.Component {
    constructor(){
        super();
        this.state={song:''};
    }

     onChildChanged(newState) {
        //  alert(newState);
         this.setState({song:newState});
         console.log("JGHLJGAHGLAJHGDLFJKGH", newState);
         //alert(this.setState({song:newState}));
        //this.setState({lyric: newState });
        //alert(this.state.lyric);
    }
    render() {
        return(
            <div className="row containerSize">
                <div className="col-md-6"><MusicPlayerContainer  callback={this.onChildChanged.bind(this)}/></div>
                <div className="col-md-6 screen2">
                    <LyricsContainer song={this.state.song} />
                </div>
            </div>
        );
    }
}

export default AppContainer