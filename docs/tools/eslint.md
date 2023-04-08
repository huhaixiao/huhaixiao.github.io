- [eslint](https://eslint.org/)

## [Getting Started](https://eslint.org/docs/latest/user-guide/getting-started)
- ESLint uses Espree for JavaScript parsing
- ESLint uses an AST to evaluate patterns in code
- ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime

```shell
npm init @eslint/config

# Run on two files
npx eslint file1.js file2.js

# Run on multiple files
npx eslint lib/**

npx eslint
```

## [Espree](https://github.com/eslint/espree)
```bash
npm i espree
```

```ts
import * as espree from "espree";

const ast = espree.parse(code);
```

```ts
const espree = require("espree");

const ast = espree.parse(code);
```

## [Esprima](https://esprima.org/)

```ts
var esprima = require('esprima');
var program = 'const answer = 42';

esprima.tokenize(program);

[ { type: 'Keyword', value: 'const' },
  { type: 'Identifier', value: 'answer' },
  { type: 'Punctuator', value: '=' },
  { type: 'Numeric', value: '42' } ]

esprima.parse(program);
{ type: 'Program',
  body:
   [
    { 
       type: 'VariableDeclaration',
       declarations: [Object],
       kind: 'const' 
    }
   ],
  sourceType: 'script' 
}
```