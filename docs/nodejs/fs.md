# fs

```jsx
var fs = require('fs')

fs.unlink(filePath, err => {
  if (err) {
    console.log({ ...err })
  } else {
    console.log('fs.unlink success')
  }
})
```