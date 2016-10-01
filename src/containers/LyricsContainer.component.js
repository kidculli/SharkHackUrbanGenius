import React from 'react';
import Axios from 'axios';
import lyricDetail from '../components/Lyrics/lyricDetail.component';
// let exec = require('child_process').exec;

class LyricsContainer extends React.Component {
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
                        <div class="lauzti">its the about me</div>
                        <p>
                            <a href="http://shine.b1.jcink.com/index.php?showtopic=1932" rel="nofollow" target="_blank">TESTING THREAD</a>
                        </p>
                        <div className="lauzti">awards and stuff</div>
                        <p><br /></p>
                        <center>
                            <img src="http://i.imgur.com/sOxuT.png" border="0" width="300" />
                            <img src="http://i.imgur.com/1puoI.png" border="0" width="300" />
                            <img src="http://i1057.photobucket.com/albums/t390/makecookieproud/AWARD_zps208d0963.png" border="0" width="300" />
                            <img src="http://i1057.photobucket.com/albums/t390/makecookieproud/award1_zps233148b6.png" border="0" width="300" />
                            <img src="http://i50.tinypic.com/fcvbye.jpg" border="0" width="300" />
                            <img src="http://i.imgur.com/Wzpu4cB.png" width="300" />
                        </center>
                    </div>
                </div>
                <div className="ovcont primaryColor">
                    <div className="mainwrite1">
                        <div class="lauzti">its the about me</div>
                        <p>
                            <a href="http://shine.b1.jcink.com/index.php?showtopic=1932" rel="nofollow" target="_blank">TESTING THREAD</a>
                        </p>
                        <div className="lauzti">awards and stuff</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LyricsContainer