const router = require('express').Router()
const PostsController = require('../controllers/postsController')

router.post('/posts', PostsController.create)
router.put('/posts/:id', PostsController.edit)
router.delete('/posts/:id', PostsController.remove)
router.get('/posts/:id', PostsController.getById)
router.get('/posts', PostsController.index)

module.exports = router
