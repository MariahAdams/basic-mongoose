const Hapi = require('hapi');

const server = Hapi.Server({ 
    port: '8000',
    host: 'localhost'
});

const init = async() => {
    
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

