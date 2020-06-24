const chai = require('chai')
const sinon = require('sinon')
const { mockReq, mockRes } = require('sinon-express-mock')
const controller = require('../../src/controllers/weather')
const service = require('../../src/services/weather')

const { expect } = chai

describe(' # Controllers - Weather', () => {
  describe(' - getLocation', () => {
    let stubMethod

    before(() => {
      stubMethod = sinon
        .stub(service, 'getLocation')
        .callsFake(() => Promise.resolve({ city: 'Buenos Aires' }))
    })

    after(() => {
      stubMethod.restore()
    })

    it('should throw a error when the ip is undefined', async () => {
      const req = mockReq()
      const res = mockRes()

      expect(() => controller.getLocation(req, res)).to.throw
    })

    it('should return 200 when the ip is valid', async () => {
      const req = mockReq({ headers: [{ 'x-forwarded-for': '127.0.0.1' }] })
      const res = mockRes()

      await controller.getLocation(req, res)

      expect(res.status.calledWith(200)).to.be.true
    })
  })

  describe(' - getCurrent', () => {
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

      expect(() => controller.getCurrent(req, res)).to.throw
    })

    it('should throw a error when the ip is valid and the city is undefined', async () => {
      const req = mockReq({ headers: [{ 'x-forwarded-for': '127.0.0.1' }] })
      const res = mockRes()

      expect(() => controller.getCurrent(req, res)).to.throw
    })

    it('should throw a error when the ip is valid and the city is valid', async () => {
      const req = mockReq({
        params: {
          city: 'Buenos Aires'
        },
        headers: [{ 'x-forwarded-for': '127.0.0.1' }]
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
  })

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
      const req = mockReq({ headers: [{ 'x-forwarded-for': '127.0.0.1' }] })
      const res = mockRes()

      expect(() => controller.getForecast(req, res)).to.throw
    })

    it('should throw a error when the ip is valid and the city is valid', async () => {
      const req = mockReq({
        params: {
          city: 'Buenos Aires'
        },
        headers: [{ 'x-forwarded-for': '127.0.0.1' }]
      })
      const res = mockRes()

      await controller.getForecast(req, res)

      expect(res.status.calledWith(200)).to.be.true
    })

    it('should throw a error when the ip is undefined and the city is valid', async () => {
      const req = mockReq({
        params: {
          city: 'Buenos Aires'
        }
      })
      const res = mockRes()

      await controller.getForecast(req, res)

      expect(res.status.calledWith(200)).to.be.true
    })
  })
})
