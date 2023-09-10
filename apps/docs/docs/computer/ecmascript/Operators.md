# `super`

- The `super.prop` and `super[expr]` expressions are valid in any method definition in both classes and object literals.
- Super-calling static methods
- Deleting super properties will throw an error
- Using `super.prop` in object literals

# `typeof`

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)
- `typeof operand`
- `typeof(operand)`
- `typeof null; // 'object'`

```jsx
typeof undefined; // 'undefined'
typeof null; // 'object'
typeof true; // 'true'
typeof 1; // 'number'
typeof 1n; // 'bigint'
typeof '1'; // 'string'
typeof Symbol(); // 'symbol'
typeof function() {}; // 'function'
typeof []; // 'object'

typeof undeclaredVariable === 'undefined';

typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = 'hello';
class newClass{};

typeof document.all === 'undefined';
```