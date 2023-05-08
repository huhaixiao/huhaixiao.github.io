<!-- toc -->
- [ajax](#ajax)

# ajax

```javascript
$.ajax({
    url: ''
})
```

# attribute

```javascript
var s0 = $('div')
var s1 = $('input')

s0.addClass('')
s0.removeClass('')
s0.hasClass('')
s0.toggleClass('')

// attr是Element身上的可见的属性
s0.attr('class')
s0.removeAttr('class')

// prop是Element类上的属性
s0.prop('outerHTML')
s0.removeProp('outerHTML') // 与类和原型的删除方法类似

s0.html() // 大概与 Element.innerHTML 一样
s1.val() // 获取input的value
```

# events

```javascript
var s0 = $('div')

function handler(eventObject, extraParameter){}

s0.on('events', 'selector', 'data', handler)
```

# traversing-filtering

```javascript
var s0 = $(`
<p id="p1"></p>
<p id="p2"></p>
`)

// Reduce the set of matched elements to the one at the specified index.
s0.eq(0)
s0.eq(1)
s0.eq(2)
```

# traversing-tree-traversal

```javascript
var s0 = $('div')

/**
 * Get the children of each element in the set of matched elements,
 * optionally filtered by a selector.
 */
s0.children()
s0.children('selector')

/**
 * For each element in the set,
 * get the first element that matches the selector
 * by testing the element itself
 * and traversing up through its ancestor in the DOM tree.
 */
s0.closest('selector')

/**
 * Get the descedents of each element in the current set of matched elements,
 * filtered by a selector,
 * jQuery object,
 * or element 
 */
s0.find('selector')

/**
 * Get the immediately following sibling of each element in the set of matched elements.
 * If a selector is provided,
 * it retrives the next sibling only if it matches that selector.
 */
s0.next()
s0.next('predict-selector')

/**
 * Get all following siblings of each element in the set of matched elements,
 * optionally filtered by a selector.
 */
s0.nextAll()
s0.nextAll('selector')
```