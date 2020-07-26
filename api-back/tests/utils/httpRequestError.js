const chai = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { expect } = chai
const { HttpRequestError } = require('../../src/utils')

describe(' # Utils - httpRequestError', () => {
  describe(' - getLocation', () => {
    it('should create object', async () => {
      const httpReqError = new HttpRequestError(200, 'Message')

      expect(httpReqError.status).to.be.eql(200)
      expect(httpReqError.message).to.be.eql('Message')
    })
  })
})
