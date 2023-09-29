---
title: CSS
date: 2021-02-04 10:45:08
tags: fe
---

- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
- https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute_positioning

- Visual Formatting Model
  - 规定了三种定位方案`normal flow`, `float`, `absolute positioned`
  - out of flow: floated, absolutely positioned
  - in flow: not out of flow.
- Normal Flow
  - block elements will consume all of the space in the inline direction
  - If we give block elements a width, they will continue to lay out one below the other - even if there would be space for them to be side by side
- Replaced elements
  - 内容可以被替换的元素叫替换元素
  - `<iframe> <video> <img> <canvas>`
  - 替换元素都是内联的
- Stack Level and Stack Context
  - 层叠水平与堆栈上下文
- BFC
  - 本质是个独立容器
  - `float` `clear` 只应用在同一 BFC 中
  - 外边距塌陷只存在于同一 BFC 中
  - 创建BFC
    1. `<html>`
    2. `float`不是`none`
    3. `position`为`absolute`或`fixed`
    4. `display: inline-block`
    5. `display: flex`
    6. `overflow`非`visible`非`clip`
- IFC 
  - Horizontal margins, borders, and padding are respected
  - The line box size in the block direction (so the height when working in English) is defined by the tallest box inside it
- 脱离标准流
  - floated items
  - `position: absolute;` 或 `position: fixed;`
  - root element(html)
  - Out of flow items create a new BFC
- 隐藏元素
  - `display: none`
    - 元素彻底消失, 脱离文档流, 会影响页面布局
    - 子元素跟随父元素被隐藏, 并且无法单独显示
    - 绑定的事件也无法触发
    - 无论如何, DOM节点还是存在的, 仍旧可以用 js 操作
  - `visibility: hidden`
    - 子元素设置 `visibility:visible` 后, 子元素会显示, 但是父元素不会显示
    - 绑定的事件不能触发

# Selector

1. 伪类选择器可以链式
2. 伪元素选择器只有一个, 且跟在普通选择器之后

```css
/* 伪类选择器 */
/* User action pseudo-classes */
:hover {}
:focus {}
/* Tree-structural pseudo-classes */
:root {}
:empty {}
li:nth-child(2n) {}
li:first-child {}
li:last-child {}
p:only-child {}

/* 伪元素选择器 */
p::after {
  content: "》";
}
p::before {
  content: "《";
}
p::first-letter {
  color: red;
}
p::first-line {
  color: blue;
}
div::-webkit-scrollbar {
  width: 20px;
  height: 20px;
}
```

# Floats

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
  <div class="content">lorem * 10</div>
</div>
```

```scss
.container {
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .content {
    clear: left;
  }

  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
```

# Positioned Layout
```css
.positioned {
  position: static;
  position: relative;
  /* out of flow */
  position: absolute;
  /* out of flow */
  position: fixed;

  position: sticky; /* top值达到后类似fixed */

  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;

  z-index: 16;
}
```

# [Margin Collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

- 只有`top`和`bottom`会坍塌
- 上下margin会坍塌成一个较大的margin
- 父无margin的会被子的覆盖
  - parentElement加`border`
  - parentElement加`overflow: hidden`

# [Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)

1. margin + border + padding + content
2. `min-width` > `max-width` > `width`

```css
.box {
  /* default content-box */
  box-sizing: content-box;
  box-sizing: border-box;
}
```


# [Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms)

1. Only elements positioned by the box model can be transformed
2. As a rule of thumb, an element is positioned by the box model if it has `display: block`
3. rotate, scale, translate

```css
.container { 
  perspective-origin: center;
  perspective: 2000px;
  transform-style: preserve-3d;
  transform-style: flat;
}

.content {
  transform-origin: center;
  transform: scale(0.5);

  /* <transform-function> */
  /* Matrix transformation */
  transform: matrix(a, b, c, d, tx, ty);
  transform: matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1);
  /* perspective */
  transform: perspective(2000px) rotateY(30deg);
  /* Rotation */
  transform: rotate(30deg); /* 2D plane */
  transform: rotate3d(1, 1, 1, 30deg); 
  transform: rotateX(30deg); /* horizontal axis */
  transform: rotateY(30deg); /* vertical axis */
  transform: rotateZ(30deg); /* Z-axis */
  /* Scaling */
  transform: scale(1.2);
  transform: scale3d(1.2);
  transform: scaleX(1.2);
  transform: scaleY(1.2);
  transform: scaleZ(1.2);
  /* Translation */
  transform: translate(100px);
  transform: translate3d(100px);
  transform: translateX(100px);
  transform: translateY(100px);
  transform: translateZ(100px);


  /* 单独属性, 与transform中相同 */
  scale: 1.2;
  rotate: 30deg;
  translate: 20px 20px;

  transition: all .3s;
}
```

# [Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
```css
.ani {
  animation-name: bounce;
  animation-duration: .3s;
  animation-duration: 300ms;
  animation-timing-function: ease;
  animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
  animation-delay: 300ms;
  animation-iteration-count: 1.5;
  animation-direction: normal;
  animation-direction: reverse;
  animation-direction: alternate;
  animation-direction: alternate-reverse;
  animation-play-state: running;
  animation-play-state: paused;
}

