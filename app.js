const express = require('express');
const server = express();

const router = require('./app/router');
server.use(router);

server.use(function (req, res, next) {
  res.status(404).send('pouet 404');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});