const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ShareSchema = new Schema({
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'blog'
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
})
const Share = mongoose.model('share', ShareSchema)
module.exports = Share
