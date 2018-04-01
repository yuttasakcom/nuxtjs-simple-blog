const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LikeSchema = new Schema({
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'blog'
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
})
const Like = mongoose.model('like', LikeSchema)
module.exports = Like
