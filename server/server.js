
const fs = require('fs');
const express = require('express');
const serveIndex = require('serve-index');

const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
global.fetch = require('node-fetch');

const cors = require('cors');

const unspalsh = new Unsplash({
   applicationId: '13c5e75b93a9409a111014c4e07b9ecab9ff26ee201693ce0dc8c2a6609b118e',
   secret: 'c4b8f8376df2415b9c0cfd79b193bd40291c42a6b575d1e675e596abc69cafcd'
});

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/photos', (req, res) => {
   const page = req.query.page || 1;
   const take = req.query.take || 30;

   // grab photos from unsplash
   unspalsh.photos.listPhotos(page, take, 'latest')
      .then(toJson)
      .then(photos => {
          return res.json(photos);
      });
});

let port = 8081
let home = ( fs.existsSync('public') ) ? 'public' : '.'

app.use(express.static(home));     // serve up static content
app.use(serveIndex(home));         // serve a directory view

const server = app.listen(port)
console.log("NodeJS/Express serving " + home + " on http://localhost:" + port)
