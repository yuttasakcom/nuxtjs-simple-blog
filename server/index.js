const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const dbname = process.env.DB_NAME || 'sample_blog'

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${host}:27017/${dbname}`)

app.disable('x-powered-by')

app.use(bodyParser.json())

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const routes = require('./routes')
app.use(routes)

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
