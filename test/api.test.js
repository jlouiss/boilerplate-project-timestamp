const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app')
chai.use(chaiHttp)


const timestamp_url = '/api/timestamp'


describe('Timestamp API tests', () => {

  it('should pass this sanity check', async () => {
    const response = await chai.request(app).get(`${timestamp_url}/argument`)
    expect(response.status).toEqual(200)
    expect(response.body).toBeDefined()
  })

  it('should return the current timestamp when called without an argument', async () => {
    const response = await chai.request(app).get(`${timestamp_url}`)
    expect(response.status).toEqual(200)
    expect(response.body.hasOwnProperty('unix')).toBeTruthy()
    expect(response.body.hasOwnProperty('utc')).toBeTruthy()
  })

  it('should return an integer unix timestamp', async () => {
    const response = await chai.request(app).get(`${timestamp_url}/`)
    expect(response.status).toEqual(200)
    expect(typeof response.body.unix).toEqual('number')
  })

  it('should return a utc string', async () => {
    const response = await chai.request(app).get(`${timestamp_url}`)
    expect(response.status).toEqual(200)
    expect(typeof response.body.utc).toEqual('string')
  })

  describe('should return the right JSON for invalid dates', () => {
    const expected_response = { unix: null, utc: 'Invalid Date' };

    it('should work with a random string', async () => {
      const response = await chai.request(app).get(`${timestamp_url}/xyz`)
      expect(response.status).toEqual(200)
      expect(response.body).toMatchObject(expected_response)
    })
  })

})