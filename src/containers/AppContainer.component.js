import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MusicPlayerContainer from './MusicPlayerContainer.component';
import DefinitionsContainer from './DefinitionsContainer.component';
import LyricsContainer from './LyricsContainer.component';

class AppContainer extends React.Component {
    render() {
        return(
          <MusicPlayerContainer />  
        );
    }
}

export default AppContainer