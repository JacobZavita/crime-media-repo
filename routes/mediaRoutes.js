const router = require('express').Router()
const { Media } = require('../models')

router.get('/media', (req, res) => {
  Media.find({})
    .then(medias => res.json(transactions))
    .catch(err => console.log(err))
})

router.post('/media', (req, res) => {
  Media.create(req.body)
    .then(media => res.json(media))
    .catch(err => console.log(err))
})

module.exports = router
