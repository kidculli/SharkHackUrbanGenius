import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import jquery from 'jquery';
// import cheerio from 'cheerio';
import MusicPlayerContainer from './MusicPlayerContainer.component';
import DefinitionsContainer from './DefinitionsContainer.component';
import LyricsContainer from './LyricsContainer.component';

class AppContainer extends React.Component {
    constructor(){
        super();
        this.state={song:''};
    }
    
    getGeniusURL(artist_name, song_name) {
    var artist = artist_name.replace(/\s/g, '-');
    var song = song_name.replace(/\s/g, '-');
    var url = 'http://genius.com/' + artist + '-' + song + '-lyrics';
    return url;
}
     onChildChanged(newState) {
        //  alert(newState);
         this.setState({song:newState});
         console.log("NEW STATE", newState);
         this.setState({genius:this.getGeniusURL(newState.artist_name,
                                                 newState.title)});
         console.log(this.state.genius);
         console.log(this.getLyrics());
    }
    getLyrics(){
        return 'nah'
        // jquery.load(this.state.genius,function(){
        //     var content = jquery('.lyrics').contents();
        //     console.log(content.text());
        // });
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