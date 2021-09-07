module.exports = require('mongoose').connect(process.env.MONGODB_URI ||'mongodb://localhost/crime_media_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
