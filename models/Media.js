const { model, Schema } = require('mongoose')

const Media = new Schema({
  label: String,
  description: String,
  tags: String
})

module.exports = model('Media', Media)