import React from 'react';
import Axios from 'axios';
import lyricDetail from '../components/Lyrics/lyricDetail.component';
// let exec = require('child_process').exec;

class LyricsContainer extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            showResult: false,
            searchInput: '',

            example: '',
            definition: ''
        }

    }


    searchString() {

        const urban_url = 'https://mashape-community-urban-dictionary.p.mashape.com/define';
        Axios.get(urban_url, {
            params: {
                term: this.state.searchInput
            },
            headers: {
                'X-Mashape-Key': '9I0xZLsiaamshNC9LtXwk9OnmzB7p1OBEJrjsnVXrB5bUg6Qhm'
            }
        }).then((res, err) => {
            let definition = res.data.list[0].definition;
            let example = res.data.list[0].example;
            
            this.setState({example: example, definition: definition, showResult: true});

        })}

    render() {
        return(
            // <p>{this.getLyrics()}</p>
            <div id="lauzcont">
                <div className="ovcont">
                    <div className="mainwrite">
                        <div className="lauzti">{this.props.songInfo.title}</div>

                        <p><br /></p>
                        <center dangerouslySetInnerHTML={{__html: this.props.lyrics}}>
                        </center>
                    </div>
                </div>
                <div className="ovcont primaryColor">
                    <div className="mainwrite1">
                        <div className="lauzti1">alternative outlook</div>
                        <p type="upperc">
                            <a href="http://shine.b1.jcink.com/index.php?showtopic=1932" rel="nofollow" target="_blank">
                                URBAN DICTIONARY
                            </a>
                        </p>
                        <div className="SearchBar">
                            <input type="text1" value={this.state.searchInput} onChange={(event) => {this.setState({searchInput: event.target.value})}} />
                        </div>
                        <span className="searchBtn" onClick={this.searchString.bind(this)}>
                            <i className="fa fa-search"></i>
                        </span>
                        <div>
                            <br />
                            <br />
                            <p className="lyrics definition">{ this.state.showResult? "Definition": ""}</p>
                            {this.state.definition}
                        </div>
                        <br />
                        <br />
                        <div>
                            <p className="lyrics definition">{ this.state.showResult? "Example": ""}</p>
                            {this.state.example}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LyricsContainer
// <img src="http://i.imgur.com/sOxuT.png" border="0" width="300" />
// <img src="http://i.imgur.com/1puoI.png" border="0" width="300" />
// <img src="http://i1057.photobucket.com/albums/t390/makecookieproud/AWARD_zps208d0963.png" border="0" width="300" />
// <img src="http://i1057.photobucket.com/albums/t390/makecookieproud/award1_zps233148b6.png" border="0" width="300" />
// <img src="http://i50.tinypic.com/fcvbye.jpg" border="0" width="300" />
// <img src="http://i.imgur.com/Wzpu4cB.png" width="300" />