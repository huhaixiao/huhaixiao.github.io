- [Everyday Types](#everyday-types)
  - [Functions](#functions)
- [More On Functions](#more-on-functions)
- [Type Manipulation](#type-manipulation)
    - [Generics](#generics)
    - [Typeof Type Operator](#typeof-type-operator)
- [Utility Types](#utility-types)

# Everyday Types

## Functions

Parameter Type Annotations
```ts
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

Return Type Annotations
```ts
function getFavoriteNumber(): number {
  return 26;
}
```

# More On Functions

## Function Type Expressions

```ts
type Ifn = (a: string) => void
```

## Call Signatures

```ts
type IDescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
```

## Construct Signatures

> You can write a *construct signature* by adding the new keyword in front of a call signature:

```ts
type SomeConstructor = {
  new (s: string): SomeObject;
};
```

> Some objects, like JavaScript's Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily:

```ts
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

## Generic Functions

```ts 
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```

## Inference

```ts 
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

### Constraints

```
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
```

### Working with Constrained Values

> It might look like this function is OK - Type is constrained to `{ length: number }`, and the function either returns Type or a value matching that constraint. The problem is that the function promises to return the same kind of object as was passed in, not just some object matching the constraint. 

```
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum }; // error
  }
}
```

### Specifying Type Arguments

```

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
return arr1.concat(arr2);
}

// Type 'string' is not assignable to type 'number'.
const arr = combine([1, 2, 3], ["hello"]); // error

```

# Type Manipulation

> Creating Types from Types

## Generics

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type = identity;
let myIdentity: <Input>(arg: Input) => Input = identity;
let myIdentity: { <Type>(arg: Type): Type } = identity;
```

## Typeof Type Operator

- [Typeof Type Operator](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)

```ts
let s = "hello";
let n: typeof s; // let n: string;
```

# Utility Types

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)


- `keyof T`
```ts
type T = typeof variable
type IType = keyof T
```
