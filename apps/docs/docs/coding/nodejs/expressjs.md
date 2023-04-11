- `$ npm install express --save`

# App

```jsx
const express = require('express')
const app = express()

app.get('/user/:id', function (request, respond) {
  respond.setHeader('Content-Disposition', 'attachment; filename="test.txt"')
  respond.send(`
  <div>
    id: user ${request.params.id} <hr/>
    hostname: ${request.hostname} <hr/>
    protocol: ${request.protocol} <hr/> <br/> <br/> <br/>

    Accept: ${request.headers['accept']} <hr/>
    Accept-Encoding: ${request.headers['accept-encoding']} <hr/>
    Accept-Language: ${request.headers['accept-language']} <hr/>
    Cache-Control: ${request.headers['cache-control']} <hr/>
    Connection: ${request.headers['connection']} <hr/>
    Host: ${request.headers['host']} <hr/>
    If-None-Match: ${request.headers['if-none-match']} <hr/>
    sec-ch-ua: ${request.headers['sec-ch-ua']} <hr/>
  </div>
  `)
})

app.get('/download', function (request, respond) {
  respond.send(`
  <div>
    id: user ${request.params.id} <hr />
    hostname: ${request.hostname} \n
    protocol: ${request.protocol} \n

    Accept: ${request.headers.accept}
  </div>
  `)
})

app.listen(3000)
```