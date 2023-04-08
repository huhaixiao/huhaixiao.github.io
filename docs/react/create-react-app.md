# [Getting Started](https://create-react-app.dev/docs/getting-started)
```bash
# If you've previsously installed create-react-app globally
npm uninstall -g create-react-app

npx create-react-app my-app --template typescript
cd my-app
npm start
``` 

## Output
```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

# Folder Structure

- `public/index.html` is the page template
- `src/index.js` is the javascript entry point
- Only files inside `src` are processed by webpack
- Only files inside `public` can be used from `public/index.html`

# Available Scripts

- `npm test`
    Launches the test runner in the interactive watch mode.
- `npm run build`
- `npm run eject`

- arbitrary
- curated
- transitive 及物