- [Everyday Types](#everyday-types)
  - [Functions](#functions)
  - [Union Types](#union-types)
  - [Type Alias](#type-alias)
  - [Interfaces](#interfaces)
  - [Type Assertions](#type-assertions)
  - [Literal Types](#literal-types)
  - [Literal Inference](#literal-inference)
  - [Enums](#enums)
    - [Numeric enums](#numeric-enums)
    - [Computed and constant members](#computed-and-constant-members)
    - [`const` enums](#const-enums)
- [Narrowing](#narrowing)
  - [`typeof` type guards](#typeof-type-guards)
  - [Truthiness narrowing](#truthiness-narrowing)
  - [Equality narrowing](#equality-narrowing)
  - [The `in` operator narrowing](#the-in-operator-narrowing)
  - [`instanceof` narrowing](#instanceof-narrowing)
  - [Using type predicates](#using-type-predicates)
  - [Exhaustiveness checking](#exhaustiveness-checking)
- [More on Functions](#more-on-functions)
  - [Function Type Expressions](#function-type-expressions)
  - [Call Signatures](#call-signatures)
  - [Constraints](#constraints)
  - [Function Overloads](#function-overloads)
  - [Declaring `this` in a Function](#declaring-this-in-a-function)
- [Object Types](#object-types)
  - [Index Signatures](#index-signatures)
- [Type Manipulation](#type-manipulation)
  - [Generics](#generics)
    - [Generic Types](#generic-types)
    - [Generic Classes](#generic-classes)
    - [Generic Constraints](#generic-constraints)
  - [Keyof Type Operator](#keyof-type-operator)
  - [Mapped Types](#mapped-types)
    - [Key Remapping via `as`](#key-remapping-via-as)
- [Appendix](#appendix)

- [ ] https://zhuanlan.zhihu.com/p/350033675
- [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

# [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Functions

- Parameter Type Annotations
- Return Type Annotations
- Anonymous Functions
- *contextual typing*, because the *context* that the function occurred within informs what type it should have

## Union Types

- Defining a Union Type
- Working with Union Types
- TypeScript will only allow an operation if it is valid for *every* member of the union
- The solution is to *narrow* the union with code

## Type Alias

- A *type alias* is exactly that - a *name* for any *type*.

## Interfaces

- Type aliases may not participate in declaration merging, but interfaces can.
- Interfaces may only be used to declare the shapes of objects, not rename primitives.

## Type Assertions

- Upcasting
- Downcasting

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const a = (expr as any) as T;
let horse = deer as unknown as Horse
```

## Literal Types

```ts
let x: "hello" = "hello";
```

## Literal Inference

```ts
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```

```ts
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
```

```ts
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```

> The `as const` suffix acts like `const` but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like `string` or `number`.

## [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

### Numeric enums

- following members are auto-incremented
- enums without initializers either need to be first
- or have to come after numeric enums initialized with numeric constants or other constant enum members.

```ts
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
```

### Computed and constant members

```ts
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}
```

### `const` enums

```ts
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
 
let directions = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
];
```

```js
"use strict";
let directions = [
    0 /* Direction.Up */,
    1 /* Direction.Down */,
    2 /* Direction.Left */,
    3 /* Direction.Right */,
];
```

# [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

## [`typeof` type guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)

- `"string"`
- `"number"`
- `"bigint"`
- `"boolean"`
- `"symbol"`
- `"undefined"`
- `"object"`
- `"function"`

> In TypeScript, checking against the value returned by `typeof` is a type guard

## [Truthiness narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing)

- `0`
- `NaN`
- `""`
- `null`
- `undefined`
- `0n`

> all coerce to `false`

## [Equality narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing)

- `switch`
- `===`
- `!==`
- `==`
- `!=`

## [The `in` operator narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing)

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;

    // (parameter) animal: Fish | Human
  } else {
    animal;

    // (parameter) animal: Bird | Human
  }
}
```

## [`instanceof` narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());

    // (parameter) x: Date
  } else {
    console.log(x.toUpperCase());

    // (parameter) x: string
  }
}
```

## [Using type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

## Exhaustiveness checking

```ts
type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

# [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

## Function Type Expressions

```ts
type GreetFunction = (a: string) => void;
```

## Call Signatures

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
```

## Constraints

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
```

## [Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

```ts
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
```

> The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function.


> It looks at these special checks (called *type guards*) and assignments, and the process of refining types to more specific types than declared is called *narrowing*.

## [Declaring `this` in a Function](https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function)

```ts
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
 
const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```

# [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

## [Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

```ts
interface StringArray {
  [index: number]: string;
}
```

- An index signature property type must be either ‘string’ or ‘number’
- It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object. That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to be consistent.

```ts
// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}
```

# Type Manipulation

## Generics

### [Generic Types](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types)

```tsx
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;
```

### [Generic Classes](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes)

```tsx
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

### [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)

- Type Inference

```tsx
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity({ length: 10, value: 3 });
```

## [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

```ts
type Point = { x: number; y: number };
// type P = 'x' | 'y'
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
// type A = number;
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
// type M = string | number;
// JavaScript object keys are always coerced to a string
// obj[0] is always the same as obj["0"]
type M = keyof Mapish;
```

## [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

- A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

### [Key Remapping via `as`](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)
