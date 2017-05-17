'use strict'

const { expect } = require('chai');
const documentRouter = require('./document_routes');

describe('documentRouter', () => {
  describe('First test', () => {
    it('should pass', (done) => {
      expect(true).to.equal(true);
      done();
    });
  });
})