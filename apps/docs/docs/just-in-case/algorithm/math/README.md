# Math

- [数学](https://leetcode-cn.com/tag/math/)
- factorial
- fibnacci
- [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)
- [7. 整数反转](https://leetcode-cn.com/problems/reverse-integer/)
- [67. 二进制求和](https://leetcode-cn.com/problems/add-binary/)
- [69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)
- [168. Excel表列名称](https://leetcode-cn.com/problems/excel-sheet-column-title/)
  - 递归
  - mod为0特殊处理
- [204. 计数质数](https://leetcode-cn.com/problems/count-primes/)
  - 质数 - 只能被1或本身整除
  - 埃氏筛
- [396. 旋转函数](https://leetcode-cn.com/problems/rotate-function/)
  - `BigInt(- (2 ** 64))` 定义最小数
- [453. 最小操作次数使数组元素相等](https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/)
  - 逆向思维
  - 除最大值外都+1 === 最大值-1
- [507. 完美数](https://leetcode-cn.com/problems/perfect-number/)
- [836. 矩形重叠](https://leetcode-cn.com/problems/rectangle-overlap/)
- [914. 卡牌分组](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)
- [970. 强整数](https://leetcode-cn.com/problems/powerful-integers/)
- [1013. 将数组分成和相等的三个部分](https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/)
  1. 首选算A的累加和能否被3整除，不可以那分不了3等分。
  2. 双指针前后向中间逼近，不用考虑中间那段怎么分，只要左右两段累加和等于3等分的数值，中间剩的那段也就找到了。
- [1037. 有效的回旋镖](https://leetcode-cn.com/problems/valid-boomerang/)
- [1056. 易混淆数](https://leetcode-cn.com/problems/confusing-number/)
  - 遍历一般

## 阶乘(factorial)

```js
function factorial(n) {
  var i = 1

  while (n) {
    i *= n
    n--
  }

  return i
}
```

## 集合

$$ x \in A \text{x属于A} $$

$$ x \in A $$

<dl>
    <dd>$$ x \in A $$; $$x$$属于$$A$$; $$x$$是集合$$A$$的一个元素;</dd>
  </dl>
  <dl>
    <dt>\( \notin \)</dt>
    <dd>\( y \notin A \); \(y\)不属于\(A\); \(y\)不是集合\(A\)的一个元素;</dd>
  </dl>
  <dl>
    <dt>\( \{ , ... , \} \)</dt>
    <dd>\( \{ a, b, c, ... , n \} \); 诸元素\( a, b, c, ... , n \) 构成的集合</dd>
  </dl>
  <dl>
    <dt>\( \{ | \} \)</dt>
    <dd>\( \{ x \in A | p(x) \} \); 使命题\( p(x) \)为真的\( A \)中诸元素之集合</dd>
  </dl>
  <dl>
    <dt>\( \varnothing \)</dt>
    <dd>空集</dd>
  </dl>
  <dl>
    <dt>\( \mathbb{N} \)</dt>
    <dd>非空整数集; 自然数集;</dd>
  </dl>
  <dl>
    <dt>\( \mathbb{N}^{*} \) 或者 \( \mathbb{N}_{+} \)</dt>
    <dd>正整数集;</dd>
  </dl>
  <dl>
    <dt></dt>
    <dd></dd>
  </dl>
  <p>
    \begin{align}
    x &amp; =a+b \\
    x &amp; =a+b+x
    \end{align}
  </p>

## 指数

$$ x^y $$

$$ base^{power} $$

$$ x^n \cdot y^n = (xy)^n $$

$$ \frac{x^n}{x^m} = x^{n-m} $$

$$ \frac{x}{y})^n=\frac{x^n}{y^n} $$

$$ (x^n)^m=x^{n \cdot m}  $$

$$ x^0=1 $$

$$ 0^0 \text{ is undefined} $$

$$ x^{-n}=\frac{1}{x^n} $$

$$ x^{\frac{1}{n}}=\sqrt[n]{x} $$

## 度与弧度

```js
Math.sin(x) // A number (given in radians).
```

$$ 360^\circ=2\pi $$

$$ x^\circ=2\pi\div360 $$

## 排列组合

$$ A_m^n = \frac{n!}{(n-m)!} $$

## 向量

## 三角函数

## sine(正弦)

- 直角三角形中任意锐角的对边比斜边

## tangent(正切)

- 直角三角形中锐角的对边比另一条直角边

## 等差数列

- 公差为 \\( d \\)
- 通项公式 \\( a_n = a_1 + (n - 1) \\cdot d \\)
- 前n项和公式
  - \\( S_n = \\frac{ a_1 + a_n }{ 2 } \\cdot n \\)
  - \\( S_n = n \\cdot a_1 + \\frac{ n \\cdot ( n - 1 ) }{ 2 } \\cdot d \\)

