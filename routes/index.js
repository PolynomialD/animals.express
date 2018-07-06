const express = require('express')
const router = express.Router()

const dataRepository = require('../src/dataRepository')

// Our data from /data
const ads = dataRepository.loadFile('ads')
const animals = dataRepository.loadFile('animals')
const stuff = dataRepository.loadFile('stuff')

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

router.get('/addbuildings', (req, res) => {
  res.render('pages/addBuildings')
})

router.post('/addBuildings', (req, res) => {
  dataRepository.add('stuff', 'buildings', req.body)
  console.log(req.baseUrl)
  res.redirect(req.baseUrl + '/buildings')
})




module.exports = router
