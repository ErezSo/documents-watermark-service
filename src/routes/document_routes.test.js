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

 describe('GET request', () => {
    it('should return 200 and document record including watermark object', (done) => {
      nock('http://localhost')
        .get('/status/123456789qwerty')
        .reply(200, {
          "_id": "123456789qwerty",
          "title": 'Bad Science',
          "author": 'Ben Goldcare',
          "__v": 0,
          "watermark": {
            "content": "book",
            "title": 'Bad Science',
            "author": 'Ben Goldcare',
            "topic": "science"
          }
        });

      const inputData = {
        ticketId: '123456789qwerty'
      };

      const expectedData = {
          "_id": "123456789qwerty",
          "title": 'Bad Science',
          "author": 'Ben Goldcare',
          "__v": 0,
          "watermark": {
            "content": "book",
            "title": 'Bad Science',
            "author": 'Ben Goldcare',
            "topic": "science"
          }
        }

      request('http://localhost')
        .get(`/status/${inputData.ticketId}`)
        .expect(200)     
        .end((err, res) => {
          expect(res.body).to.eql(expectedData);
          if (err) return done(err);
          done();
       });
    });
  });
})