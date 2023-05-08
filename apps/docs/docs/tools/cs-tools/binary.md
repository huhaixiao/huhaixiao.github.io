- [机器数](#机器数)
- [原码](#原码)
- [反码](#反码)
- [补码](#补码)
- [bitwise operator](#bitwise-operator)
- [octal](#octal)
- [decimal](#decimal)
- [hex](#hex)

# 机器数

- 首位为符号位
- 真值: 将带符号位的的机器数所对应的真正数值成为机器数的真值
  - `0000 0001`的真值 = `+000 0001` = +1
  - `1000 0001`的真值 = `-000 0001` = -1
- 原码: 符号位 + 真值的绝对值
- 反码: 解决正数 + 负数问题
  - 正数的反码是其本身
  - 负数的反码是除符号位外按位取反
- 补码: 解决 +- 零问题
  - 正数的补码是其本身
  - 负数的补码是负数的反码+1

0 1
<!-- https://blog.csdn.net/afsvsv/article/details/94553228 -->
<!-- TODO  二进制运算法则 -->
# 原码

- 最简单的机器数表示法, 最高位表示符号位, '1' 表示负号, '0' 表示正号
- 最大的问题是, 一个数加上相反数不等于0, 与负数运算有问题

# 反码

- 存在的意义：解决负数加法运算问题
- 正数的反码还是本身
- 负数的反码是除符号位外, 按位取反

# 补码

- 存在的意义：解决负数加法运算正负零问题

# bitwise operator
> A bitwise operator treats their operands as a set of 32 bits (zeros and ones)

- AND
  - a & b
  - returns a 1 in each bit position for which the corresponding bits of both operands are 1s
- OR
  - a | b
  - returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s
- XOR
  - a ^ b
  - returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s
- NOT
  - ~ a
  - inverts the bits of its operand.

```javascript
// 使用XOR交换两个number的值
var a = 0, b = 1

a = a^b
b = a^b
a = a^b
```

# octal

0 1 2 3 4 5 6 7

# decimal

0 1 2 3 4 5 6 7 8 9

# hex

0 1 2 3 4 5 6 7 8 9 a b c d e f