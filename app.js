const http = require('http');

const routers = require('./routers');

const server = http.createServer(routers);

server.listen(3001);