const Hapi = require('@hapi/hapi');
const { controller } = require('./controller');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    server.route(controller);

    await server.start();
}

init()
