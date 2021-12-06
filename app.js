const express = require('express');
const server = express();

const router = require('./app/router');
server.use(router);

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});