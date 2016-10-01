var Axios = require('axios')
var test = "https://api.spotify.com/v1/search?q=Sorry&type=track&limit=1";
var test2 = "https://api.spotify.com/v1/search";

function getTrackTest(query){
    Axios.get(test).then(res=>{console.log(res.data.tracks.items[0])});
}

function getTrack(query){
    Axios.get(test2,{
        params: {
            q:query,
            type:'track',
            limit:1
        }
    }).then(res => {
        // console.log(console.log(res.data.tracks.items[0]));
        var res_data = res.data.tracks.items[0];
        var artist =  res_data.artists[0].name;
        var track_name = res_data.name; 
        var preview_url = res_data.preview_url;
        var img_url = res_data.album.images[0].url;
        console.log(artist);
        console.log(preview_url);
        console.log(img_url);
        console.log(track_name);
        return {
            artist:artist,
            track_name:track_name,
            preview_url:preview_url,
            img_url:img_url
        }
    })

}

getTrack("Sorry");
//getTrack2(2); 

