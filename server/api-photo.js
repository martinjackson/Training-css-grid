
const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
global.fetch = require('node-fetch');

const splash = new Unsplash({
   applicationId: process.env.UNSPLASH_ID,
   secret: process.env.UNSPLASH_SECRET
});


module.exports = (req, res) => {
    const page = req.query.page || 1;
    const take = req.query.take || 30;

    // grab photos from unsplash
    splash.photos.listPhotos(page, take, 'latest')
       .then(toJson)
       .then(photos => {
           return res.json(photos);
       });
 }

