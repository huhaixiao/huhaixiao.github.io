- 1inch = 2.54cm

# Sass

- ruby sass
- dart sass

## bem

```scss
.block {
	&__element {
		&--modifier {
			// out style
			// inner style
		  // self style
		}
	}
}
```

## parent selector

```scss
.alert {
  // The parent selector can be used to add pseudo-classes to the outer
  // selector.
  &:hover {
    font-weight: bold;
  }

  // It can also be used to style the outer selector in a certain context, such
  // as a body set to use a right-to-left language.
  [dir=rtl] & {
    margin-left: 0;
    margin-right: 10px;
  }

  // You can even use it as an argument to pseudo-class selectors.
  :not(&) {
    opacity: 0.8;
  }
}
```

```scss
.alert:hover {
  font-weight: bold;
}
[dir=rtl] .alert {
  margin-left: 0;
  margin-right: 10px;
}
:not(.alert) {
  opacity: 0.8;
}
```

## placeholder selector

```scss
%strong-alert:hover {
  color: red;
}
```

## `@extends`

```scss
.error:hover {
  background-color: #fee;
}

.error--serious {
  @extend .error;
  border-width: 3px;
}
```

## `@mixin` &  `@include`

```scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include reset-list;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}

nav ul {
  @include horizontal-list;
}
```

# ellipsis

```scss
.{
	overflow: hidden;
	text-overflow:ellipsis;
  white-space: nowrap;
}
```

# triangle

```scss
.triangle {
  width: 0;
  height: 0;

  border-bottom: 100px solid red;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}
```

# 权重

- inline 1000
- id selector 100
- class selector 10
- type 1
- universal combinator 0

# The universal selector

```css
* { }
article *:first-child {
  font-weight: bold;
}
```

# Type selectors

```css
h1 { }
```

# Class selectors

```css
.box { }
```

# ID selectors

```css
#unique { }
```

# Attribute selectors

- Case-insensitivity

```css
a[title] { }
a[href="https://example.com"] { }
p[class~="special"] {}
div[lang|="zh"] {}
li[class^="box-"] {}
li[class$="-box"] {}
li[class*="box"] {}
```

# Pseudo-classes selectors

```css
a:hover { }
input:focus {}
li:nth-child(2n+1) {}
li:not(selector){}
```

# Pseudo-elements selectors

```css
p::first-line { }
p::before {}
p::after {}
p::first-letter {}
p::first-line {}
p::selection {}
ul::marker {}
li::marker {}
```

# Combinators

## Descendant combinator

```css
article p { }
```

## Child combinator

```css
article > p { }
```

## Adjacent sibling

```css
h1 + p { }
```

## General sibling

```css
h1 ~ p { }
```

# Transform

```css
p {
  transform: translateY(50px);
  transition: .3s;
}
```

# Visual formatting model

# Box generation

- CSS takes your source document and renders it onto a canvas
- To do this, it generates an intermediary structure, the **box tree**
- which represents the formatting structure of the rendered document
- Each box in the box tree represents its corresponding element (or pseudo-element) in space and/or time on the canvas

## The principal box

- **principal box** contains its descendant boxes

## Anonymous boxes

- An **anonymous box** is created when there is not an HTML element to use for the box
- **Inline anonymous boxes** are created when a string is split by an inline element

## Line boxes

- **Line boxes** are the boxes that wrap each line of text

# Positioning schemes and in-flow and out-of-flow elements

- In CSS, a box may be laid out according to three positioning schemes — **normal flow**, floats, or **absolute positioning**.
- ***Normal flow***
- ***Floats***
- ***Absolute positioning***

# Formatting contexts and the display property

- Boxes can be described as having an **outer display type**, which is ***block*** or ***inline***.
- Boxes also have an inner display type, dictating how their children behave.

object-fit