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

  it('should return the right JSON for invalid dates', async () => {
    const expected_response = { unix: null, utc: 'Invalid Date' };
    const response = await chai.request(app).get(`${timestamp_url}/xyz`)
    expect(response.status).toEqual(200)
    expect(response.body).toMatchObject(expected_response)
  })

})

