'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./db');

const Document = require('./models/document_models');

const app = express();
const port = process.env.PORT || 3002;

const documentRouter = require('./src/routes/document_routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', documentRouter);
  
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running app on PORT ${port}`);
  }
});