- [What is Babel](#what-is-babel)
- [the super tiny compiler](#the-super-tiny-compiler)
  - [Three primary stages](#three-primary-stages)
- [Usage](#usage)
  - [Options](#options)
  - [Config Files](#config-files)
  - [cli](#cli)
- [Plugins](#plugins)
  - [Ordering](#ordering)
- [Stage-X](#stage-x)
- [Presets](#presets)
- [polyfill](#polyfill)


# What is Babel
[babel](https://babeljs.io/)
> convert ECMAScript 2015+ code into a backwards compatible version

- Transform syntax
- Polyfill features

# [the super tiny compiler](https://github.com/jamiebuilds/the-super-tiny-compiler/blob/master/the-super-tiny-compiler.js)

## Three primary stages

1. *Parsing* is taking raw code and turning it into a more abstract representation of the code.
2. *Transformation* takes this abstract representation and manipulates to do whatever the compiler wants it to.
3. *Code Generation* takes the transformed representation of the code and turns it into new code.

# Usage

## Options

- `plugins`, 

## Config Files

- `babel.config.json` and `.babelrc.json`
- For compatibility reasons, `.babelrc` is an alias for `.babelrc.json`

## cli

- `npm install --save-dev @babel/core @babel/cli`
- `npx babel script.js`
- `npx babel script.js --out-file script-compiled.js`

# Plugins
> apply transformation to your code

```json
{
  "plugins": []
}
```

## Ordering

- Plugins run before Presets
- Plugin ordering is first to last
- Preset ordering is reversed

# Stage-X

- Stage 0 > Stage 1 > Stage 2 > Stage 3 > Stage 4

# Presets
> a set of plugins

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

# polyfill
> `@babel/polyfill`

- deprecated since Babel 7.4.0
- no < Stage 4 proposals

```javascript
import 'core-js/stable'
import 'regenerator-runtime/runtime'
```