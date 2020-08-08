const chai = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { expect } = chai
const { ResponseHandler } = require('../../src/utils')

describe(' # Utils - responseHandler', () => {
  describe(' - responseHandler', () => {
    it('should ok method ok!', async () => {
      const jsonStub = sinon.spy()

      const res = {
        status: sinon.fake.returns({
          json: jsonStub
        })
      }

      await ResponseHandler.ok(res, true)

      expect(jsonStub.firstCall.args[0]).to.eql(true)
    })

    it('should created method ok!', async () => {
      const jsonStub = sinon.spy()

      const res = {
        status: sinon.fake.returns({
          json: jsonStub
        })
      }

      await ResponseHandler.created(res, true)

      expect(jsonStub.firstCall.args[0]).to.eql(true)
    })

    it('should bad request method ok!', async () => {
      const jsonStub = sinon.spy()

      const res = {
        status: sinon.fake.returns({
          json: jsonStub
        })
      }

      await ResponseHandler.badRequest(res, true)

      expect(jsonStub.firstCall.args[0]).to.eql({ message: 'true' })
    })

    it('should forbidden method ok!', async () => {
      const jsonStub = sinon.spy()

      const res = {
        status: sinon.fake.returns({
          json: jsonStub
        })
      }

      await ResponseHandler.forbidden(res, true)

      expect(jsonStub.firstCall.args[0]).to.eql({ message: 'true' })
    })

    it('should not found method ok!', async () => {
      const jsonStub = sinon.spy()

      const res = {
        status: sinon.fake.returns({
          json: jsonStub
        })
      }

      await ResponseHandler.notFound(res, true)

      expect(jsonStub.firstCall.args[0]).to.eql({ message: 'true' })
    })

    it('should internal error method ok!', async () => {
      const jsonStub = sinon.spy()

      const res = {
        status: sinon.fake.returns({
          json: jsonStub
        })
      }

      await ResponseHandler.internalError(res, true)

      expect(jsonStub.firstCall.args[0]).to.eql({ message: 'true' })
    })

    it('should custom code method ok!', async () => {
      const jsonStub = sinon.spy()

      const res = {
        status: sinon.fake.returns({
          json: jsonStub
        })
      }

      const dd = await ResponseHandler.customCode(res, true)
      expect(jsonStub.firstCall.args[0]).to.eql({ message: 'true' })
    })
  })
})
