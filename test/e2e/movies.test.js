// /* e2e testing */
// const { assert } = require('chai');
// const request = require('./request');
// const { dropCollection } = require('./_db');

// describe.only('Movies API', () => {

//     beforeEach(() => dropCollection('movies'));

//     let spiritedaway;
//     let laputa;

//     const spiritedData = {
//         name: 'Spirited Away',
//         director: 'Hayao Miyazaki',
//         composer: 'Joe Hisashi',
//         year: 2001,
//         voices: {
//             chihiro: 'Daveigh Chase',
//             haku: 'Jason Marsden',
//             yubaba: 'Suzanne'
//         },
//         runtime: 'just right',
//         rating: 5,
//         isPixar: true,
//         languages: {
//             1: 'English',
//             2: 'Japanese'
//         },
//         keywords: ['Japan', 'Ghibli', 'Pixar', 'pig']
//     };

//     const laputaData = {
//         name: 'Laputa',
//         director: 'Hayao Miyazaki',
//         composer: 'Joe Hisashi',
//         year: 1986,
//         runtime: 'just right',
//         rating: 5,
//         isPixar: true,
//         languages: {
//             1: 'English',
//             2: 'Japanese'
//         },
//         keywords: ['Japan', 'Ghibli', 'Pixar', 'Castle']
//     };

//     beforeEach(() => {
//         return request 
//             .post('/api/movies')
//             .send(spiritedData)
//             .then(({ body }) => spiritedaway = body);
//     });

//     beforeEach(() => {
//         return request 
//             .post('/api/movies')
//             .send(laputaData)
//             .then(({ body }) => laputa = body);
//     });

//     it('saves a movie', () => {
//         assert.isOk(spiritedaway._id);
//     });

//     it('returns movie by id on GET', () => {
//         return request  
//             .get(`/api/movies/${spiritedaway._id}`)
//             .then(({ body }) => {
//                 assert.deepEqual(body, spiritedaway);
//             });
//     });

//     it.only('returns all movies on GET', () => {
//         return request
//             .get('/api/movies')
//             .then(({ body }) => {
//                 assert.deepEqual(body[0].name, spiritedaway.name);
//                 assert.deepEqual(body[1].name, laputa.name);
//             });
//     });

//     it('GET works with query', () => {
//         return request
//             .get('/api/movies?name=Spirited%20Away')
//             .then(({ body }) => {
//                 assert.deepEqual(body[0].name, spiritedaway.name);
//             });
//     });

//     it('updates a movie on PUT', () => {
//         laputa.name = 'Castle in the Sky';
//         return request
//             .put(`/api/movies/${laputa._id}`)
//             .send(laputa)
//             .then(({ body }) => {
//                 assert.deepEqual(body, laputa);
//             });
//     });

//     it('deletes a movie on DELETE', () => {
//         return request
//             .del(`/api/movies/${laputa._id}`)
//             .then(({ body }) => {
//                 assert.deepEqual(body, { removed: true });
//                 return request.get('/movies');
//             })
//             .then(({ body }) => {
//                 assert.deepEqual(body, {});
//             });
//     });
// });