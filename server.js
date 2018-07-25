const Hapi = require('hapi');
const Mongoose = require('mongoose');
const Movie = require('./lib/models/movie');

Mongoose.connect('mongodb://localhost:27017/ghibli');
Mongoose.connection.once('open', () => {
    console.log('connected to MongoDB database');
});

const server = Hapi.Server({ 
    port: '8000',
    host: 'localhost'
});

server.route(
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
            return Movie.find({});
            // Movie.find(req.query)
            // .select('name')
            // .lean()
            // .then(movies => {
            //     reply.res.json(movies);
            // });
        }
    }
);

const init = async() => {
    
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

