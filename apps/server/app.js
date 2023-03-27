const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.use(express.static('public'))

app.listen(port)
// app.METHOD(PATH, HANDLER)
