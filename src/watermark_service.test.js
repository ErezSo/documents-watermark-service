'use strict'

const {expect} = require('chai');
const watermarker = require('./watermark_service');

describe('watermarker', () => {
  it('Create a new watermark object', () => {
    const inputData = {
      params: {
        documentType: 'book',
        topic: 'Science'
      },
      bodyVars: {
        title: 'Science book',
        author: 'Prof. book author'
      }
    }

    const expectedData = {
      content: 'book',
      title: 'Science book',
      author: 'Prof. book author',
      topic: 'Science'
    }

    return Promise.resolve(watermarker(inputData.params, inputData.bodyVars, 1000)).then(testDataPromise => {
      expect(testDataPromise).to.eql(expectedData);
    });
  });
})