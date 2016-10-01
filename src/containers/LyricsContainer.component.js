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
                        <div className="lauzti">Know yourself</div>

                        <p><br /></p>
                        <center>
                        <p className="lyrics">Wallet yout! Wallet, wallet, wallet, wallet
                            <br />Dey sleepin' in the streets
                            <br />Shaky warrior
                            <br />Yeah, this that Oliver 40, Niko shit man
                            <br />15 Fort York shit ya know
                            <br />Boi-1da, what's poppin'?
                            <br />Yeah, yeah
                            <br />
                        </p>
                        <p className="lyrics">Runnin' through the 6 with my woes
                            <br />Countin' money you know how it goes
                            <br />Pray the real live forever man
                            <br />Pray the fakes get exposed
                            <br />I want that Ferrari then I swerve
                            <br />I want that Bugatti just to hurt
                            <br />I ain't rockin' my jewelry that's on purpose
                            <br />Niggas want my spot and don't deserve it
                            <br />I don't like how serious they take themselves
                            <br />I've always been me I guess I know myself
                            <br />Shakiness man I don't have no time for that
                            <br />My city too turned up I'll take the fine for that
                            <br />This been where you find me at
                            <br />That's been where you find me at
                            <br />I know a nigga named Johnny Bling
                            <br />He put me on to the finer things
                            <br />Had a job sellin' Girbaud jeans
                            <br />I had a yellow TechnoMarine
                            <br />Then Kanye dropped, it was polos and backpacks
                            <br />Man, that's when Ethan was pushin' a Subaru hatchback
                            <br />Man I'm talkin' way before hashtags
                            <br />
                        </p>
                            <p className="lyrics">Yo, pay attention
                                <br />And listen real closely how I break this slang shit down
                                <br />
                            </p>
                            <p className="lyrics">
                                Check it, my weed smoke is my lye
                                <br />A ki of coke is a pie
                                <br />When I'm lifted, I'm high
                                <br />With new clothes on, I'm fly
                                <br />Cars is whips and sneakers is kicks
                                <br />Money is chips, movies is flicks
                                <br />Also, cribs is homes, jacks is pay phones
                                <br />Cocaine is nose candy, cigarettes is bones
                                <br />A radio is a box, a razor blade is a ox
                                <br />Fat diamonds is rocks and jakes is cop
                                <br />And if you got rubbed, you got stuck
                                <br />You got shot, you got bucked
                                <br />And if you got double-crossed, you got fucked
                                <br />Your bankroll is your poke, a choke hold is a yoke
                                <br />A kite is a note, a con is a okey doke
                                <br />And if you got punched that mean you got snuffed
                                <br />To clean is to buff, a bull scare is a strong bluff
                                <br />I know you like the way I'm freakin' it
                                <br />I talk with slang and I'ma never stop speakin' it
                                <br />
                            </p>
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