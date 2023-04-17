# latex

- http://www.mohu.org/info/symbols/symbols.htm
- http://docs.mathjax.org/en/v2.7-latest/

\\[ y=ax^2+bx+c \\]
\\[ \\sqrt{x} \\]
\\[ \\sqrt[n]{x} \\]
\\[ \\overline{xyz} \\]
\\[ \\underline{xyz} \\]
\\[ \\overbrace{a+b+c+...+z}^{26} \\]
\\[ \\underbrace{a+b+c+...+z}_{26} \\]
\\[ \\overrightarrow{AB} \\]
\\[ \\frac{-b}{2a} \\]
\\[ \\sum_{i=1}^{n} \\]

\\[ \\Delta \\]
\\[ \\Theta \\]
\\[ \\Pi \\]

\\[ \\pm \\]

```js
// 全局渲染
MathJax.Hub.Typeset()

// 重新渲染 
MathJax.Hub.Rerender()

MathJax.isReady

MathJax.Hub.Queue(["Typeset", MathJax.Hub, HTMLElement])
```
