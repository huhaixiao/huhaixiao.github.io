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
