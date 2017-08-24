'use strict'

const url = require('url')

// Delete ourselves from the cache so that module.parent always refers to the correct callee.
delete require.cache[require.resolve('./')]

module.exports = function startExpressServer (modulePath) {
  const app = module.parent.require(modulePath)

  return new Promise((resolve) => {
    const server = app.listen(() => {
      const address = server.address()
      const serverUrl = url.format({ protocol: 'http:', hostname: address.address, port: address.port })
      const close = () => new Promise((resolve) => server.close(() => resolve()))

      resolve({ close, url: serverUrl })
    })
  })
}
