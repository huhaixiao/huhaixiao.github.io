```css
.dark-mode {
  --primary-bg: #282c35;
  --primary-fg: #fff;
  --secondary-bg: #1e2129;
  --secondary-fg: #aaa;
  --primary-btn-bg: #ddd;
  --primary-btn-fg: #222;
  --secondary-btn-bg: #780404;
  --secondary-btn-fg: #baba6a;
  --image-opacity: 0.85;
}
```

```jsx
function enableDarkMode() {
   document.body.classList.add("dark-mode")
    localStorage.setItem('theme', 'dark');
  }

  function disableDarkMode() {
    document.body.classList.remove("dark-mode")
    localStorage.setItem('theme', 'light');
  }
```