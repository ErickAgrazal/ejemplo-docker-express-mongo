require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const { connectDb } = require('./mongoose');
const errorHandler = require('_helpers/error-handler');

const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/preguntas', require('./questions/questions.controller'));
app.use('/respuestas', require('./Answers/answers.controller'));
app.use('/usuarios', require('./users/users.controller'));


// global error handler
app.use(errorHandler);

connectDb().then(
  app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
  })
);
