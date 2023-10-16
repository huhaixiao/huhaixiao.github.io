# useRequest

```js
const { data, run, runAsync } = useRequest(async() => {
  // ...
}, {
  manual: true,
  cacheKey: 'cache-key',
  cacheTime: 300000, // default 5min
})
```
