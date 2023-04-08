- ***Low coupling***
- ***High cohension***
- ***DRY*** - Don’t Repeat Yourself
- ***KISS*** - Keep It Simple, Stupid
- ***YAGNI*** - You Ain’t Gonna Need It
- 两个方法的签名一致
    - 参数个数一致
    - 每个参数类型一致
    - 方法体的报错一致
    - 返回值一致

# **SOLID**

- ***SRP*** - Single Responsibility Principle
- ***OCP*** - Open Closed Principle
- ***DIP*** - Dependence Inversion Principle
- ***ISP*** - Interface Segregation Principle
- ***Liskov substitution principle***
    - Derived classes must be substitutable for their base classes - Robert.C.Marin
    - whatever the parent can do, the descendants should at least be able to do that
    - 子类overwrite父类方法的时候要保证签名一致
- ***Law of Demeter***
    - Each unit should have only limited knowledge about other units
    - a specific case of loose coupling

# Design Pattern

- [https://refactoring.guru/](https://refactoring.guru/)

## Creational

### factory method

### builder

### singleton

### prototype

## Structural

### Adapter

### Decorator

### Facade

### Proxy

## Behavioral

### Mediator

### Observer

### Strategy

### Template Method

### Visitor

# Mixins

> A mixin is an abstract subclass; i.e. a subclass definition that may be applied to different superclasses to create a related family of modified classes.
> 
- mixin definition: The definition of a class that may be applied to different superclasses.
- mixin application: The application of a mixin definition to a specific superclass, producing a new subclass.
- The mixin definition is really a subclass factory, parameterized by the superclass, which produces mixin applications. A mixin application sits in the inheritance hierarchy between the subclass and superclass.
- You can even look at normal subclass inheritance as a degenerate form of mixin inheritance where the superclass is known at class definition time, and there's only one application of it.
- subclassing is just a degenerate form of mixin

[https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)

super有毛用？子类与父类同时拥有的域相同的时候有用哟

## Traditional JavaScript Mixins

- Prototypes are modified in place
- `super` doesn't work
- Incorrect precedence
- Composition is compromised

```tsx
function mixin(source, target) {
  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }
}

mixin(MyMixin, MyClass.prototype);
```

## Better Mixins Through Class Expressions

- Subclasses can override mixin methods
- `super` works
- Composition is preserved

```tsx
let MyMixin = (superclass) => class extends superclass {
  foo() {
    console.log('foo from MyMixin');
  }
};

class MyClass extends MyMixin(MyBaseClass) {
  /* ... */
}

class MyClass extends Mixin1(Mixin2(MyBaseClass)) {
  /* ... */
}

let Mixin2 = (superclass) => class extends Mixin1(superclass) {
  /* Add or override methods here */
}

let CompoundMixin = (superclass) => Mixin2(Mixin3(superclass));
```

### Improving the Syntax

```tsx
class MyClass extends mix(MyBaseClass).with(Mixin1, Mixin2) {
  /* ... */
}

const mix = baseClass => ({
  with: (...mixins) => mixins.reduce((compond, mixin) => mixin(compond), baseClass)
})
```

# css

bem

```css
.block {}
.block__element {}
.block--modifier {}
```

- 高内聚、低耦合
- 代码大部分时候是用来维护的，而不是用来实现功能的
- 优秀的代码大部分是可以自描述的，好于文档和注释
- 勤于重构

# Clean Code

# SOLID

# OOP

# Refactoring

- 三大基本特性
- solid
- design pattern
- override
- overwrite
- overload
- suitcase
- briefcase
- undertake
- “就让它崩溃“（let it crash） 是 KISS（Keep It Simple, Stupid）原则在异常处理基本原则方面的直接推论。
- Minimize Coupling
- Maximize Cohesion
- Don’t repeat yourself
- Avoid Creating a YAGNI (You aren’t going to need it)
- Do the simplest thing that could possibly work
- Keep It Simple and Stupid 
- Don’t make me think
- Avoid Premature Optimization

[Refactoring and Design Patterns](https://refactoring.guru/)

# Creational Pattern

- Factory Method
- Abstract Factory
- Builder
- Prototype
- Singleton

# Structural Pattern

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

# Behavioral Pattern

- Chain of Responsibility
- Command
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

****代码大部分时候是用来维护的，而不是用来实现功能的****

****优秀的代码大部分是可以自描述的，好于文档和注释****

****勤于重构****