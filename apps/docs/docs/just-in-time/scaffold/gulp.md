# Gulp

- https://gulpjs.com

```
.
|
+-- gulpfile.js
|   |
|   +-- index.js
+-- ...
```

```js
const { series, parallel } = require('gulp');

function transpile(cb) {
  cb();
}
function bundle(cb) {
  cb();
}
function javascript(cb) {
  cb();
}
function css(cb) {
  cb();
}

exports.build = parallel(javascript, css)
exports.default = series(transpile, bundle)
```

```shell
npx gulp
npx gulp --tasks
npx gulp build
```
