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
       track: {stream_url: 'https://p.scdn.co/mp3-preview/9a744ca0248dda247a682b6703b62c36a9127bbb', title: 'Sorry', artwork_url: 'https://i.scdn.co/image/8b47495ce0c4a341f7196f70bcf4361e6257c1a0', artist_name: 'Justin Bieber'},
       playStatus: Sound.status.STOPPED,
       elapsed: '00:00',
       total: '00:00',
       position: 0,
       playFromPosition: 0,
       autoCompleteValue: '',
       term: 'Closer'
     };
   }

//  co
   componentWillMount(){
     this.getTrack();
   }

  prepareUrl(url) {
    //Attach client id to stream url
    return `${url}?client_id=${this.client_id}`
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

  // handleChange(event, value){
  //   // Update input box
  //   this.setState({autoCompleteValue: event.target.value});
  //   let _this = this;
  //   //Search for song with entered value
  //   Axios.get(`https://api.soundcloud.com/tracks?client_id=${this.client_id}&q=${value}`)
  //     .then(function (response) {
  //       // Update track state
  //       _this.setState({tracks: response.data});
  //       console.log(response);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // }


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
    this.randomTrack();
   }

  randomTrack () {
    let _this = this;
    //Request for a playlist via Soundcloud using a client id
    Axios.get(`https://api.soundcloud.com/playlists/209262931?client_id=${this.client_id}`)
      .then(function (response) {
        // Store the length of the tracks
        const trackLength = response.data.tracks.length;
        // Pick a random number
        const randomNumber = Math.floor((Math.random() * trackLength) + 1);
        //Set the track state with a random track from the playlist
        _this.setState({track: response.data.tracks[randomNumber]});
      })
      .catch(function (err) {
        //If something goes wrong, let us know
        console.log(err);
      });
   }
  getTrack(){
        Axios.get(api_url,{
            params: {
                q: this.state.term,
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
        this.getTrack();

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
          random={this.getTrack.bind(this)}/>
        <Progress
          elapsed={this.state.elapsed}
          total={this.state.total}
          position={this.state.position}/>
        
      </div>
    );
  }
}

export default MusicPlayerContainer
