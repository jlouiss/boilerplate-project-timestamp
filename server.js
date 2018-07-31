const express = require('express')
const cors = require('cors')

const app = express()


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
app.use(cors({ optionSuccessStatus: 200 }))
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})


const listener = app.listen(
	process.env.PORT,
	() => console.log(`Your app is listening on port ${ listener.address().port }`)
)
