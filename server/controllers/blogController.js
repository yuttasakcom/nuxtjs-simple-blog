const Blog = require('../models/blog')
const BlogResponser = require('../responses/blogResponse')

exports.create = (req, res, next) => {
  const params = req.body
  Blog.create(params)
    .then(blog => res.json(BlogResponser.one(blog)))
    .catch(next)
}

exports.edit = (req, res, next) => {
  const params = req.body
  Blog.findByIdAndUpdate({_id: req.params.id}, {$set: params})
    .then(blog => res.json(BlogResponser.one(blog)))
    .catch(next)
}

exports.remove = (req, res, next) => {
  res.json({message: 'OK'})
}

exports.getById = (req, res, next) => {
  Blog.findById(req.params.id)
    .then(blog => res.json(BlogResponser.one(blog)))
    .catch(next)
}

exports.index = (req, res, next) => {
  Blog.find()
    .then(blogs => res.json(BlogResponser.all(blogs)))
    .catch(next)
}
