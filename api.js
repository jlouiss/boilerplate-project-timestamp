const express = require('express')
const router = express.Router()


router.get('/timestamp/:date_time', (req, res) => {
  res.json({debug: 'doing something'})
})


module.exports = router
