# Bit Manipulation

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
