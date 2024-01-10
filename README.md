https://prettier.io/docs/en/options

- [Configuration Files (New)](https://eslint.org/docs/latest/use/configure/configuration-files-new)
  - [Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide)

* [Monorepo Configuration](https://typescript-eslint.io/linting/typed-linting/monorepos/)
* [What About Formatting?](https://typescript-eslint.io/linting/troubleshooting/formatting/)
* [Linting with Type Information](https://typescript-eslint.io/linting/typed-linting/)
* [Projects With Type Checking](https://typescript-eslint.io/linting/configs/#projects-with-type-checking)
* [`ParserOptions `](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/types/src/parser-options.ts)

- https://github.com/antfu/eslint-config
  - https://github.com/antfu/eslint-config/blob/main/src/plugins.ts
  - https://github.com/antfu/eslint-config/tree/main/src/configs

* By default all types from `@types/*` is visible everywhere
  - If `"types": []` is specified, then no types will be visible
  - If `"types": ['node']` is specified, then only `@types/node` will be visible

- **TODO**: use https://www.npmjs.com/package/eslint-plugin-prettier-vue
- **TODO**: pick rules https://typescript-eslint.io/rules/?=xrecommended-xstrict-xformatting-xdeprecated
- **TODO**: try to use `"checkJs": true,` for `tsconfig.node.json`
- **TODO**: try to use `tsParser` for .js and .ts files
  - Problem: `ecmaVersion` option is mostly ignored for files under `tsParser` scope.
    See https://github.com/typescript-eslint/typescript-eslint/issues/2524#issuecomment-689102656
  - Check support for `ecmaScript: 2015` with spread operator
  - Same result can be achieved with [eslint-plugin-es-x](https://www.npmjs.com/package/eslint-plugin-es-x)

### Original config by **Vite**

```js
module.exports = {
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
};
```
