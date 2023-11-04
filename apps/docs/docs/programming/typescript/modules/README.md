# Modules

- https://www.typescriptlang.org/docs/handbook/modules/reference.html

## Module syntax

### Importing and exporting TypeScript-specific declarations

```ts title="module.js"
// Standard JavaScript syntax...
export function f() {}
// ...extended to type declarations
export type SomeType = /* ... */;
export interface SomeInterface { /* ... */ }

export { f, SomeType, SomeInterface };

import { f, SomeType, SomeInterface } from "./module.js";

import * as mod from "./module.js";
mod.f();
mod.SomeType; // Property 'SomeType' does not exist on type 'typeof import("./module.js")'
let x: mod.SomeType; // Ok
```

### Type-only imports and exports

```ts title="main.ts"
import { f, type SomeInterface } from "./module.js";
import type { SomeType } from "./module.js";
class C implements SomeInterface {
  constructor(p: SomeType) {
    f();
  }
}
export type { C };
```

```ts title="main.js"
import { f } from "./module.js";
class C {
  constructor(p) {
    f();
  }
}
```

### `import()` types

```ts
// Access an exported type:
type WriteFileOptions = import("fs").WriteFileOptions;
// Access the type of an exported value:
type WriteFileFunction = typeof import("fs").writeFile;

/** @type {import("webpack").Configuration} */
module.exports = {
  // ...
}
```

### `export =` and `import = require()`

```ts title="main.ts"
import fs = require("fs");
export = fs.readFileSync("...");
```

```js title="main.js"
"use strict";
const fs = require("fs");
module.exports = fs.readFileSync("...");
```

```ts
// @Filename: a.ts
interface Options { /* ... */ }
module.exports = Options; // Error: 'Options' only refers to a type, but is being used as a value here.
export = Options; // Ok
// @Filename: b.ts
const Options = require("./a");
const options: Options = { /* ... */ }; // Error: 'Options' refers to a value, but is being used as a type here.
// @Filename: c.ts
import Options = require("./a");
const options: Options = { /* ... */ }; // Ok
```

## The `module` compiler option

## The `moduleResolution` compiler option
