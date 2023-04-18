# Web API

- Background Tasks API
  - `window.requestIdleCallback`
  - `window.cancelIdleCallback`
  - `polyfill`
- Battery Status API
  - `navigator.getBattery`
- `BroadcastChannel`
- `Resize Observer API`

## EventTarget

- `EventTarget.addEventListener(type, listener, options)`
- `options`
    - `capture` - A Boolean indicating that events of this type will be dispatched to the registered `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
    - `once` - A Boolean indicating that the `listener` should be invoked at most once after being added. If `true`, the `listener` would be automatically removed when invoked.
    - `passive`
        - A Boolean that, if `true`, indicates that the function specified by `listener` will never call `preventDefault()`.
        - If a passive listener does call `preventDefault(),` the user agent will do nothing other than generate a console warning.
        - [Improving scrolling performance with passive listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scrolling_performance_with_passive_listeners)
- `EventTarget.addEventListener(type, listener, useCapture)`
- `EventTarget.removeEventListener()`
- [Matching event listeners for removal](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#matching_event_listeners_for_removal)

### `EventTarget.dispatchEvent()`

- `const cancelled = !target.dispatchEvent(event: Event)`
- The return value is `false` if `event` is cancelable and at least one of the event handlers which received `event` called `Event.preventDefault()`. Otherwise it returns `true`.
- 同步行为

### `onevent` `addEventListener` 区别

- `onevent` 兼容性好属于`mixin`
- `addEventListener` DOM Level2 Events

### `CustomEvent`

- [https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

```tsx
class MyFoo extends EventTarget {
}

const myFoo = new MyFoo
myFoo.addEventListener('wtf', function(e) {
  console.log(myFoo, e, '...wtf')
})
myFoo.dispatchEvent(new CustomEvent('wtf', {
  detail: 'wtf'
}))
```
## Event bubbling and capture

- When an event is fired on an element that has parent elements
- modern browsers run three different phases
- the **capturing** phase, the **target** phase, and the **bubbling** phase

### capturing phase

- The browser checks to see if the element's outer-most ancestor `<html>` has an onclick event handler registered on it for the capturing phase, and runs it if so.
- Then it moves on to the next element inside `<html>` and does the same thing, then the next one, and so on until it reaches the direct parent of the element that was actually selected.

### target phase

- The browser checks to see if the target property has an event handler for the `click` event registered on it, and runs it if so.
- Then, if bubbles is `true`, it propagates the event to the direct parent of the selected element, then the next one, and so on until it reaches the `<html>` element. Otherwise, if bubbles is `false`, it doesn’t propagate the event to any ancestors of the target.

### bubbling phase

- The browser checks to see if the direct parent of the element selected has an `onclick` event handler registered on it for the bubbling phase, and runs it if so.
- Then it moves on to the next immediate ancestor element and does the same thing, then the next one, and so on until it reaches the `<html>` element.

### `stopPropagation()`

### Event delegation

- this concept relies on the fact that if you want some code to run when you select any one of a large number of child elements
## Element

- `Element.closest(selectors)`
