const express = require('express')
const router = express.Router()


router.get('/timestamp/:date_time?', (req, res) => {
  const default_timestamp_response = {
    unix: null,
    utc: 'Invalid Date'
  }
  res.json(default_timestamp_response)
})


module.exports = router
