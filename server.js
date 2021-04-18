const app = require('http');
const expAppModule = require('./app')

const server = app.createServer(expAppModule);

server.listen(process.env.PORT || 3001)
