import React from 'react';
import Axios from 'axios';
import lyricDetail from '../components/Lyrics/lyricDetail.component';
// let exec = require('child_process').exec;

class LyricsContainer extends React.Component {
    constructor(probs) {
        super (probs);
        this.state = {
            showResult: false
        }

    }
    getGeniusURL(query) {
    var api = 'https://api.genius.com/search';
    Axios.get(api, {
        params: {
            q: query
        },
        headers: {
            // 'Access-Control-Allow-Credentials': false,
            // 'Access-Control-Allow-Origin': '*',
            // 'CF-RAY': '2eae8e7c5ca75a68-BOS',
            Authorization: 'Bearer ckMZIuDpxq3hQD-cyGk3Hf0WlK2Nx_iA-TttNy1Yu37TKWbHswUIQ2NfNkgLOnRd'
        }
    }).then((res, err) => {
        var url = res.data.response.hits[0].result.url
        console.log(url);
        return url;
    })
}
   getLyrics() {
    var lyric_url = this.getGeniusURL(this.props.song);
    Exec.exec('python3 genius.py ' + lyric_url, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        return stdout;
        //   console.log(`stdout: ${stdout}`);
        //   console.log(`stderr: ${stderr}`);
    });
};

// componentWillReceiveProps(nextProps){

// }

    render() {
        return(
            // <p>{this.getLyrics()}</p>
            <div id="lauzcont">
                <div className="ovcont">
                    <div className="mainwrite">
                        <div className="lauzti">its the about me</div>

                        <p><br /></p>
                        <center>
                            
                            <p className="lyrics">I got my eyes on you,
                                <br />You're everything that I see
                                <br />I want your hot love and emotion, endlessly
                                <br />I can't get over you,
                                <br />You left your mark on me
                                <br />I want your high love and emotion, endlessly
                                <br />'Cause you're a good girl and you know it
                                <br />You act so different around me
                                <br />'Cause you're a good girl and you know it
                                <br />I know exactly who you could be
                                <br />
                            </p>
                            <p className="lyrics"> Just hold on we're going home
                                <br />Just hold on we're going home
                                <br />It's hard to do these things alone
                                <br />Just hold on we're going home, ho oh
                                <br />
                            </p>
                        </center>
                    </div>
                </div>
                <div className="ovcont primaryColor">
                    <div className="mainwrite1">
                        <div class="lauzti">its the about me</div>
                        <p type="upperc">
                            <a href="http://shine.b1.jcink.com/index.php?showtopic=1932" rel="nofollow" target="_blank">
                                URBAN DICTIONARY
                            </a>
                        </p>
                        <div className="SearchBar">
                            <input type="text1" />
                        </div>
                        <div className="definition">
                            {this}
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