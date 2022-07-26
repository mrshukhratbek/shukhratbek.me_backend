const express = require('express');
const config = require('./config');
const api = require('./api');

const PORT = config.PORT || 4000;

const server = express();

server.use(api);

server.listen(PORT, () => console.log(`server started on ${PORT}`));
