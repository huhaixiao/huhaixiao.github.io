- inline 元素如 img baseline带空白，修改方案为修改display

# Web API
- `Event.stopPropagation`
- `Event.stopImmediatePropagation`
- onxxx vs addEvenistener

# `Text`

`EventTarget <- Node <- CharacterData <- Text`

## `document.createTextNode(data)`

## `textNode.splitText(offset)`

# `CharacterData`

## `CharacterData.data`

## `CharacterData.replaceData(offset, count, data)`

## `CharacterData.replaceWith(...nodes)`

```jsx
// CharacaterData
var text = document.createTextNode('test')
text instanceof CharacterData // true
text.data
text.length
text.before(node)
text.after(node)
text.appendData(data)
text.deleteData(offset, count)
text.insertData(offset, data)
text.subStringData(offset, count)
```

# `Node`

## `Node.normalize()`

# `Range`

```jsx
var range = document.createRange()

range.setStart($0, 0)
range.setEnd($0, 1)
```

# `Selection`

```jsx
// https://developer.mozilla.org/en-US/docs/Web/API/Selection

/**
 * 
 */
var selection = window.getSelection()
```

# Web Components

[Web Components | MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

[Web Components Crash Course](https://www.youtube.com/watch?v=PCWaFLy3VUo)

[Explaining the Shadow DOM | Developer Quick Takes](https://www.youtube.com/watch?v=K5i9zMzVlzM)

- shadow dom 不支持 `@font-face`

# Custom elements

```jsx
// LifeCycle methods

class AppDrawer extends HTMLElement {

// Called when an instance of the element is created or upgraded
constructor() {}

// Called every time when the element is inserted into the DOM
connectedCallback() {}

// Called every time the element is removed from the DOM
disconnectedCallback() {}

// Called when an attribute is added, removed, updated, or replaced
attributeChangedCallback(attributeName, oldValue, newValue) {}

}

window.customElements.define('app-drawer', AppDrawer)
```

```html
<user-card name="John Doe">
  你好👋
  <div slot="email">johndoe@gmail.com</div>
  <div slot="phone">55555</div>
</user-card>
<user-card name="Jane Doe">
  Hi There
</user-card>
```

```jsx
const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="shadow-style.css">
<div class="user-card">
  <p><slot /></p>
  <p>Email: <slot name="email" /></p>
  <p>Phone: <slot name="phone" /></p>
  <h3></h3>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.2/lodash.min.js"></script>
<script>
  var hhhx = '123'
</script>
`

class UserCard extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
  }

  connectedCallback() {
    this.shadowRoot.querySelector('h3').addEventListener('click', evt => {
      console.log(evt.target.textContent)
    })
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('h3').removeEventListener('click')
  }
}

window.customElements.define('user-card', UserCard)
```

# Shadow DOM

- Used for self-contained components.
- Encapsulate styles and markup.
- Created with `element.attachShadow({mode: open})`.
- Creates a "shadowRoot" that we can reference and interact with.

# HTML templates

- Define the encapsulated markup of our web component.
- Template tag stores markup on page.
- Include both HTML and CSS in templates.
- Use slots to add custom text

<!-- toc -->

- [onclick vs addEventListener](#onclick-vs-addeventlistener)
  - [onclick](#onclick)
  - [addEventListener](#addeventlistener)

# onclick vs addEventListener

## onclick

1. Event handler properties

## addEventListener

```javascript
addEventListener('type', listener, { capture, once, passive })
```

1. DOM Level 2 Events
2. Improving scrolling performance with passive listeners
3. If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning.
