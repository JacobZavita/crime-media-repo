const { model, Schema } = require('mongoose')

const Media = new Schema({
  title: String,
  description: String,
  tags: String,
  identity_topics: Array,
  cls_topics: Array,
  source: String,
  type: String,
  creators: Object
})

module.exports = model('Media', Media)