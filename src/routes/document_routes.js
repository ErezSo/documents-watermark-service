const express = require('express');
const Document = require('../../models/document_models');
const watermarker = require('../watermark_service');

const documentRouter = express.Router();

// POST
documentRouter.route('/watermark/:documentType')
  .post((req, res) => {

    const document = new Document({
      title: req.body.title,
      author: req.body.author,
      topic: req.body.topic || undefined
    });

    if (!req.body.title && !req.body.author && !req.params.documentType) {
      res.status(400);
      res.send('Title and author are required');
    }
    else {

      // Save document in a new record
      Promise.resolve(document.save())
        .then(document => {
          res.status(201).send({ ticket: document._id });
        })
        .catch(err => {
          res.status(400).send('Document failed to save')
          new Error(err);
        });

      // Save the created watermark to the existing DB record
      Promise.resolve(watermarker(req.params, req.body))
      .then(watermark => {
        Document.findById(document._id)
        .then(document => {
          document.watermark = watermark;
          document.save()
          .catch(err => new Error('Failed to save the watermark to DB', err));
        })
      })
      .catch(err => new Error('Failed to create the watermark', err));
    }
  });

// GET
documentRouter.route('/status/:documentId')
  .get((req, res) => {
    Document.findById(req.params.documentId, (err, document) => {
      if (err) {
        res.status(500).send(err);
      }
      else if (document) {
        res.json(document);
      }
      else {
        res.status(404).send('No document found');
      }
    });
  });

module.exports = documentRouter;