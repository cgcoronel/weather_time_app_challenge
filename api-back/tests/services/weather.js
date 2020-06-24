const chai = require('chai')
const sinon = require('sinon')
const { mockReq, mockRes } = require('sinon-express-mock')
const service = require('../../src/services/weather')
const axios = require('axios')

const { expect } = chai

describe(' # Services - Weather', () => {
  describe(' - getLocation', () => {
    let stubMethod

    before(() => {
      stubMethod = sinon.stub(axios, 'get').callsFake(() =>
        Promise.resolve({
          data: {
            city: 'Buenos Aires'
          }
        })
      )
    })

    after(() => {
      stubMethod.restore()
    })

    it('should call method getLocation', async () => {
      const result = await service.getLocation('127.0.0.1')

      expect(result).to.be.an.instanceof(Object)
    })
  })

  describe(' - getCurrent', () => {
    let stubMethod

    before(() => {
      stubMethod = sinon.stub(axios, 'get').callsFake(() =>
        Promise.resolve({
          data: {
            city: 'Buenos Aires'
          }
        })
      )
    })

    after(() => {
      stubMethod.restore()
    })

    it('should call method getCurrent', async () => {
      const result = await service.getCurrent('127.0.0.1')

      expect(result).to.be.an.instanceof(Object)
    })
  })

  describe(' - getForecast', () => {
    let stubMethod

    before(() => {
      stubMethod = sinon.stub(axios, 'get').callsFake(() =>
        Promise.resolve({
          data: {
            city: 'Buenos Aires'
          }
        })
      )
    })

    after(() => {
      stubMethod.restore()
    })

    it('should call methed getForecast', async () => {
      const result = await service.getForecast('127.0.0.1')

      expect(result).to.be.an.instanceof(Object)
    })
  })
})
