# Start Express Server

Start an express server on a random port, and provide the url and an easy way of stopping the server.

## Installation

```sh
npm install --save start-express-server
```

## Usage

Example usage with [mocha](https://mochajs.org):

**test.js**

```js
const startExpressServer = require('start-express-server')

describe('My app', () => {
  let server

  before(async () => { server = await startExpressServer('./server') })
  after(async () => { await server.close() })

  it('should give the API version', () => {
    // Send a request to `${server.url}/version`
  })
})
```

**server.js**

```js
const app = require('express')()

app.get('/version', (req, res) => {
  res.json({ version: '1.0.0' })
})

module.exports = app
```

## API

### `startExpressServer(modulePath) => Promise<Server>`

Start the express app exported in the file pointed to by `modulePath`. The `modulePath` is resolved in the same way as if you would have called `require`, so relative paths should be given from the file you call this function in.

### `Server#url`

The url to the server, without a trailing slash.

Example `http://localhost:23943`

### `Server#close() => Promise`

Stop the server from listening for any connections.

## TypeScript

TypeScript typings is included with this package. In addition to the exported function, a `Server` interface is exported that describes the returned server object.

Example usage with [mocha](https://mochajs.org):

```ts
import startExpressServer = require('start-express-server')

describe('My app', () => {
  let server: startExpressServer.Server

  before(async () => { server = await startExpressServer('./server') })
  after(async () => { await server.close() })

  it('should give the API version', () => {
    // Send a request to `${server.url}/version`
  })
})
```
