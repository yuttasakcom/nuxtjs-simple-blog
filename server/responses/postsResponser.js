const _ = require('lodash')

const fileds = [
  'id',
  'title',
  'content',
  'thumbnail',
  'author',
  'previewText',
  'likes',
  'views',
  'shares',
  'createdAt',
  'updatedAt'
]

exports.one = obj => _.pick(obj, fileds)
exports.all = objs => objs.map(obj => _.pick(obj, fileds))
