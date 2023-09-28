# npm

- [npm Docs](https://docs.npmjs.com/)
- [npm CLI](https://docs.npmjs.com/cli/)
- .npmrc
-`package-name`
-`@scoped/package-name`
- `npm init -y`
- `npm help`
- `npm install --force`
- `npm install --legacy-peer-deps`
- `npm install --save ${package-name}`
- `npm install --save-dev ${package-name}`
- `npm config list --json`
- `npm config list -g --json`
- `npm config get ${field}`
- `rm -rf node_modules`
- `rm -rf .umi`
- `rm package-lock.json`


<details>
    <summary>
        npm install git repo
    </summary>

```
npm install git+https://github.tesla.cn/haixhu/stencil-starter-git-package.git#master
```

</details>

- `npm info react`
- `npm list --global`
- `npx create-react-app@latest my-cra-app --template typescript`
- `yarn create @umijs/umi-app`

- `cross-env PORT=7777`
- [type-changes](https://github.com/type-challenges/type-challenges)

```shell
npm list -g --depth=0
npm install --legacy-peer-deps

# cra的正确方式
npm uninstall -g create-react-app
npm i -g npm@latest
npm cache clean -f
npx create-react-app@latest my-app --use-npm --template typescript
```
