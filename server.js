const Hapi = require('hapi');
const Mongoose = require('mongoose');
const Movie = require('./lib/models/movie');


const server = Hapi.Server({ 
    port: '8000',
    host: 'localhost'
});

server.route([
    {
        method: 'GET',
        path: '/',
        handler: function(req, reply) {
            return reply.response('Hello HapiJS!');
        }
    },
    {
        method: 'GET',
        path: '/api/movies',
        handler: function(req, res) {
            return Movie.find();
                // .exec()
                // .then((movie) => {
                //     return { movie: movie };
                // })
                // .catch((err) => {
                //     return { err: err }
                // });
        }
    },
    /* {
        method: 'POST',
        path: '/api/movies',
        handler: function(req, reply) {
            const { name, director, composer, year, voices, runtime, rating, isPixar, languages, keywords } = req.payload;
            const movieData = {
                name,
                director,
                composer,
                year,
                voices,
                runtime,
                rating,
                isPixar,
                languages,
                keywords
            }

            return Movie.create(movieData).then((movie) => {
                return { message: 'Movie created successfully', movie: movie };
            })
            .catch((err) => {
                return { err: err }
            });
        }
    } */
]);

const init = async() => {
    
    await server.start();
    Mongoose.connect('mongodb://localhost:27017/ghibli', { useNewUrlParser: true });
    Mongoose.connection.once('open', () => {
    console.log('connected to MongoDB database');
});
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