@keyframes slidein {
  0 {
    transform: translateX(0%);
  }

  100 {
    transform: translateX(100%);
  }
}
```

# FlexBox
```css
.flex-container {
  display: flex;

  flex-wrap: wrap; /* Default */
  flex-wrap: nowrap;
}

.flex-element {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100px;

  /* flex-grow 1 0 */
  flex: 1;
  /* flex-grow flex-shrink */
  flex: 1 1;
  /* flex-grow 1 flex-basis */
  flex: 1 100px;
}
```

# [Sass](https://sass-lang.com/)

1. Dart Sass
2. Ruby Sass

```scss
$variable: red;
%seudo-selector {
  color: $variable;
}

div {
  & {
    @extend %seudo-selector;
  }
}
```

## BEM 命名规范

```scss
.block{
  &__element{
    &--modifier {
      // 
    }
  }
}
```

## 父选择器

```scss
.parent {
  &:hover {
    color: red;
  }

  .error & {
    font-weight: bold;
  }

  :not(&){
    opacity: 0.8;
  }

  &-child {
    // ...
  }
}
```

## 占位选择器与继承
```scss
%strong-alert {
  color: red;
}

.action {
  &--alert {
    @extend %strong-alert;
  }
}
```

## `mixin`与`include`

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

## 变量

```scss
$variable: red;

div {
  width: calc(100vw - #{$variable1})
}
```

# [Centering](https://css-tricks.com/centering-css-complete-guide/)

# 画个三角形

# 像素

1. 物理像素-设备像素
2. css像素-逻辑像素
3. dpr-设备像素比-`window.devicePixelRatio`


<!-- toc -->
- [Selector](#selector)
- [Floats](#floats)
- [Positioned Layout](#positioned-layout)
- [Margin Collapsing](#margin-collapsing)
- [Box Model](#box-model)
- [Transform](#transform)
- [Animations](#animations)
- [FlexBox](#flexbox)
- [Sass](#sass)
  - [BEM 命名规范](#bem-命名规范)
  - [父选择器](#父选择器)
  - [占位选择器与继承](#占位选择器与继承)
  - [`mixin`与`include`](#mixin与include)
  - [变量](#变量)
- [Centering](#centering)
- [画个三角形](#画个三角形)
- [像素](#像素)
- [Box model](#box-model-1)
  - [block box](#block-box)
  - [inline box](#inline-box)
  - [Inner and outer display types](#inner-and-outer-display-types)
- [CSS layout](#css-layout)
  - [Normal Flow](#normal-flow)
- [Centering](#centering-1)
- [transform](#transform-1)
  - [Visual formatting model](#visual-formatting-model)

# [Box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

## block box

- break onto a new line
- extend in the inline direction
- `width` and `height` properties are respected
- Padding, margin and border will push other elements away

## inline box

- will not break onto a new line
- `width` and `height` will not apply
- Vertical paddings, margins and borders will apply but will not push away
- Horizontal paddings, margins and borders will apply and push away

## Inner and outer display types

- *outer* details whether the box is block or inline
- *inner* indicates how elements inside that box are laid out

# [CSS layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

## [Normal Flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)

# [Centering](https://css-tricks.com/centering-css-complete-guide/)

# [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

## [Visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)