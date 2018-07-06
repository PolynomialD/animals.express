const express = require('express')
const router = express.Router()

// Our data from /data
const ads = require('../data/ads.json')
const animals = require('../data/animals.json')
const stuff = require('../data/stuff.json')
const trees = require('../data/stuff.json')
/* 
 * localhost:3000
 * localhost:3000/
 */
router.get('/', (req, res, next) => {
  res.render('pages/home', ads)
})

/* localhost:3000/dogs */
router.get('/dogs', (req, res) => {
  res.render('pages/animals', animals.dogs)
})

router.get('/cats', (req, res) => {
  res.render('pages/animals', animals.cats)
})

router.get('/buildings', (req, res) => {
  res.render('pages/stuff', { data: stuff.buildings })
})

router.get('/trees', (req, res) => {
  res.render('pages/trees', { data: trees.weed })
})

module.exports = router
