// const router = require('express').Router();
// const Movie = require('../models/movie');
// const notFound = require('./notFound');

// const updateOptions = { 
//     new: true,
//     runValidators: true
// };

// module.exports = router
//     .get('/:id', (req, res) => {
//         if(!req.params.id) return notFound;
//         else {
//             Movie.findById(req.params.id)
//                 .select()
//                 .lean()
//                 .then(movie => res.json(movie));
//         }
//     })
//     .get('/', (req, res) => {
//         Movie.find(req.query)
//             .select('name')
//             .lean()
//             .then(movies => {
//                 res.json(movies);
//             });
//     })
//     .post('/', (req, res) => {
//         Movie.create(req.body)
//             .then(movie => res.json(movie));
//     })
//     .put('/:id', (req, res) => {
//         Movie.findByIdAndUpdate(req.params.id, req.body, updateOptions)
//             .then(movie => res.json(movie));
//     })
//     .delete('/:id', (req, res) => {
//         Movie.findByIdAndRemove(req.params.id)
//             .then(movie => {
//                 if(movie) {
//                     res.json({ removed: true });
//                 }
//                 else {
//                     res.json({ removed: false });
//                 }
//             });
//     });