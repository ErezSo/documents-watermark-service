const mongoose = require('mongoose');

const documentModel = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  watermark: {
    content: { type: String },
    title: { type: String },
    author: { type: String },
    topic: { type: String }
  }
});

module.exports = mongoose.model('Document', documentModel);