import React from 'react';

import lyricDetail from '../components/Lyrics/lyricDetail.component';

class LyricsContainer extends React.Component {
    render() {
        return(
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