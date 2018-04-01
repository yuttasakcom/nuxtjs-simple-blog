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

exports.index = (req, res, next) => {
  res.json({message: 'OK'})
}
