const express = require('express')
const router = express.Router()


router.get('/timestamp/:date_time?', (req, res) => {
  const default_timestamp_response = {
    unix: null,
    utc: 'Invalid Date'
  }

  const { date_time } = req.params
  const date = date_time === undefined ? new Date() : new Date(date_time)

  if (date === 'Invalid Date' && date_time !== undefined)
    res.json(default_timestamp_response)
  else
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
})


module.exports = router
