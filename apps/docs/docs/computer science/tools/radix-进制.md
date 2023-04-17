---
title: 进制
date: 2021-04-17 18:54:03
---

# 不同进制在JS中的表示
```js
var binary = 0b1111
var octal = 07777
var decimal = 9999
var hex = 0xffff
```

# 进制转换

## API
```js
function nRadix2decimal(nRadixString, nRadix) {
    return parseInt(nRadixString, nRadix)
}

function decimal2nRadixString(decimal, nRadix) {
    return decimal.toString(nRadix)
}
```

## 模拟

1. 十进制转N进制(除N取余，逆序排列)
2. N进制转十进制(按权相加)
