- [21 个 React 性能优化技巧](https://www.infoq.cn/article/kve8xtrs-upphptq5luz)
- [ ] 虚拟滚动
# 性能优化
- React.memo
- lazy
- Suspense
- React Fragments
- no inline function
- no inline style

RC - Release Candidate

# Suspense

# Concurrent rendering...?

concurrent features

react query
* useEffect 在严格模式下会执行两次
* 当我们编写组件时，应该尽量将组件编写为纯函数。
* 对于组件中的副作用，首先应该明确：
* 是「用户行为触发的」还是「视图渲染后主动触发的」？
* 对于前者，将逻辑放在Event handlers中处理。
* 对于后者，使用useEffect处理。
* vite在开发环境基于ESM规范实现的Nobundle模式，节省了「代码打包」的时间（当然，也有ESBuild的功劳）。
* Suspense
* 不要滥用useEffect
* 不要滥用useRef Ref 失控
* ref.current.remove
* ref.current.appendChild
* 在React中，组件可以分为：
    * 低阶组件 基于DOM 封装
    * 高阶组件 具体低阶组件封装
    * 「高阶组件」无法直接将ref指向DOM

```ts
React.memo()
```
