# Object Oriented Programming

## Encapsulation

```ts
class Student {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string) {
        this.name = name
    }

    public getAge(): number {
        return this.age
    }

    public setAge(age: number) {
        this.age = age
    }
}
```

## Inheritance

```ts
class BoyStudent extends Student {
    private gender: 'boy'
    constructor(name: string, age: number) {
        super(name, age)
        this.gender = 'boy'
    }
}
```

## Polymorphism

```ts
class BoyStudent extends Student {
    private gender: 'boy'
    constructor(name: string, age: number) {
        super(name, age)
        this.gender = 'boy'
    }
}
```
