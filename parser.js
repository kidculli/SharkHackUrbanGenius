var Axios = require('axios');
var express = require('express');
var app = express();
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

function getLyrics(html){
    // axios.get('http://genius.com/Eminem-campaign-speech-lyrics').then(res => {
    // // var $ = cheerio.load(res.data);
    // // var content = $('.song_body-lyrics').contents();
    // // var content = $('.lyrics').contents();
    // // printText(content);
    // })
    console.log('called');
    var $ = cheerio.load(html);
     $('script').remove();
     $('a').removeAttr('href');
     return $('.lyrics').html();
    // var content = $('.song_body-lyrics').contents();
  
    // var content = $('.lyrics').contents();
    //   //printText(content);
    //   return content.text();
    // for (i=0; i< content.length; i++)
    // {   
    //     while(true){
    //         content[i].children
    //     }
    // }
}

function printText(node){

    console.log(node.text());
    var children = node.children();
    // var children = node.children();
    // var num = children.length; 
    // if (num) {
    //     for(i = 0; i < num; i++ ){
    //         printText(children[i]);
    //     }
    // }
    // else return; 
}

app.listen(3000, function () {
    console.log('Mock data server listening on port 3000!');
});

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// app.get('/lyric/:song', function (req, res) {
//     var song = req.params.song;
//     console.log(song);
//     res.send(song);

//     // Axios.get(url).then(res => {
//     //     //console.log(res.data);
//     //     var $ = cheerio.load(res.data);
//     //     return $('song_body-lyric');
//     // })

// });

app.get('/lyrics',function (req, res) { 
    var lyric = req.query.lyric;
    console.log(lyric);
    Axios.get(lyric).then(response => {
        var result = getLyrics(response.data);
        // result = result.replace(/googletag.*;/g,'');
        res.send(result);
    }).catch(err => {
        console.log(error);
        res.send(err);
    })
    
});

// var cheerio = require('cheerio');
// var fs = require('fs');
// var filename = 'song.html';
// var axios = require('axios');
// // var file = fs.openSync('song.html','r');

// var lyrics = fs.readFileSync(filename,'utf8');



// getLyrics(lyrics);