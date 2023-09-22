# Design Pattern

- https://refactoring.guru/
- https://www.patterns.dev/

## Creational Design Patterns

### Factory-function

```typescript
interface Car{
    type: string;
    data: any;
}

class Factory{
    getProduct(type, data): Car {
        if(type === 'bmw') return new BMW(data)
        if(type === 'benz') return new BENZ(data)
    }
}
```

### Singleton

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

### Builder

```javascript
class HouseBuilder{
    constructor() {}

    buildWalls() {}
    buildDoors() {}
    buildRoof() {}
    buildGarage() {}
}
```

### Prototype

```javascript
const proto = new Prototype
const clone = proto.clone()
```

## Structural Design Patterns

- decorator - 对实例的公共接口进行二次封装(装饰)
- adapter - `class Adapter extends Target`
- facade - 为多个复杂的子系统, 提供一个一致的接口
- composite - 组合模式, 部分整体模式, 所有节点实现相同接口, 有`add()`和`remove()`
- bridge - `抽象API指向具体实现, 隔离实现代码`
  与策略模式的区别, bridge是一次性的修改实现, 策略是实现的切换
- flyweight - 享元, 共享内存
- proxy - 代理, 减少开销


### Adapter

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

### Decorator

- https://refactoring.guru/design-patterns/decorator/typescript/example

```ts
interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    /**
     * The Decorator delegates all work to the wrapped component.
     */
    public operation(): string {
        return this.component.operation();
    }
}
```

## Behavioral Design Patterns

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

### Observer

#### EventTarget

```ts
class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() {
    return this._secret;
  }
}

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret; // === 5
myEventTarget.addEventListener("foo", (e) => {
  myEventTarget._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // === 7


EventTarget()
EventTarget.addEventListener()
EventTarget.removeEventListener()
EventTarget.dispatchEvent()
```

#### eventemitter3

```shell
npm install --save eventemitter3
```

```ts
var EventEmitter = require('eventemitter3');
```

#### node:events

```ts
import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
```
