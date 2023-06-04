# Clean Code

## [TypesSript](https://www.typescriptlang.org/)

## OOP三大特性





```js
// SRP---BAD
class UserSettings {
  constructor (user) {
    this.user = user
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}
// SRP---GOOD
class UserAuth {
  constructor (user) {
    this.user = user
  }

  verifyCredentials() {
    // ...
  }
}

class UserSettings {
  constructor (user) {
    this.user = user
    this.auth = new UserAuth(user)
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}
```

```js
function Father(name) {
  this.name = name
}

Father.prototype.talk = function() {
  console.log("My name is " + this.name)
}

function Son(name, age) {
  Father.call(this, name)
  this.age = age
}

Son.prototype = new Father()
Son.prototype.constructor = Son

var son = new Son('son', 18)

son.talk()
```

## Don’t use third-party libraries directly

Instead of importing the third-party libraries directly, re-export them in one centralised place.

_src/lib/store.ts_

```js
export { useDispatch, useSelector ｝ from 'react-redux';
```

_src/lib/query.ts_

```js
export { useQuery, useMutation, useQueryClient } from 'react-query';
```
