const router = require('express').Router()
const BlogController = require('../controllers/blogController')

router.post('/blogs', BlogController.create)
router.put('/blogs/:id', BlogController.edit)
router.delete('/blogs/:id', BlogController.remove)
router.get('/blogs/:id', BlogController.getById)
router.get('/blogs', BlogController.index)

module.exports = router
