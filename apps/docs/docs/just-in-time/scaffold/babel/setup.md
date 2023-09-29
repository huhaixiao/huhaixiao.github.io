# setup

- babel.config.json
- Transform syntax
- Polyfill features
    - through core-js
- Source code transformation
- Plugin ordering is first to last.
- Preset ordering is reversed (last to first).
- `@babel/preset-env` 不支持 `Stage-X`
- Project-wide configuration
  - `babel.config.json`
- File-relative configuration
  - `.babelrc`

```shell
npm install --save-dev
  @babel/core
  @babel/cli
  @babel/preset-env
  @babel/preset-react
  @babel/preset-typescript
  @babel/plugin-proposal-decorators
  @babel/plugin-proposal-class-properties
  
npx babel src --out-dir lib
```

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
```
