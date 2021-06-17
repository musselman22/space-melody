const { getLyrics } = require('genius-lyrics-api');
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3001;


app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  let userData = req.body.queryParams
  fetch(`https://genius.com/api/search?q=${userData}`)
    .then((response) => response.json())
    .then((data) => {
      res.send(data)
    })
}
);

app.post('/lyrics', (req, res) => {
  let songTitle = req.body.queryTitle
  let songArtist = req.body.queryArtist

  const options = {
    apiKey: 'PyULTdWwY4cK6hb7WcNryYFlcU5a0KKiRIHlSd3yELvBIanoVI_Ue-konp_sossQ',
    title: songTitle,
    artist: songArtist,
    optimizeQuery: true
  };

  getLyrics(options).then((lyrics) => {
    let lyricsObj = { data: lyrics }
    res.send(lyricsObj)
  })
}
)

app.post('/description', (req, res) => {
  let userDesc = req.body.queryDesc
  fetch(`https://genius.com/api${userDesc}`)
    .then((response) => response.json())
    .then((data) => {
      let descObj = { data: data.response.song.description_preview, apple: data.response.song.spotify_uuid }
      res.send(descObj)
    })
}
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
