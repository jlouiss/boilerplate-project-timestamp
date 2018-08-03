const request = require('supertest')
const app = require('../app')

describe('Learning TDD', () => {

  describe('Is not being easy at all', () => {
    test('It should work, otherwise I would get a bit frustrated', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    })
  })

})