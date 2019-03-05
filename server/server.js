
const fs = require('fs');
const express = require('express');
const serveIndex = require('serve-index');

const app = express();

// const cors = require('cors');
// app.use(cors());

const apiPhotos = require('./api-photo')
const apiHello = require('./api-hello')

app.get('/api/hello', apiHello);
app.get('/api/photos', apiPhotos);

let port = 8081
let home = ( fs.existsSync('public') ) ? 'public' : '.'

app.use(express.static(home));     // serve up static content
app.use(serveIndex(home));         // serve a directory view

const server = app.listen(port)
console.log("NodeJS/Express serving " + home + " on http://localhost:" + port)
