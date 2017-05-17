const express = require('express');
const Document = require('../models/document_models');

const documentRouter = express.Router();

documentRouter.route('/watermark/:documentType/:topic')
  .post((req, res) => {

    const document = new Document({
      title: req.body.title,
      author: req.body.author,
      watermark: undefined,
      status: 'In progress'
    });

    if (!req.body.title && !req.body.author) {
      res.status(400);
      res.send('Title  and author are required');
    }
    else {
      document.save();
      res.status(201);
      res.send({ ticket: document._id });
    }
  });

module.exports = documentRouter;