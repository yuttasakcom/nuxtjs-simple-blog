const router = require('express').Router()

const api = require('./api')
const error = require('./error')

router.use('/api', api)
router.use(error)

module.exports = router
