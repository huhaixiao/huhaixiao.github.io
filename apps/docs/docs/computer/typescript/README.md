# TypeScript

- https://www.typescriptlang.org/

```shell
npm i -D typescript @types/react @types/react-dom
npm i -D @babel/preset-typescript
```

## [基本类型](https://www.typescriptlang.org/docs/handbook/basic-types.html)

```ts
let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

let color: string = "blue";

let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Unknown
let notSure: unknown = 4;

// Any
let looselyTyped: any = 4;

function warnUser(): void {
  console.log("This is my warning message");
}

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// 两种类型断言
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
let strLength: number = (<string>someValue).length;
```

## `interface`

- ts的接口代表了 at least
- optional properties
- readonly properties
- excess property check(过量属性检查)

```ts
interface config{
  color?: string;
  width?: number;
  readonly x: number;
  readonly y: number;
  [prop: string]: any;
}

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// Indexable Types
interface StringArray {
  [index: number]: string;
}

// Class Types
interface ClockInterface {
  currentTime: Date;
  new (hour: number, minute: number): ClockInterface;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}

// Extending Interfaces
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}
```

- [type 与 interface区别](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
  1. `type` 可以声明联合类型
  2. `type` 不能声明融合
  3. `interface` 不能声明基本类型
  4. `type` 与 `interface` 编译报错不同
  5. 官方推荐`interface`, 因为是启发式的语法, 只有在必须用 `type` 的时候再用 `type`

```ts
interface Name { 
 name: string; 
}
interface User extends Name { 
 age: number; 
}

type Name = { 
 name: string;
}
type User = Name & { age: number };
```

### [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

1. 范型可以弱化代码对类型的要求

```ts
function identify<T>(arg: T): T {
  return arg
}

identify<string>('abc')
identify<number>(123)
```

- [OOP三大特性](#oop三大特性)
- [SOLID原则](#solid原则)
- [重写与重载的区别](#重写与重载的区别)
