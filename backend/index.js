const express = require('express')
const app = express()
const { connectDb } = require('./mongoose');

const PORT = 4000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

connectDb().then(
  app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
  })
);
