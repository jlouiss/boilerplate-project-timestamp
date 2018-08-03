const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app')


chai.use(chaiHttp)

describe('Learning TDD', () => {

  describe('Is not being easy at all', () => {
    test('It should work with chai, too', async () => {
      const response = await chai.request(app).get('/');
      expect(response.status).toEqual(200);
      expect(response.body).toBeDefined();
    })
  })

})