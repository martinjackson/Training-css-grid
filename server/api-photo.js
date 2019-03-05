
const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
global.fetch = require('node-fetch');

const splash = new Unsplash({
   applicationId: '13c5e75b93a9409a111014c4e07b9ecab9ff26ee201693ce0dc8c2a6609b118e',
   secret: 'c4b8f8376df2415b9c0cfd79b193bd40291c42a6b575d1e675e596abc69cafcd'
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

