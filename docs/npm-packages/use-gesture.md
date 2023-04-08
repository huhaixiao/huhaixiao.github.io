[Gesture state - @use-gesture documentation](https://use-gesture.netlify.app/docs/state/)

```tsx
const bind = useDrag((state) => doSomethingWith(state), config)

return <div {...bind(arg)} />
```

1. ****Gesture state attributes****
2. ****pinch state attributes****
3. ****drag state attributes****
4. ****Attributes explained****
    1. ****movement and offset****
    2. When you start dragging a component, `movement`
     is reset to `[0,0]`
    , while `offset`
    keeps its previous value.

```tsx
function OffsetExample() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
  const bind = useDrag(({ offset: [x, y] }) => api.start({ x, y }))

  return <animated.div {...bind()}style={{ x, y }} />
}
```

```tsx
function CancelExample() {
  const [{ x }, api] = useSpring(() => ({ x: 0 }))
  const bind = useDrag(({ active, movement: [mx], cancel }) => {
    if (mx > 200) cancel()
    api.start({ x: active ? mx : 0, immediate: active })
  })

  return <animated.div {...bind()} style={{ x }} />
}
```

```tsx
function SwipeExample() {
  const [position, setPosition] = React.useState(0)
  const { x } = useSpring({ x: position * 200 })
  const bind = useDrag(({ swipe: [swipeX] }) => {
    // position will either be -1, 0 or 1
    setPosition((p) => Math.min(Math.max(-1, p + swipeX), 1))
  })

  return <animated.div {...bind()} style={{ x }} />
}
```