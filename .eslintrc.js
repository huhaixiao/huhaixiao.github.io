/*
- rules
- plugins
- configuration files
- shareable configurations
- parsers
  - Espree
  - @typescript-eslint/parser
- custom processors
  - eslint-plugin-markdown
- formatters
- integrations
- CLI & Node.js API
https://eslint.org/docs/latest/use/getting-started
# TODO eslint
npm init @eslint/config
# use `eslint-config-semistandard` shared config

# npm 7+
npm init @eslint/config -- --config semistandard

# or (`eslint-config` prefix is optional)
npm init @eslint/config -- --config eslint-config-semistandard

npx eslint yourfile.js
.eslintrc.{js,yml,json}
*/
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", 
    "standard-with-typescript"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
};
