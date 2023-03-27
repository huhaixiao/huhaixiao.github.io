- [Basic concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- grid container
- grid tracks
- grid lines
- grid cells
- grid areas
- gutters
- Layering items with z-index

```scss
.wrapper {
  display: grid;
  grid-template-areas:
    "a a ."
    "a a ."
    ". b c";
  grid-template-columns: 16px repeat(2, 1fr 2fr);
  grid-template-rows: 1fr 1fr;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  column-gap: 8px;
  row-gap: 8px;
}
```
