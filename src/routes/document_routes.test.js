'use strict'

const { expect } = require('chai');
const nock = require('nock');
const request = require('supertest');

describe('documentRouter via app.js', () => {
  describe('POST request', () => {
    it('should return 200 and ticket id', (done) => {
      nock('http://localhost')
        .post('/watermark/book/science')
        .reply(200, {
          ticket: '123456789qwerty'
        });

      const inputData = {
        params: '/book/science',
        body: {
          title: 'Bad Science',
          author: 'Ben Goldcare'
        }
      };

      const expectedData = {
        ticket: '123456789qwerty'
      }

      request('http://localhost')
        .post(`/watermark${inputData.params}`, inputData.body)
        .expect(200)     
        .end((err, res) => {
          expect(res.body.ticket).to.equal(expectedData.ticket);
          if (err) return done(err);
          done();
       });
    });
  });
})