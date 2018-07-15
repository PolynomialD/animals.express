const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))

const dataRepository = require('../src/dataRepository')

const stuff = dataRepository.loadFile('stuff')

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