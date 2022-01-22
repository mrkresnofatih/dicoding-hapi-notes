const Hapi = require('@hapi/hapi');
const { controller } = require('./controller');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route(controller);

    await server.start();
}

init()
