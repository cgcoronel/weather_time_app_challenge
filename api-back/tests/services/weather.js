const chai = require('chai')
const sinon = require('sinon')
const { mockReq, mockRes } = require('sinon-express-mock')
const controller = require('../../src/controllers/weather')
const service = require('../../src/services/weather')
const axios = require('axios')
const proxyquire = require('proxyquire')
const { expect } = chai

describe(' # Services - Weather', () => {
  describe(' - getLocation', () => {
    it('should call method getLocation ok!', async () => {
      const mock = {
        data: { city: 'Buenos Aires' }
      }

      const compare = {
        city: 'Buenos Aires'
      }

      const { getLocation } = proxyquire('../../src/services/weather', {
        axios: {
          get: sinon.fake.resolves(mock)
        }
      })

      const result = await getLocation('127.0.0.1')

      expect(result).to.be.eql(compare)
    })

    it('should call method getLocation error!', async () => {
      const { getLocation } = proxyquire('../../src/services/weather', {
        axios: {
          get: () => {
            throw 'mocked error'
          }
        }
      })

      const result = await getLocation('127.0.0.1')

      expect(result).to.be.eql(undefined)
    })
  })

  describe(' - getCurrent', () => {
    it('should call method getCurrent ok!', async () => {
      const mock = {
        data: { city: 'Buenos Aires' }
      }

      const compare = {
        city: 'Buenos Aires'
      }

      const { getCurrent } = proxyquire('../../src/services/weather', {
        axios: {
          get: sinon.fake.resolves(mock)
        }
      })

      const result = await getCurrent('127.0.0.1')

      expect(result).to.be.eql(compare)
    })

    it('should call method getCurrent error!', async () => {
      const { getCurrent } = proxyquire('../../src/services/weather', {
        axios: {
          get: () => {
            throw 'mocked error'
          }
        }
      })

      const result = await getCurrent('127.0.0.1')

      expect(result).to.be.eql(undefined)
    })
  })

  describe(' - getForecast', () => {
    it('should call method getForecast ok!', async () => {
      const mock = {
        data: { city: 'Buenos Aires' }
      }

      const compare = {
        city: 'Buenos Aires'
      }

      const { getForecast } = proxyquire('../../src/services/weather', {
        axios: {
          get: sinon.fake.resolves(mock)
        }
      })

      const result = await getForecast('127.0.0.1')

      expect(result).to.be.eql(compare)
    })

    it('should call method getForecast error!', async () => {
      const compare = {
        city: 'Buenos Aires'
      }

      const { getForecast } = proxyquire('../../src/services/weather', {
        axios: {
          get: () => {
            throw 'mocked error'
          }
        }
      })

      const result = await getForecast('127.0.0.1')

      expect(result).to.be.eql(undefined)
    })
  })
})
