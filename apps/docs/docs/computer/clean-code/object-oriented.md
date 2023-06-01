# Object Oriented Programming

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
