# Tree Shaking

- https://webpack.js.org/guides/tree-shaking/
- [static-module-structure](https://exploringjs.com/es6/ch_modules.html#static-module-structure)
  - can determine imports and exports at compile time(statically)
  - You can only import and export at the top level(never nested inside a conditional statement)
  - CommonJS is not static
  - Benefit: dead code elimination during bundling
  - Benefit: compact bundling, no custom bundle format
  - Benefit: faster lookup of imports
  - Benefit: variable checking
  - Benefit: ready for macros
    - you can add new syntax to it via a library
  - Benefit: ready for types
    - types can only be imported from modules if they have a static structure.
  - Benefit: supporting other languages
