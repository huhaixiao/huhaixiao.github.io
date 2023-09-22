# instanceof

> The instanceof operator tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object.

```js
class Car {
  constructor(make) {
    this.make = make
  }
  static [Symbol.hasInstance]() {
    return false;
  }
}

const auto = new Car

console.log(auto instanceof Car)
```
