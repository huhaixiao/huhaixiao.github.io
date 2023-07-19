# form

- Resources
    [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)

- nesting a form inside another form is forbidden.
- It’s always possible to use a form control outside of a `<form>` element.
    - that control has nothing todo with any form.
    - unless you associate it with a form using its form attribute.

# form control

- `<label>`
    
    ```html
    <label>
    	<input type="radio" name="color" value="red"/>
    	<span>红色</span>
    	<br/>
    </label>
    ```
    
- `<input>`
- `<textarea>`
- `<button>`
    - `<button type="button">Button</button>`
    - `<button type="submit">Submit</button>`
    - `<button type="reset">Reset</button>`
    - `<button>` beats `<input type="submit">`
- `<fieldset>`

- 生存空间：忍人所不忍，能人所不能
- 干好事：别太把自己当人，别太把别人不当人
- 想干什么和能干什么是两回事
- 杀伐决断
- 毫不拖泥带水
- focusing is about saying no

一切可量化
timeline
deadline
目标与手段
成本与收益
麦纳马拉谬误（McNamara fallacy）
刻意练习
花半秒钟就看透事物本质的人，和花一辈子都看不清事物本质的人，注定是截然不同的命运

北京外企



npm Packages

// 金本位
// 亚当 斯密 看不见的手
// 农业革命
// 工业革命
// 经济学
// ## 理论经济学
// ## 应用经济学

爱一个人就像是去海滩捡贝壳，你不要捡蕞大的，也不要捡蕞漂亮的，你在沙滩上找一颗你蕞喜欢的，放到你的衣服口袋里，然后这辈子都不要去海边了
cloud.linode.com
SolidJS
- twitter id - bko6pwUySGKxbGt


- 赫兹 - 每秒钟一次为1赫兹，或可写成次/秒，周/秒
- 1GHZ - 10亿次/秒
# SRI

- Subresource Integrity (子资源完整性)

# 内网网段

1. `10.x.x.x`
2. `172.16.x.x` - `172.31.x.x`
3. `192.168.x.x`

# HTTP

