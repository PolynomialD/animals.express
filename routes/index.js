const express = require('express')
const router = express.Router()

const dataRepository = require('../src/dataRepository')

// Our data from /data
const ads = dataRepository.loadFile('ads')
const animals = dataRepository.loadFile('animals')
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

module.exports = router
