import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
// import cheerio from 'cheerio';
import MusicPlayerContainer from './MusicPlayerContainer.component';
import DefinitionsContainer from './DefinitionsContainer.component';
import LyricsContainer from './LyricsContainer.component';

class AppContainer extends React.Component {
    constructor() {
        super();
        this.state = { song: '', genius: '' };
    }
    _lyricParserApi = 'http://localhost:3000/lyrics';

    getGeniusURL(artist_name, song_name) {
        var artist = artist_name.replace(/\s/g, '-');
        var song = song_name.replace(/\s/g, '-');
        var url = 'http://genius.com/' + artist + '-' + song + '-lyrics';
        return url;
    }
    onChildChanged(newState) {
        //  alert(newState);
        this.setState({ song: newState });
        console.log("NEW STATE", newState);
        this.setState({
            genius: this.getGeniusURL(newState.artist_name,
                newState.title)
        });
        console.log(this.state.genius);
        // console.log(this.getLyrics());
         Axios.get(this._lyricParserApi, {
                params: {
                    lyric: this.state.genius
                }
            }).then(res => {
                console.log(res.data);
                this.setState({lyrics:res.data});
            });
        // Axios.get(this.state.genius).then(res => {
        //     console.log(res.status);
        //     console.log(typeof res.data);
        //     Axios.get(this._lyricParserApi, {
        //         params: {
        //             lyric: res.data
        //         }
        //     }).then(res => {
        //         console.log(res);
        //     });
        // });

        //  Axios.get(this.state.genius).then(res => {
        //      //console.log(res.data);
        //      Axios.get(this._lyricParserApi,{
        //          params:{
        //              lyric:res.data
        //          }
        //      }).then(res => {
        //          console.log(res);
        //      })
        //  })

    }
    getLyrics() {
        return 'nah'
        // jquery.load(this.state.genius,function(){
        //     var content = jquery('.lyrics').contents();
        //     console.log(content.text());
        // });
    }
    render() {
        return (
            <div className="row containerSize">
                <div className="col-md-6"><MusicPlayerContainer callback={this.onChildChanged.bind(this)} /></div>
                <div className="col-md-6 screen2">
                    <LyricsContainer songInfo={this.state.song} lyrics={this.state.lyrics} />
                </div>
            </div>
        );
    }
}

export default AppContainer