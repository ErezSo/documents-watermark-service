'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = mongoose.connect('mongodb://localhost/watermark_api');

const Document = require('./models/documentModels');

const app = express();
const port = process.env.PORT || 3002;

const documentRouter = require('./Routes/documentRoutes')(Document);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/documents', documentRouter);
  
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