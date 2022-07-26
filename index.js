const express = require('express');

const PORT = process.env.PORT || 4000;

const server = express();

server.listen(PORT, () => console.log(`server started on ${PORT}`));
