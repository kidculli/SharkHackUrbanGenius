//React library
import React from 'react';
//Sound component
import Sound from 'react-sound';
//Axios for Ajax
import Axios from 'axios';
//Custom components
import Details from '../components/MusicPlayer/detail.component';
import Player from '../components/MusicPlayer/player.component';
import Progress from '../components/MusicPlayer/progress.component';
import Search from '../components/MusicPlayer/search.component';
const api_url = "https://api.spotify.com/v1/search";

class MusicPlayerContainer extends React.Component {

  constructor(props) {
     super(props);
     this.client_id = '2f98992c40b8edf17423d93bda2e04ab';
     this.state = {
       track: {stream_url: '', title: 'Sorry', artwork_url: '', artist_name: ''},
       playStatus: Sound.status.STOPPED,
       elapsed: '00:00',
       total: '00:00',
       position: 0,
       playFromPosition: 0,
       autoCompleteValue: '',
       term: 'Closer'
     };
   }

   componentWillMount(){
     let term =  this.state.term;
     this.getTrack(term);
   }

  xlArtwork(url){
    return url.replace(/large/, 't500x500');
  }

  togglePlay(){
    // Check current playing state
    if(this.state.playStatus === Sound.status.PLAYING){
      // Pause if playing
      this.setState({playStatus: Sound.status.PAUSED})
    } else {
      // Resume if paused
      this.setState({playStatus: Sound.status.PLAYING})
    }
  }

  stop(){
    // Stop sound
   this.setState({playStatus: Sound.status.STOPPED});
  }

  forward(){
    this.setState({playFromPosition: this.state.playFromPosition+=1000*10});
  }

  backward(){
    this.setState({playFromPosition: this.state.playFromPosition-=1000*10});
  }

  handleSelect(value, item){
    this.setState({ autoCompleteValue: value, track: item });
  }

  formatMilliseconds(milliseconds) {
     var hours = Math.floor(milliseconds / 3600000);
     milliseconds = milliseconds % 3600000;
     var minutes = Math.floor(milliseconds / 60000);
     milliseconds = milliseconds % 60000;
     var seconds = Math.floor(milliseconds / 1000);
     milliseconds = Math.floor(milliseconds % 1000);

     return (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
  }

  handleSongPlaying(audio){
     this.setState({  elapsed: this.formatMilliseconds(audio.position),
                      total: this.formatMilliseconds(audio.duration),
                      position: audio.position / audio.duration })
   }

  handleSongFinished () {
    let term  = this.state.term;
    this.getTrack(term);
   }


  getTrack(term){

    if(term === ''){
      term = 'Closer';
    }

    Axios.get(api_url,{
        params: {
            q: term,
            type:'track',
            limit:1
        }
      }).then(res => {
            // console.log(console.log(res.data.tracks.items[0]));
            let res_data = res.data.tracks.items[0];
            var artist =  res_data.artists[0].name;
            let track_name = res_data.name;
            let preview_url = res_data.preview_url;
            let img_url = res_data.album.images[0].url;
            this.setState({track: {stream_url: preview_url,
                                   title: track_name,
                                   artwork_url: img_url,
                                   artist_name: artist}});
       }).catch( (error) => console.log('error', error));
      }

      searchTerm(term){
        if (term == ''){
          this.setState({term: 'Closer'})
        }else{
          this.setState({term: term});
        }
        this.props.callback(this.state.term);
        console.log("term", this.state.term);
        this.getTrack(term);
      }

  render () {
    const scotchStyle = {
      width: '360px',
      height: '550px'
    }
    return (
      <div className="screen">
        <Search onSearchTermChange={this.searchTerm.bind(this)}/>
        <div>
          <img className="coverImage" src={this.xlArtwork(this.state.track.artwork_url)} />
        </div>
        <br />
        <Details
          title={this.state.track.title}/>
        <Sound
           url={this.state.track.stream_url}
           playStatus={this.state.playStatus}
           onPlaying={this.handleSongPlaying.bind(this)}
           playFromPosition={this.state.playFromPosition}
           onFinishedPlaying={this.handleSongFinished.bind(this)}/>
        <Player
          togglePlay={this.togglePlay.bind(this)}
          stop={this.stop.bind(this)}
          playStatus={this.state.playStatus}
          forward={this.forward.bind(this)}
          backward={this.backward.bind(this)}
        />
        <Progress
          elapsed={this.state.elapsed}
          total={this.state.total}
          position={this.state.position}/>

      </div>
    );
  }
}

export default MusicPlayerContainer
