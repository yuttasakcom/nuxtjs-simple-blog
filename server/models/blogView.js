const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BlogViewSchema = new Schema({
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'blog'
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
})
const BlogView = mongoose.model('blogView', BlogViewSchema)
module.exports = BlogView
