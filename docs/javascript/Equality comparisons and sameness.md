- The Abstract Equality Comparison Algorithm (==)
- The Strict Equality Comparison Algorithm (===)
- SameValue (Object.is())
- SameValueZero(无API)

# SameValue

```tsx
Object.is(NaN, NaN) // true
Object.is(0, -0) // false
```

# SameValueZero

```tsx
const s = new Set()
s.add(0)
s.add(NaN)
s.has(-0) // true
s.has(NaN) // true

const a = [0, NaN]
a.includes(-0) // true
a.includes(NaN) // true
```