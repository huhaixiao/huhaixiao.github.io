# Object Oriented Programming

1. 封装：将数据与相关操作封装到一个类中
2. 继承
3. 多态：同一方法具有不同实现
4. 重写与重载的区别
   1. 重载是一个类中有多个方法，但签名不同
   2. 重写是子类重写父类方法的实现

## Encapsulation

```ts
class Student {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
}
```

```ts
function Student(name) {
  this.name = name;
}

Student.prototype.getName = function () {
  return this.name;
};
Student.prototype.setName = function (name) {
  this.name = name;
};

```

## Inheritance

- [Classical inheritance with Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create)

```ts
class BoyStudent extends Student {
  private age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  public getAge() {
    return this.age;
  }

  public setAge(age: number) {
    this.age = age;
  }
}

```

```ts
function inherit(SubClass, SupClass) {
  const proto = {}
  Object.setPrototypeOf(proto, SupClass.prototype)
  SubClass.prototype = proto;
  SubClass.prototype.constructor = SubClass;
}

function BoyStudent(name, age) {
  Student.call(this, name);
  this.age = age;
}

inherit(BoyStudent, Student);

BoyStudent.prototype.getAge = function () {
  return this.age;
};

BoyStudent.prototype.setAge = function (age) {
  this.age = age;
};
```

## Polymorphism

```ts
const boyStudent: Student = new BoyStudent("boyStudent", 12);
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
