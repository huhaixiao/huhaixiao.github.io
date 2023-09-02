# react@18.2.0

- https://react.dev/

## Core

### Concurrency

- It’s a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time.
- React uses sophisticated techniques like priority queues and multiple buffering.
- A key property of Concurrent React is that rendering is interruptible.
- `<Offscreen>`

## Hooks

### State Hooks

- useState
- useReducer

### Context Hooks

- useContext

### Ref Hooks

- useRef
- useImperativeHandle

### Effect Hooks

- useEffect
- useLayoutEffect
- useInsertionEffects

### Performance Hooks

- useMemo
- useCallback

### Other Hooks

- useDebugValue
- useId
- useSyncExternalStore
- useDeferredValue
- useTransition

## Components

### `<Fragment>(<>)`
### `<Profiler>`
### `<StrictMode>`
### `<Suspense>`

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
