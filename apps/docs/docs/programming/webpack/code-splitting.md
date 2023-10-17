# code splitting

- https://webpack.js.org/guides/code-splitting/

1. Entry Points
   1. If there are any duplicated modules between entry chunks they will be included in both bundles.
   2. It isn't as flexible and can't be used to dynamically split code with the core application logic.
2. Prevent Duplication
   1. Entry dependencies
   2. SplitChunksPlugin
3. Dynamic Imports
4. [React Code Splitting](https://reactjs.org/docs/code-splitting.html)
   1. `import()`
   2. `React.lazy()`
   3. `<Suspense fallback={element} />`
