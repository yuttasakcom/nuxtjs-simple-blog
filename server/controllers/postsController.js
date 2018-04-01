const Post = require('../models/Post')
const PostsResponser = require('../responses/postsResponser')

exports.create = (req, res, next) => {
  const postProps = req.body
  Post.create(postProps)
    .then(post => res.json(PostsResponser.one(post)))
    .catch(next)
}

exports.edit = (req, res, next) => {
  res.json({message: 'OK'})
}

exports.remove = (req, res, next) => {
  res.json({message: 'OK'})
}

exports.getById = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => res.json(PostsResponser.one(post)))
    .catch(next)
}

exports.index = (req, res, next) => {
  Post.find()
    .then(posts => res.json(PostsResponser.all(posts)))
    .catch(next)
}
