# css

```scss
@font-face{    
	font-family: 'custom';    
	src: local('local-font'), url('/custom.ttf') format('truetype');    
	unicode-range: U+26;
}
body{
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

```scss
@font-face {  
	font-family: 'custom-font-type';  
	src: url('http://www.font-host.com/path/custom-font.ttf');
}
/* font styles */
span {  
	color: red;  
	font-family: arial;  
	font-size: 16px;  
	font-size: 1rem;  
	font-size: 1em;  
	font-style: normal;  
	font-style: italic;  
	font-weight: normal;  
	font-weight: bold;  
	font-weight: 100;  
	font-weight: 900;  
	text-decoration: none;  
	text-deocration: overline;  
	text-decoration: line-through;  
	text-decoration: underline;  
	text-shadow: 5px 5px 5px currentColor;
}
/* text layout */
div {  
	text-align: left;  
	text-align: center;  
	text-align: right;  
	text-align: justify;  
	line-height: 1.6;  
	letter-spacing: 2px;  
	word-spacing: 2px;
}
/* 文本溢出... */
.ellipse {  
	white-space: nowrap;  
	overflow: hidden;  
	text-overflow: ellipse;
}
/*
新增一个字体
*/
@font-face {
  font-family: 'Arial';
  src        : url('...') format('truetype');
}

.font-arial {
  font-family: Arial;
  /* 浏览器自己实现的斜体 */
  font-style : italic;
  /* 浏览器自己实现的加粗 */
  font-weight: bold;
}
```

- typograph - 排版
- font - 一种字体
- typeface - 一类字体
- serif - 衬线体
- sans serif - 无衬线体
- Look for a Font with multiple weights and styles makes the font more versatile.
- 字体多端统一
    - 使用自定义字体
    - 不使用浏览器的加粗与斜体样式
    - 浏览器缩放100%
    - 浏览器字体大小100%
    - 操作系统字体大小100%
1. fontlab7可以打开字体文件
2. `font-family: 中, 英, 通用;`
3. chrome调试工具的rendered-fonts字段可以查看渲染了什么样的象形字
4. serif 衬线体
5. sans-serif 无衬线体, sans是无的意思
6. monospace 等宽字体
7. text-deocration会重叠
8. 自定义字体是某种字体
9. HTML `<ruby>` 标签可以用来解决汉语拼音问题
10. HTML中并不会针对换行符换行

```scss
// 省略号
%_ellipse {
	overflow: hidden;
	text-overflow: ellipse;
	white-space: nowrap;
}
```