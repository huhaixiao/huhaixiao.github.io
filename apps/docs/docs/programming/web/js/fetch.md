[Using Fetch - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

```jsx
function getSvgFromLatex(latexString) {
  return new Promise((resolve, reject) => {
    fetch(`//tiku.aixuexi.com/coco/latexToSvg?latex=$${latexString}$`)
      .then(response => response.blob())
      .then(data => data.text())
      .then(resolve)
      .catch(reject)
  })
}
```