# [The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

- `box-sizing: content-box;`
    - 标准盒模型
    - content box 就是全部的都算 width
    - total width = margin + border + padding + content width
- `box-sizing: border-box;`
    - 怪异盒模型
    - border box 就是 width 到 border 就停了
    - total width = border + padding + content width
- margin collapsing
    - 相邻块元素垂直外边距合并
        - 上下相邻的两个元素
        - 外边距不是 margin-bottom + margin-top
        - max(margin-bottom, margin-top)
    - 嵌套块元素垂直外边距合并
        - 如果父元素没有margin & border
        - 则会和子元素的 margin 合并

# [CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)

# [CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

# box model

- `box-sizing`
    
    [box-sizing - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
    
    ```css
    .block {
    	/* width = content of width */
    	/* height = content of height */
    	/* 
    		position: relative; 
    		position: absolute; 
    		this is desired 
    	*/
    	box-sizing: content-box;
    
    	/* width = border + padding + width of content */
    	/* height = border + padding + height of content */
    	box-sizing: border-box;
    }
    ```

# block-behavior

- The box will break onto a new line.
- The box will extend in the inline direction to fill the space available in its container. In most cases this means that the box will become as wide as its container, filling up 100% of the space available.
- The width and height properties are respected.
- Padding, margin and border will cause other elements to be pushed away from the box

```css
.block {
  display: block
}
```

# inline-behavior

- The box will not break onto a new line.
- The width and height properties will not apply.
- Vertical padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
- Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.

```css
.inline {
  display: inline
}
```
