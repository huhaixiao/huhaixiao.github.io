# React

- [ ] 虚拟滚动组件封装
- RC - Release Candidate
- https://react.dev/

## Core

### Concurrency

- It’s a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time.
- React uses sophisticated techniques like priority queues and multiple buffering.
- A key property of Concurrent React is that rendering is interruptible.
- `<Offscreen>`

## APIs

### lazy

```tsx
import { lazy, Suspense  } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

const Usage = () => (
  <Suspense fallback={<Loading />}>
    <h2>Preview</h2>
    <MarkdownPreview />
   </Suspense>
)
```

### forwardRef

### memo

- Skipping re-rendering when props are unchanged

```tsx
import { memo } from 'react';

const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
```



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


