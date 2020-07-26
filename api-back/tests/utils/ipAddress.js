const chai = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { expect } = chai

describe(' # Utils - ipAddress', () => {
  it('should call method ok!', async () => {
    const { getIpAddress } = require('../../src/utils')
    const result = getIpAddress({ clientIp: 'fffff:127.0.0.1' })
    expect(result).to.be.eql('127.0.0.1')
  })

  it('should call method error!', async () => {
    const { getIpAddress } = proxyquire('../../src/utils', {
      './logger': {
        error: sinon.fake.returns('')
      }
    })
    const result = getIpAddress({})
    expect(result).to.be.eql(undefined)
  })
})
