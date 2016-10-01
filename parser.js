express = require('express');
var app = express();
var Axios = require('axios');
cheerio = require('cheerio');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, function () {
    console.log('Mock data server listening on port 3000!');
});

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/lyric/:url', function (req, res) {
    var url = req.params.url;
    console.log(url)

    Axios.get(url).then(res => {
        //console.log(res.data);
        var $ = cheerio.load(res.data);
        return $('song_body-lyric');
    })

});