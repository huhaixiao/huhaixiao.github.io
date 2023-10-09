# JEST

```bash
npm install --save-dev jest
```

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

- `npx jest --init`
- `npx jest --notify` - display a native OS notification after the run
- `npm run test`
- `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- npm packages dependencies
  - `jest`
  - `ts-jest`
  - `@types/jest`
  - `@jest/globals`
  - `jest-environment-jsdom`
  - `node-notifier`
  - `ts-node`

> Or you may choose to install the @types/jest package. It provides types for Jest globals without a need to import them.



```js
// @jest/globals
// sum.test.js
import {describe, expect, test} from '@jest/globals';
import {sum} from './sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

```js
// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

```js
// jest.config.js
module.exports = {
  transform: {},
};
```
