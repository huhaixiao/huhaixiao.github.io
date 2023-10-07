# Bit Manipulation

- 位运算

```ts
const a = 1
const b = 1

const c = a & b // a、b均为1 返回1；
const d = a | d // a、b均为0 返回0；
const e = a ^ b // a、b相等 返回1；
const f = ~a // 反转a
```

## Bitwise operators

### Bitwise logical operators

- The operands are converted to thirty-two-bit integers

#### Bitwise AND

- `a & b`
- 1 if both 1
- 0 if one is 0

#### Bitwise OR

- `a | b`
- 0 if both 0
- 1 if one is 1

#### Bitwise XOR

- `a ^ b`
- 0 if both same
- 1 if both different

#### Bitwise NOT

- `~ a`

### Bitwise shift operators

#### Left shift

- `a << b`
- `a * (2 ** b)`
- shifts the first operand the specified number of bits to the left.
- Excess bits shifted off to the left are discarded
- Zero bits are shifted in from the right

#### Sign-propagating right shift

- `a >> b`
- `a / (2 ** b)`

#### Zero-fill right shift

- `a >>> b`

## Binary Watch
- 401. Binary Watch

```tsx
function readBinaryWatch(turnedOn: number): string[] {
    const result = []
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            if (count1(i) + count1(j) === turnedOn) {
                result.push(i + ':' + (j < 10 ? '0' : '') + j)
            }
        }
    }
    return result
};

// count 1s in binary
function count1(n: number): number {
    let result = 0

    while (n) {
        if (n & 1) {
            result++
        }
        n >>= 1
    }

    return result
}
```

## Gary Code

- 89. Gray Code
- [https://www.notion.so/Math-equations-b4e9e4e03677413481a4910e8bd328c1#0ddeb26d5b5e495085ef54d529503f8f](https://www.notion.so/b4e9e4e03677413481a4910e8bd328c1)
- [https://katex.org/docs/supported.html](https://katex.org/docs/supported.html)
- [https://katex.org/docs/support_table.html](https://katex.org/docs/support_table.html)
- $/text{123}$
- 

$$
G(i)=i\oplus(i>>1)
$$

## Bitwise Operator

### Invert ~
```js
// 0000, 0的补码
// 1111, 所有位取反后的补码 -1
var a = ~0 // -1
```

### [Right shift (>>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)
