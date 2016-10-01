import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MusicPlayerContainer from './MusicPlayerContainer.component';
import DefinitionsContainer from './DefinitionsContainer.component';
import LyricsContainer from './LyricsContainer.component';

class AppContainer extends React.Component {
    render() {
        return(
            <div className="row containerSize">
                <div className="col-md-6"><MusicPlayerContainer /></div>
                <div className="col-md-6 screen2">
                    <LyricsContainer />
                </div>
            </div>
        );
    }
}

export default AppContainer