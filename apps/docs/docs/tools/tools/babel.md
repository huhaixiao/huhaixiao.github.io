- [Config](#config)
  - [Config Files](#config-files)
- [babel](#babel)
- [Usage](#usage)
- [Toolling packages](#toolling-packages)
  - [@babel/core](#babelcore)

```bash
npm install --save-dev
  @babel/core
  @babel/cli
  @babel/preset-env
  @babel/preset-react
  @babel/preset-typescript
  @babel/plugin-proposal-decorators
  @babel/plugin-proposal-class-properties
```

- Plugin ordering is first to last.
- Preset ordering is reversed (last to first).
- - `@babel/preset-env` 不支持 `Stage-X`

# Config

## Config Files

- Project-wide configuration
  - `babel.config.json`
- File-relative configuration
  - `.babelrc`

```json
{
  "presets": [
    [
      "@babel/preset-env",
    ]
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
```

# babel

- Transform syntax
- Polyfill features
    - through core-js
- Source code transformation

# Usage

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

- babel.config.json

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
  ]
}
```

```bash
npx babel src --out-dir lib
```

# Toolling packages

## @babel/core

- Babel is a compiler `source code => output code`
- Plugins run before Presets.
- Plugin ordering is first to last.
- Preset ordering is reversed (last to first).
- `@babel/preset-env` 不支持 `Stage-X`
- `@babel/preset-react`
- `@babel/preset-typescript`