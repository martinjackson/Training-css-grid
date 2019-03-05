# Training-css-grid

## Anatomy of the Application

```
|-- public                         Where the front end (bundle.js and index.js) is built
|                                  and all the assets arre served from
|
|-- server                         Sub project, location of all backend server APIs and library source
|   |-- api-hello.js
|   |-- api-passport.js
|   |-- api-photo.js
|   |-- package.json              Sub project npm dependancies and npm run commands
|   `-- server.js                 main server source file
|
|-- src                           ES7 ReactJS frontend components
|   |-- App.js
|   |-- index.html                (copied to public/ folder)
|   |-- index.js                  entry point for webpack to build bundle
|   `-- styles.css
|
|-- README.md                     This document
|-- babel.config.js               babel config
|-- package.json                  npm scripts and dependancies for React frontend
`-- webpack.config.js             webpack config

4 directories, 13 files
```
