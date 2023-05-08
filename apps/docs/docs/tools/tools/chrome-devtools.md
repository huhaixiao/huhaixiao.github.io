- [https://developer.chrome.com/docs/devtools/](https://developer.chrome.com/docs/devtools/)

# Console

```jsx
console.debug()
console.log()
console.info()

console.clear()
console.assert(bool, str)
console.count(label)
console.countReset(label)
console.dir(Element)
console.dirxml(Element)
console.table(obj)

console.time('this is a timer');
console.timeLog('this is a timer');
console.timeEnd('this is a timer');

console.trace(label)
console.error(label)
console.warn(label)

debugger

$0, $1, $2, $3, $4, $_

$(selector)
$$(selector)

getEventListeners(obj)

console.group('outer group');
   console.log('outer one');
   console.log('outer two');
   console.groupCollapsed('inner group');
      console.log('inner one');
      console.log('inner two');
      console.log('inner three');
   console.groupEnd();
   console.log('outer three');
console.groupEnd();

console.log('%cred %cbig', 'color: red;', 'font-size: 50px;')
console.log('%cHello there!', `
  background: white;
  border: 3px solid red;
  color: red;
  font-size: 50px;
  margin: 40px;
  padding: 20px;
`);
```

# Console

- Javascript context: top
- Create live expression
- Filter

## Console settings

- Hide network
- Log XMLHttpRequests
- Preserve log
- Eager evaluation
- Selected context only
- Autocomplete from history
- Group similar messages in console
- Evaluate triggers user activation ??

## Utilities API

- `$0 - $4`
- `$_`
- `$(selector, [startNode])`
- `$$(selector, [startNode])`
- `dir(Element)`
- `inspect(Element)`
- `debug(function)`
- `undebug(function)`
- `monitor(function)`
- `unmonitor(function)`
- `monitorEvents(window,  ['resize', 'scroll'])`
- `unmonitorEvents(window)`
- `getEventListener(Element)`
- `keys(object)`
- `values(object)`

# Elements

## Elements

- Copy selector
- Capture node screenshot
- Scroll into view

### Break on

- subtree modifications
- attribute modifications
- node removal

# Network(Network features reference)

## Record network requests

- Stop recording network requests
- Clear requests
- Save requests across page loads
- Capture screenshots during page load
- Replay XHR request

## Change loading behavior

- Emulate a first-time visitor by disabling the browser cache
- Manually clear the browser cache
- Emulate offline
- Emulate slow network connections
- Manually clear browser cookies

## Filter requests

- Filter requests by properties
- Filter requests by type
- Filter requests by time
- Hide data URLs

## Sort requests

- Sort by column
- Sort by activity phase

## Analyze requests

- View a log of requests
- View the timing of requests in relation to one another
- Analyze the frames of a WebSocket Connection
- View a preview of a response body
- View a response body
- View HTTP headers
- View query string parameters

## Export requests data

## Change the layout of the Network panel

# Repaint and Reflow

- [https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg](https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg)

# How the browser renders the website

![https://res.cloudinary.com/practicaldev/image/fetch/s--gCp3mv5T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/vbtr2gfaitr0am5nl4io.png](https://res.cloudinary.com/practicaldev/image/fetch/s--gCp3mv5T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/vbtr2gfaitr0am5nl4io.png)

1. When the user enters the URL, It will fetch the HTML source code from the server
2. Browser Parse the HTML source code and convert into the Tokens `<, TagName, Attribute, AttributeValue, >`
3. The Tokens will convert into the nodes and will construct the ***DOM Tree***
4. The ***CSSOM Tree*** will generate from the CSS rules
5. The DOM and CSSOM tree will combine into the ***RenderTree***
6. The RenderTree are constructed as below:
    1. Start from the root of the dom tree and compute which elements are visible and their computed styles
    2. RenderTree will ignore the not visible elements like (`meta, script, link`) and `display:none`
    3. It will match the visible node to the appropriate CSSOM rules and apply them
7. ***Reflow:*** Calculate the position and size of each visible node
8. ***Repaint:*** now, the browser will paint the renderTree on the screen

# Repaint and Reflow

- The Repaint occurs when changes are made to the appearance of the elements that change the visibility, but doesn't affect the layout
    - Eg: Visibility, background color, outline
- Reflow means re-calculating the positions and geometries of elements in the document. The Reflow happens when changes are made to the elements, that affect the layout of the partial or whole page. The Reflow of the element will cause the subsequent reflow of all the child and ancestor elements in the DOM

# What Causes the Reflows and Repaints

## Reflows

1. Resizing the window will trigger reflow
2. Adding, Removing, Updating the DOM nodes
3. Hiding DOM Element with `display: none`
4. Moving, animating a DOM node
5. Changing font-style alters the geometry of the element
6. Adding or removing Stylesheet will cause the reflow/repaint
7. Script manipulating the DOM is the expensive operation because they have recalculated each time the document, or part of the document modified. As we have seen from all the many things that trigger a reflow, it can occur thousands and thousands of times per second

## Repaints

1. Reflows
2. `visibility: hidden`

```tsx
var bodyStyle = document.body.style; // cache

bodyStyle.padding = "20px"; // reflow, repaint
bodyStyle.border = "10px solid red"; // reflow, repaint

bodyStyle.color = "blue"; // repaint only, no dimensions changed
bstyle.backgroundColor = "#cc0000"; // repaint

bodyStyle.fontSize = "2em"; // reflow, repaint

// new DOM element - reflow, repaint
document.body.appendChild(document.createTextNode('Hello!'));
```

# Minimizing repaints and reflows

## Don't change individual styles, one by one

## Batch DOM Changes

- Use a `documentFragment` to hold temp changes
- Clone, update, replace the node
- Hide the element with `display: none` (1 reflow, 1 repaint), add 100 changes, restore the display (total 2 reflow, 2 repaint)

## Don't ask for computed styles repeatedly, cache them into the variable

- Multiple reads/writes (like for the height property of an element)
- Writes, then reads, from the DOM, multiple times causing document reflows
- Read(cached), write(invalidate layout), read(trigger layout).
- To fix: read everything first then write everything

# 浏览器缓存策略

- 浏览器缓存主要分为**强缓存**（本地缓存）和**协商缓存**（弱缓存）