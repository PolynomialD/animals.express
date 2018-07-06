const express = require('express')
const router = express.Router()

const trees = require('../data/trees.json')

router.get('/', (req, res) => {
  res.render('pages/trees', { data: trees.weed })
})

module.exports = router
