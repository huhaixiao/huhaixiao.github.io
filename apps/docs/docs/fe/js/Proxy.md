```jsx
const target = {}
const handler = {}
const proxy = new Proxy(target, handler)
```

# `get(target, property, receiver)`

- A trap for getting a property value

```jsx
const handler = {
  get: function(target, prop, receiver) {
    return Reflect.get(...arguments);
  }
};
```

# `set(target, property, value, receiver)`

- A trap for setting a property value

# `has(target, prop)`

- A trap for the `in` operator.

# Reflect

- [What does the Reflect object do in JavaScript?](https://stackoverflow.com/questions/25421903/what-does-the-reflect-object-do-in-javascript)
- Default forwarding behavior for Proxy traps