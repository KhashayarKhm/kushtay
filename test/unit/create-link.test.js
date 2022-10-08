const chaiHttp = require('chai-http')
const chai = require('chai')
const app = require('../../app')
const { assert } = require('chai')

chai.use(chaiHttp)

describe('POST /create', function () {
  const urlPath = '/create'

  it('should response with 400 status code on invalid url', async function () {
    const input = ['123', 'javascript:alert("hello")']
    const expected = { status: 400 }

    for (const inp of input) {
      const res = await chai.request(app).post(urlPath).send({ originUrl: inp })
      try {
        assert.equal(res.status, expected.status)
      } catch (error) {
        error.message += ` on "${inp}" value`
        throw error
      }
    }
  })

  it('should response with 201 status code on valid url', async function () {
    const input = [
      'https://google.com',
      'http://test.com',
      'ftp://ftp.adobe.com/',
      'test.com',
    ]
    const expected = { status: 201 }

    for (const inp of input) {
      const res = await chai.request(app).post(urlPath).send({ originUrl: inp })
      try {
        assert.equal(res.status, expected.status)
      } catch (error) {
        error.message += ` on "${inp}" value`
        throw error
      }
    }
  })
})
