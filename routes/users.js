const express = require('express')
const router = express.Router()

/* GET users listing. 
 * localhost:3000/users
 * localhost:3000/users/
 */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

module.exports = router
