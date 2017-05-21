/**
 * Create a new watermark object from the provided parameters
 * @param {Object} params - POST url parameters
 * @param {Object} bodyVars - POST body parameters
 * @param {Number} timeout - configurable timeout length with default value
 */
const watermarker = (params, bodyVars, timeout = 3000) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const watermark = {};
      if (params.documentType) watermark.content = params.documentType;
      if (bodyVars.title) watermark.title = bodyVars.title;
      if (bodyVars.author) watermark.author = bodyVars.author;
      if (params.topic) watermark.topic = params.topic;
      resolve(watermark);
    }, timeout);
  })
}

module.exports = watermarker;