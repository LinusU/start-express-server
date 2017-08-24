/* eslint-env mocha */

'use strict'

const startExpressServer = require('./')

const assert = require('assert')
const got = require('got')

describe('My app', () => {
  let server

  before(async () => { server = await startExpressServer('./fixtures/app') })
  after(async () => { await server.close() })

  it('should give the API version', () => {
    return got(`${server.url}/version`, { json: true }).then((response) => {
      assert.deepStrictEqual(response.body, { version: '1.0.0' })
    })
  })
})
