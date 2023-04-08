# Flexbox

- [MDN Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- `flex-width: 16px;` 不生效 考虑 `flex-shrink: 0;`

```css
display: flex;
justify-content: center;
align-items: center;

flex-grow: 1;
flex-basis: 16px;
flex-shrink: 0;

flex-direction: column;
flex-direction: row;

flex-wrap: nowrap;
flex-wrap: wrap;
```