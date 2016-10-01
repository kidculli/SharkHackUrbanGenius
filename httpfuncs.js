var Axios = require('axios')
var test = "https://api.spotify.com/v1/search?q=Sorry&type=track&limit=1";
var test2 = "https://api.spotify.com/v1/search";

function getTrack(query){
    Axios.get(test).then(res=>{console.log(res.data.tracks.items[0])});
}

// function getTrack(query){
//     Axios.get(test2,{
//         params: {
//             q:"Sorry",
//             type:'track',
//             limit:1
//         }
//     }).then(res => {
//         console.log(res.data['']);
//     })

// }

getTrack(1);


