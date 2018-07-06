const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))

const dataRepository = require('../src/dataRepository')

const trees = dataRepository.loadFile('trees')
// dataRepository.add('stuff', 'trees', { title: 'b', link: 'b', imgUrl: 'b', snippit: 'b' })

router.get('/', (req, res) => {
  res.render('pages/trees', { data: trees.weed })
})

router.get('/add', (req, res) => {
  res.render('pages/addTrees')
})

router.post('/add', (req, res) => {
  const requestData = req.body
  const data = {
    name: requestData.name,
    category: requestData.category,
    link: requestData.link,
    imgUrl: requestData.imgUrl,
    stats: {
      stretch: requestData.stretch,
      THC: requestData.THC,
      CBD: requestData.CBD,
    }
  }

  dataRepository.add('trees', 'new', data)
  res.sendStatus(202)
})

module.exports = router
