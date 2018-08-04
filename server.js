const app = require('./app')

const listener = app.listen(
  process.env.PORT || 1101,
  () => console.log(`Your app is listening on port ${ listener.address().port }`)
)
