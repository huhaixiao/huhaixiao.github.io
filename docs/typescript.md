- `intrinsic`

# tsconfig.json

```shell
# generate tsconfig.json
tsc --init
```

# enums

- [enums](https://www.typescriptlang.org/docs/handbook/enums.html)

```typescript
// Computed members
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}

// const enum
const enum Enum {
  A = 1,
  B = A * 2,
}
```
