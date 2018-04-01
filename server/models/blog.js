const mongoose = require('mongoose')
const Schema = mongoose.Schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  previewText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

blogSchema.virtual('likes').get(function () {
  return 1
})

blogSchema.virtual('comments').get(function () {
  return 2
})

blogSchema.virtual('shares').get(function () {
  return 3
})

blogSchema.virtual('views').get(function () {
  return 4
})

const blog = mongoose.model('blog', blogSchema)

module.exports = blog
