const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CommentSchema = new Schema({
  blog: [{
    type: Schema.Types.ObjectId,
    ref: 'blog'
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  content: {
    type: String,
    required: true
  }
})
const Comment = mongoose.model('comment', CommentSchema)
module.exports = Comment
