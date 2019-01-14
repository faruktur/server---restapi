import app from './app';

import * as http from 'http';

import "reflect-metadata";
const port = (process.env.PORT || 3000);
app.set('port', port);
console.log(`Server listening on port ${port}`);
const server = http.createServer(app);
server.listen(port);