- [https://segmentfault.com/a/1190000014343759](https://segmentfault.com/a/1190000014343759)

- .ini文件
    
    Initialization File 的缩写, 即初始化文件 
    
- etc目录
    
    Editable Text Configuration
    
- Environment Variables
    - `process.env` NodeJS读取环境变量
    - `PORT=9999 node server.js` Bash命令行设置环境变量
    - Bash查看Mac OS上的环境变量 如HOME `$HOME`
- Shell & Bash
    1. Shell是Linux用户与OS的接口
    2. Bash是Shell包装

# Glossary

- A11y - accessibility, 11 stands for '11 letters'
- W3C - World Wide Web Consortium
- CRM - Customer Relationship Management, 客户关系管理

# statement与expression区别

- statement是语句
- expression是表达式, 有返回值
- An expression is anything that goes on the right-hand side of a property or variable declaration.
- Each expression produces a value.

- bit - 位

# dec2bin

## demonstration

# Unicode
> a computing industry standard for providing a unique code point - a number - for each character.
> 
- $1byte = 8bit$
- ascii共256位, 0-127是固定的, 128往后的各个国家标准不一
- unicode的0-127与ascii保持一致
- code point - 为每个符号指定的编号
- $2^{16}$个数表示一个平面
    - 基本面 0000 - ffff
    - 辅助面 1ffff - 10ffff
- utf-32
    - 32bit表示一个字符 4字节
- utf-16
    - 16bit表示基本面字符32bit表示其他字符
    - js 为 usc-2编码, 规则与utf-16相同
- utf-8
    - 8bit、16bit、32bit动态表示字符

[http://www.ruanyifeng.com/blog/2014/12/unicode.html](http://www.ruanyifeng.com/blog/2014/12/unicode.html)

- [ASCII Character Set](http://www.robelle.com/library/smugbook/ascii.html)
- [Unicode and You](https://betterexplained.com/articles/unicode/)
- 常见unicode
    - 换行 - `0xa`
    - 空格 - `0x20`
    - 不可折行空格 - `0xa0`
    - 中文空格 - `0x3000`

# Type Systems

[https://www.zhihu.com/question/19918532](https://www.zhihu.com/question/19918532)

- Program Errors
    - trapped errors。导致程序终止执行，如除0，Java中数组越界访问
    - untrapped errors。 出错后继续执行，但可能出现任意行为。如C里的缓冲区溢出、Jump到错误地址
- Forbidden Behaviours
- Well behaved、ill behaved
- 强类型strongly typed: 如果一种语言的所有程序都是well behaved——即不可能出现forbidden behaviors，则该语言为strongly typed。
- 弱类型weakly typed: 否则为weakly typed。比如C语言的缓冲区溢出，属于trapped errors，即属于forbidden behaviors..故C是弱类型
- 静态类型 statically: 如果在编译时拒绝ill behaved程序，则是statically typed;
- 动态类型dynamiclly: 如果在运行时拒绝ill behaviors, 则是dynamiclly typed。

- What happens when you type a URL in browser

- React函数组件的defaultValue不能为引用, 否则会死循环

link标签preload字体

- [ ]  实现一个生成preload的link标签的方法
- [ ]  将字体的url与type放在配置中
- [ ]  上来就生成preload标签
1. CSS GPU 加速
2. CSS 减少reflow repaint
3. 图片懒加载
4. Code Split
5. 数据库查询不要 `select *`

# 1 算法简介

## 1.1 引言

- 任何代码片段都可视为算法
- 动态规划编写国际跳棋的AI算法
- K最近邻算法编写推荐系统
- NP完全问题 有限时间内不可解的问题

## 1.2 二分查找

- 对数是幂运算的逆运算
- 时间复杂度, $O(\log_2n)$

## 1.3 大O表示法

- 大$O$表示法指出了算法运行时间的增速
- 大$O$表示法指出了最糟糕情况下的运行时间
- 常见运行时间
    - $O(\log_2n)$ 对数时间 二分查找
    - $O(n)$ 线性时间
    - $O(n*\log_2n)$ 快速排序
    - $O(n^2)$ 选择排序
    - $O(n!)$ 旅行商问题 非常慢

# 2 选择排序

- 很多算法仅在数据经过排序后才管用 二分

## 2.1 内存的工作原理

- 计算机就像是很多抽屉的集合体, 每个抽屉都有地址 `fe0ffeeb`
- 当你就计算机提供存储空间, 计算机给你一个存储地址
- 需要存储多项数据时, 两种基本方式`数组`和`链表`

## 2.2 数组和链表

- 数组读取 $O(1)$
- 数组插入 $O(n)$
- 数组删除 $O(n)$
- 链表读取 $O(n)$
- 链表插入 $O(1)$
- 链表删除 $O(1)$
- Facebook 存储用户信息使用的`链表数组`
    - 每个数组26个元素 每个元素指向一个链表
    - 第一个元素指向的链表包含所有A打头的用户名
    - 第二个指向所有B打头的用户名

## 2.3 选择排序

- $O(n^2)$

# 3 递归

# 4 快速排序

# 5 散列表

# 6 广度优先搜索

# 7 迪克斯特拉算法

# 8 贪婪算法

# 9 动态规划

# 10 K最近邻算法

# 11 接下来如何做

[High-Speed, Secure & Anonymous VPN Service | ExpressVPN](https://www.expressvpn.com/)

[getlantern/lantern](https://github.com/getlantern/lantern)

[xiaoshoudian/xiazai](https://github.com/xiaoshoudian/xiazai)

[233boy/v2ray](https://github.com/233boy/v2ray/wiki/V2Ray%E6%90%AD%E5%BB%BA%E8%AF%A6%E7%BB%86%E5%9B%BE%E6%96%87%E6%95%99%E7%A8%8B)

[Chrome Web Store](https://chrome.google.com/webstore/search/vpn)

[thebestvpndeals.com: Get Honest Insights about VPNs from Experts](https://thebestvpndeals.com/)

Ummy激活码 - CP4EZ-PYCQE-PUM3O-H4YWH-CLC5P-ENIR2-SVVED-YDLJK-2X4XY

PANGGELIA

鹏带鸟，朋不带鸟

女：哥哥我乖不乖

男：乖

女：那哥哥给我买条该

男：可以啊 我给你买好的 别人都是死该 我给你买条活该

- [32 个手撕 JS 让你彻底摆脱初级前端](https://mp.weixin.qq.com/s?__biz=MzI1NjkwNDcyOQ==&mid=2247490925&idx=1&sn=062a72b85e21c482fa03cfc25b10bb01&chksm=ea1ec61bdd694f0ddf18e9c42bfb34e492afbb4db4c96f5daaeb0085b6fdcbfacd2678017f78&exptype=unsubscribed_card_3001_article_onlinev2_3000w_promotion_level2&expsessionid=1841796275571130368&scene=169&subscene=10000&sessionid=1619497727&clicktime=1619498061&enterid=1619498061&ascene=56&devicetype=android-30&version=28000335&nettype=cmnet&abtest_cookie=AAACAA%3D%3D&lang=zh_CN&exportkey=AZTakyJW9I00qdG5Q1YfK1Q%3D&pass_ticket=kYm65hjbBwVnBN1zz%2FBFjH1qZKuGLojzOmdjODMBQLZFbwPp61L%2BU9eozk51hz2y&wx_header=1)

- [app](#app)
- [ts](#ts)
- [npm cli](#npm)
- [git cli](#git)

# todo

- rollup
- grunt
- webpack
- nginx
- httpClient
- wget
- curl
- docker

# app

- [掘金](https://juejin.cn/)

# npm

<details>
    <summary>
        npm install git repo
    </summary>

```
npm install git+https://github.tesla.cn/haixhu/stencil-starter-git-package.git#master
```

</details>

- `npm info react`
- `npm list --global`
- `npx create-react-app@latest my-cra-app --template typescript`
- `yarn create @umijs/umi-app`

- `cross-env PORT=7777`
- [type-changes](https://github.com/type-challenges/type-challenges)

# ts

<details>
  <summary>
    <code>as const</code>
  </summary>

```ts
// as const
const tom = {
 name: 'tom',
 age: 18,
} as const;
```

</details>

<details>
  <summary>
    <code>keyof</code>
  </summary>

```ts
// keyof T
type keyofTom = keyof tom;
type keyOfT = keyof T;
type keyTypeOfT = T[K];
```

</details>

```ts
// T[K]
interface Eg1 {
  name: string,
  readonly age: number,
}
// string
type V1 = Eg1['name']
// string | number
type V2 = Eg1['name' | 'age']
// any
type V2 = Eg1['name' | 'age2222']
// string | number
type V3 = Eg1[keyof Eg1]
```

```ts
// &
// 交叉类型取的多个类型的并集，但是如果相同key但是类型不同，则该key为never。
interface Eg1 {
  name: string,
  age: number,
}

interface Eg2 {
  color: string,
  age: string,
}

type T = Eg1 & Eg2 // {name: string; age: never; color: string}
```

```js
function flat() {
  const arr = [1, [2, [3, [4, 5]]], 6];

  arr.flat();
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      fn.apply(this, ...args)
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
}

function loadScript(src) {
  return new Promise(resolve => {
    const scriptElement = document.createElement('script')
    scriptElement.src = src
    scriptElement.onload = resolve
    document.head.appendChild(scriptElement)
  })
}

const loadStyle = function (href) {
  return new Promise(resolve => {
    const linkElement = document.createElement('link')
    linkElement.rel = 'stylesheet'
    linkElement.href = href
    linkElement.onload = resolve
    document.head.appendChild(linkElement)
  })
}
```

- useUnmount update `latest.current?.();`
- https://github.com/alibaba/hooks/tree/master/packages/hooks/src
- https://github.com/febobo/web-interview
- preorder traversal DLR: Degree Left Right
  - Degree: 阶层
- POST 常见 3、4 种形式
