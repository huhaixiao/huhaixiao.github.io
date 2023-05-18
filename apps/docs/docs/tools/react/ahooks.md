# ahooks

- [ahooks.js.org](https://ahooks.js.org/)
- [ ] Cache & SWR
- [ ] Error Retry

## useRequest

- `run`
- `runAsync`

```tsx
import { useRequest } from 'ahooks';

const {
  loading: boolean,
  data?: TData,
  error?: Error,
  params: TParams || [],
  run: (...params: TParams) => void,
  runAsync: (...params: TParams) => Promise<TData>,
  refresh: () => void,
  refreshAsync: () => Promise<TData>,
  mutate: (data?: TData | ((oldData?: TData) => (TData | undefined))) => void,
  cancel: () => void,
} = useRequest<TData, TParams>(
  service: (...args: TParams) => Promise<TData>,
  {
    manual?: boolean,
    defaultParams?: TParams,
    onBefore?: (params: TParams) => void,
    onSuccess?: (data: TData, params: TParams) => void,
    onError?: (e: Error, params: TParams) => void,
    onFinally?: (params: TParams, data?: TData, e?: Error) => void,
    loadingDelay?: number,
    pollingInterval?: number,
    pollingWhenHidden?: boolean,
    pollingErrorRetryCount?: number,
    ready?: boolean,
    refreshDeps?: any[],
    refreshOnWindowFocus?: boolean,
    focusTimespan?: number,
    debounceWait?: number,
    debounceLeading?: boolean,
    debounceTrailing?: boolean,
    debounceMaxWait?: number,
    throttleWait?: number,
    throttleWait?: boolean,
    throttleTrailing?: boolean,
  }
);

runAsync().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})
```
