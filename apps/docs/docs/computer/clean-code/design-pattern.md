# Design Pattern

- https://refactoring.guru/
- https://www.patterns.dev/

## Creational Design Patterns

## Structural Design Patterns

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
