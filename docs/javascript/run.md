- 标准 JWT 格式
- require('xxx') 查找包过程
- 手写 deepClone
- http headers
- AMD、CMD、UMD、Common.js、ESModule 模块化对比，手写兼容多种模块化函数
- System Design中文叫系统设计，为实现系统分析提出的系统功能所进行的各种技术设计工作的总称。
- https://zhuanlan.zhihu.com/p/21313382?utm_id=0

```js
let a = 0, b = 0;
function fn(a) {
  fn = function fn2(b) {
    alert(++a+b);
  }
  alert(a++);
}
fn(1);
fn(2);
```

```js
async function async1() {
  console.log('async1 start')
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 success')
  return 'async1 end'
}
console.log('srcipt start')
async1().then(res => console.log(res))
console.log('srcipt end')
```

```js
// 编程题：实现 add 方法
const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
}

// 限制同一时刻只能执行2个task
addTask(4000, '1')
addTask(3500, '2')
addTask(4000, '3')
addTask(3000, '4')
// .....

//Scheduler ？
//4秒后打印1
//3.5秒打印2
//3进入队列，到7.5秒打印3 
//...
```

```js
// 输入：
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 3
// 输出：
[10, 7, 8, 9, 4, 5, 6, 1, 2, 3];

function reverse(arr, n) {
  
}
```