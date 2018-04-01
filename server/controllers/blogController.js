const Blog = require('../models/blog')
const BlogResponser = require('../responses/blogResponse')

exports.create = (req, res, next) => {
  const params = req.body
  Blog.create(params)
    .then(post => res.json(BlogResponser.one(post)))
    .catch(next)
}

exports.edit = (req, res, next) => {
  res.json({message: 'OK'})
}

exports.remove = (req, res, next) => {
  res.json({message: 'OK'})
}

exports.getById = (req, res, next) => {
  Blog.findById(req.params.id)
    .then(post => res.json(BlogResponser.one(post)))
    .catch(next)
}

exports.index = (req, res, next) => {
  Blog.find()
    .then(posts => res.json(BlogResponser.all(posts)))
    .catch(next)
}
