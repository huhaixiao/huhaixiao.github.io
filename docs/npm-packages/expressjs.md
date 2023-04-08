- `npm i multer`

```jsx
const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

[Express - Node.js web application framework](https://expressjs.com/)

[Express JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE&t=273s)

```jsx
const path = require('path')
const express = require('express')
const logger = require('./middleware/logger')
const members = require('./members.js')

const app = express()

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger)

app.get('/api/members', (req, res) => res.json(members))

app.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname, 'public', 'index.html'))
  // res.send('<h1>Hello Express</h1>')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// 中间件方法, 可以访问request和response的方法
```

```jsx
const express = require('express')
const router = express.Router()

// localhost:5000/api/members
router.get('/', (req, res, next) => {

})

// localhost:5000/api/members/6
router.get('/:id', (req, res, next) => {
  const id = req.params.id
})

router.post('/', (req, res) => {
  res.send(req.body)
})

module.exports = router
```