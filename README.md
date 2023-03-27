- apps
  - client
  - client-vue
  - server
- packages
  - react-hooks
  - react-components
  - utils

# web-app

- https://dummyjson.com/docs/products
- [webpack configuration ts](https://webpack.js.org/configuration/configuration-languages/#typescript)
- [tsc CLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

```shell
npm i -g pnpm
pnpm import
pnpm i

npm config get registry
npm info typescript
npx tsc --init

# TODO eslint
npm init @eslint/config
# use `eslint-config-semistandard` shared config

# npm 7+
npm init @eslint/config -- --config semistandard

# or (`eslint-config` prefix is optional)
npm init @eslint/config -- --config eslint-config-semistandard

npx eslint yourfile.js
.eslintrc.{js,yml,json}
```

## Prettier

```shell
npm install --save-dev prettier
npx prettier --write .
npx prettier --check .
```
