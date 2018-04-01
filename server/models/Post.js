const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = new Schema({
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
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
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

const Post = mongoose.model('post', PostSchema)

module.exports = Post
