/**
 * Create a new watermark object from the provided parameters
 * @param {Object} params 
 * @param {Object} bodyVars 
 */
const watermarker = (params, bodyVars) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const watermark = {};
      if (params.documentType) watermark.content = params.documentType;
      if (bodyVars.title) watermark.title = bodyVars.title;
      if (bodyVars.author) watermark.author = bodyVars.author;
      if (params.topic) watermark.topic = params.topic;
      resolve(watermark);
    }, 1000);
  })
}

module.exports = watermarker;