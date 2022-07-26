const express = require('express');
const config = require('./config');

const PORT = config.PORT || 4000;

const server = express();

server.listen(PORT, () => console.log(`server started on ${PORT}`));
