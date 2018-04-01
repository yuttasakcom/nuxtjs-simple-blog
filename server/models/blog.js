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
  userLikes: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  userShares: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  userViews: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
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
  return this.userLikes.length
})

blogSchema.virtual('comments').get(function () {
  return 2
})

blogSchema.virtual('shares').get(function () {
  return this.userShares.length
})

blogSchema.virtual('views').get(function () {
  return this.userViews.length
})

const blog = mongoose.model('blog', blogSchema)

module.exports = blog
