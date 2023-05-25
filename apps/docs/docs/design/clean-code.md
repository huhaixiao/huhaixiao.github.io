# Clean Code

- [refactoring.guru](https://refactoringguru.cn/design-patterns/structural-patterns)
- [JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Classical inheritance with `Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create)
- 封装 - 隐藏对象的属性和实现细节, 对外公开接口
- 继承
- 多态
- 高内聚(模块内), 低耦合(模块间)
- Separation of concerns
- 高内聚、低耦合
- DRY
- KISS
- YAGNI
- 代码大部分时候是用来维护的，而不是用来实现功能的
- 优秀的代码大部分是可以自描述的，好于文档和注释
- 设计模式只是手段，代码清晰才是目的
- 代码整洁的常见手段
  - code review
  - 勤于重构
  - 静态检查
  - 多读开源代码和身边优秀同学的代码
- 代码整洁的常见技巧
- 单一职责
- 面向接口编程
- 封装 继承 多态
- SOLID
- 最少知道原则
- 懒加载，需要时再创建，对象的创建要紧挨着变量的使用，避免创建无用的对象

- Keep it Simple Stupid
- you aren't gonna need it
- Separation of Concerns
- Don't Repeat Yourself
- Single Source of Truth
- 避免过早优化
- 童子军规则
 - 离开营地时让它比你发现它时更干净
 - 童子军规则规定我们应该始终保持代码比我们发现的更干净
- Separation of Concerns

## SOLID

- Single Responsibility
- Open Close
- Liskov Substitution
- Dependency Injection


### 单一责任原则(Single Responsibility)

- 封装
- 一个类, 只有一个职责, 只有一个引起其变化的原因
- 实现高内聚、低耦合的指导方针
  1. 类内的属性被方法依赖的越多越内聚
- 最简单也最难, 类的颗粒度大小难以控制
- DAO模式 - Data Access Object,
  1. 隔离了数据访问代码和业务逻辑代码, 符合SRP
  2. 隔离了不通数据库实现, MySQL换Oracle只需要增加一个新的实现类, 符合OCP

### 开闭原则(Open Close)

- 继承
- 一个类, 对拓展开放, 对修改关闭

### 里氏替换(Liskov Substitution)

- 多态
- 基类可以出现的地方子类一定可以出现

### 接口隔离(Interface Segregation)

- 不应该出现的接口不应该出现
- 接口应该足够小
- 实现类不应该依赖其不需要的接口; 因为对于接口中出现的方法, 不管对类有用或者无用, 类都要去实现它

### 依赖注入(Dependency Inversion)

- 控制反转 - Inversion Of Control
  - 高层模块不要依赖低层模块, 抽象不依赖实现
- 依赖注入是控制反转的实现

### 迪米特法则(最少知道原则)


## Design Pattern

### Creation

- factory method - `getProduct()`
- singleton - `private constructor`
- prototype - `clone`
- builder
  - 子类可能过多的时候
  - 通过Director主管控制实例的生成
- abstract factory - `getFactory()`
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

#### Factory-function
> 把实例化的过程交给工厂方法

```typescript
class Factory{
    getProduct(type, data): Car {
        if(type === 'bmw') return new BMW(data)
        if(type === 'benz') return new BENZ(data)
    }
}

interface Car{
    type: string;
    data: any;
}
```

#### Singleton
> 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。

```typescript
class Singleton{
    private static instance = null
    private static getInstance() {
        if(!this.instance) {
            this.instance = new Singleton
        }

        return this.instance
    }
    private constructor() {}
}
```

#### Builder
> 可能存在的子类过多时

```javascript
class HouseBuilder{
    constructor() {}

    buildWalls() {}
    buildDoors() {}
    buildRoof() {}
    buildGarage() {}
}
```

#### Prototype

```javascript
const proto = new Prototype
const clone = proto.clone()
```

### Structural

- decorator - 对实例的公共接口进行二次封装(装饰)
- adapter - `class Adapter extends Target`
- facade - 为多个复杂的子系统, 提供一个一致的接口
- composite - 组合模式, 部分整体模式, 所有节点实现相同接口, 有`add()`和`remove()`
- bridge - `抽象API指向具体实现, 隔离实现代码`
  与策略模式的区别, bridge是一次性的修改实现, 策略是实现的切换
- flyweight - 享元, 共享内存
- proxy - 代理, 减少开销

#### Adapter

```javascript
class Target {
    request() {}
}

class Adaptee {
    request() {}
}

class Adapter extends Target {
    private adaptee: Adaptee = null

    constructor(adaptee) {
        super()
        this.adaptee = adaptee
    }

    request() {
        this.adaptee.request()
    }
}
```

### Behavorial Pattern

- Chain of Responsibility - is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
- Mediator
- Memento - TODO
- Observer
- State - 实例状态不同, 实现不同
- Strategy - 动态改变实现
- Template Method
  - defines the skeleton of an algorithm in the superclass
  - but lets subclasses override specific steps of the algorithm without changing its structure.
- Visitor - separate algorithms from the objects on which they operate.

```js
// State
class Car {

}
// Strategy
class Car {
  constructor(runStrategy) {
    this.setMaintainStrategy()
    this.setRunStrategy(runStrategy)
  }

  setRunStrategy(runStrategy) {
    this.runStrategy = runStrategy
  }

  run() {
    this.runStrategy.run()
  }
}

// Template Method
class Super {
  strategy() {
    action1()
    action2()
  }
}

class Sub1 extends Super {
  action1() {}
  action2() {}
}

class Sub2 extends Super {
  action1() {}
  action2() {}
}

// Visitor
function visitor(user) {

}

class User {
  action() {
    visitor(this)
  }
}
```

## JS Object descriptor
```js
const o = {}
Object.defineProperty(o, 'name', {
  configurable: true,
  enumerable: true,
  value: 'OBJECT',
  writable: true,
})

let age = NaN
Object.defineProperties(o, {
  age: {
    get() { return age },
    set(newVal) { age = parseInt(newVal) },
    configurable: true,
    enumerable: true,
  }
})

Object.getOwnPropertyDescriptor(o, 'age')
Object.getOwnPropertyDescriptors(o).name
```

### permissions
```js
const o = {}
Object.preventExtensions(o)
Object.isExtensible(o) // extensible

Object.seal(o)
Object.isSealed(o) // non-configurable

Object.freeze(o)
Object.isFrozen(o) // non-changeable
```

### `prototype`
```js
Object._create = function (proto) {
  var obj = {}
  Object.setPrototypeOf(obj, proto)

  return obj
}

Object._getPrototypeOf = function (obj) {
  return obj.__proto__
}

Object._setPrototoypeOf = function (obj, prototype) {
  obj.__proto__ = prototype
}

Object.prototype._isPrototypeOf = function (obj) {
  var proto = Object.getPrototypeOf(obj)

  while (proto) {
    if (proto === this) return true
    proto = Object.getPrototypeOf(proto)
  }

  return false
}
function _instanceof(L, R) {
  var proto = Object.getPrototypeOf(L)

  while (proto) {
    if (proto === R) return true
    proto = Object.getPrototypeOf(proto)
  }

  return false
}
```

### 属性描述

```js
var descriptor = {
  configurable: true,
  enumerable: true,
  // data descriptor
  writable: true,
  value: 'any',
  // access descriptor
  get: () => 'any',
  set: val => { }
  // data descriptor, 与access descriptor同时会报错
}

var o = {}
Object.defineProperty(o, 'prop', descriptor)

Object.getOwnPropertyDescriptor(o, 'prop')
```

## [TypesSript](https://www.typescriptlang.org/)

```
npm i -D typescript @types/react @types/react-dom
npm i -D @babel/preset-typescript
```

### [基本类型](https://www.typescriptlang.org/docs/handbook/basic-types.html)

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

## OOP三大特性

1. 封装：将数据与相关操作封装到一个类中
2. 继承
3. 多态：同一方法具有不同实现

## 重写与重载的区别

1. 重载是一个类中有多个方法，但签名不同
2. 重写是子类重写父类方法的实现

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
