const chai = require('chai')
const sinon = require('sinon')
const { mockReq, mockRes } = require('sinon-express-mock')
const controller = require('../../src/controllers/weather')
const service = require('../../src/services/weather')
const proxyquire = require('proxyquire')
const { HttpRequestError } = require('../../src/utils')

const { expect } = chai

describe(' # Controllers - Weather', () => {
  describe(' - getLocation', () => {
    it('should throw a error when the ip is undefined', async () => {
      const { getLocation } = proxyquire('../../src/controllers/weather.js', {
        '../utils': {
          getIpAddress: sinon.fake.resolves(undefined)
        }
      })

      let error
      try {
        await getLocation({}, {})
      } catch (err) {
        error = err
      }
      expect(error).to.throw
    })

    it('should throw a error when the city is undefined', async () => {
      const { getLocation } = proxyquire('../../src/controllers/weather.js', {
        '../utils': {
          getIpAddress: sinon.fake.resolves('127.0.0.1')
        },
        '../services/weather.js': {
          getLocation: sinon.fake.resolves({ city: false })
        }
      })

      let error
      try {
        await getLocation({}, {})
      } catch (err) {
        error = err
      }
      expect(error).to.throw
    })

    it('should return 200 when the ip is valid', async () => {
      const { getLocation } = proxyquire('../../src/controllers/weather.js', {
        '../utils': {
          getIpAddress: sinon.fake.resolves('127.0.0.1')
        },
        '../services/weather.js': {
          getLocation: sinon.fake.resolves({
            city: 'Buenos Aires'
          })
        }
      })

      const compare = {
        city: 'Buenos Aires'
      }

      const jsonStub = sinon.spy()

      const res = {
        status: sinon.fake.returns({
          json: jsonStub
        })
      }

      await getLocation({}, res)

      expect(compare).to.be.eql(jsonStub.firstCall.args[0])
    })
  })
  describe(' - getCurrent', () => {
    it('should throw a error when the ip is undefined and the city is undefined', async () => {
      const { getCurrent } = proxyquire('../../src/controllers/weather.js', {
        '../utils': {
          getIpAddress: sinon.fake.resolves(undefined)
        }
      })

      let error
      try {
        await getCurrent({ params: { city: null } }, {})
      } catch (err) {
        error = err
      }
      expect(error).to.throw
    })

    it('should throw a error when the ip is valid and the city is undefined', async () => {
      const { getCurrent } = proxyquire('../../src/controllers/weather.js', {
        '../utils': {
          getIpAddress: sinon.fake.resolves('127.0.0.1')
        }
      })

      let error
      try {
        await getCurrent({ params: { city: null } }, {})
      } catch (err) {
        error = err
      }
      expect(error).to.throw
    })
    /* 

    it('should throw a error when the ip is valid and the city is undefined', async () => {
      const req = mockReq({ clientIp: '127.0.0.1' })
      const res = mockRes()

      expect(() => controller.getCurrent(req, res)).to.throw
    })

    it('should throw a error when the ip is valid and the city is valid', async () => {
      const req = mockReq({
        params: {
          city: 'Buenos Aires'
        },
        clientIp: '127.0.0.1'
      })
      const res = mockRes()

      await controller.getCurrent(req, res)

      expect(res.status.calledWith(200)).to.be.true
    })

    it('should throw a error when the ip is undefined and the city is valid', async () => {
      const req = mockReq({
        params: {
          city: 'Buenos Aires'
        }
      })
      const res = mockRes()

      await controller.getCurrent(req, res)

      expect(res.status.calledWith(200)).to.be.true
    })
    */
  })
  /*
  describe(' - getForecast', () => {
    let stubGetCurrent
    let stubGetLocation

    before(() => {
      stubGetLocation = sinon
        .stub(service, 'getLocation')
        .callsFake(() => Promise.resolve({ city: 'Buenos Aires' }))

      stubGetCurrent = sinon.stub(service, 'getCurrent').callsFake(() =>
        Promise.resolve({
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'nubes dispersas',
              icon: '03n'
            }
          ]
        })
      )
    })

    after(() => {
      stubGetLocation.restore()
      stubGetCurrent.restore()
    })

    it('should throw a error when the ip is undefined and the city is undefined', async () => {
      const req = mockReq()
      const res = mockRes()

      expect(() => controller.getForecast(req, res)).to.throw
    })

    it('should throw a error when the ip is valid and the city is undefined', async () => {
      const req = mockReq({ clientIp: '127.0.0.1' })
      const res = mockRes()

      expect(() => controller.getForecast(req, res)).to.throw
    })
  })*/
})
