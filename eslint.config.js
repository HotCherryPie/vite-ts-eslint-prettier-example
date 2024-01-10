// @ts-check

/// <reference types="@eslint-types/typescript-eslint" />

import { defineFlatConfig } from 'eslint-define-config';
import globals from 'globals';
import js from '@eslint/js';

import tsPlugin_ from '@typescript-eslint/eslint-plugin';
// @ts-ignore
import tsParser from '@typescript-eslint/parser';

// const x = 1;
// console.log('x');
// AbortController;

/** @type {import('eslint').ESLint.Plugin} */
const tsPlugin = tsPlugin_;

export default defineFlatConfig([
  /* Common options */
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },

  /* LANG: JavaScript */
  {
    files: ['*.js', '**/*.js', '**/*.vue'],
    languageOptions: {
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  /* LANG: TypeScript */
  {
    // We user TS Parser only for .ts files, because using it with .js files brakes `ecmaVersion` validation
    files: ['*.ts', '**/*.ts'], // '**/*.vue'
    // plugins: { '@typescript-eslint': tsPlugin }
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tsParser,
      parserOptions: {
        // TODO: use https://typescript-eslint.io/packages/parser/#experimental_useprojectservice
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        project: ['tsconfig.json', 'tsconfig.node.json', 'tsconfig.web.json'],
        cacheLifetime: 1, // TODO: remove
      },
    },

    rules: {
      // @ts-ignore
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
      // @ts-ignore
      ...tsPlugin.configs['recommended-type-checked'].rules,
      // @ts-ignore
      ...tsPlugin.configs['strict-type-checked'].rules,
    },
  },

  /* Files: Node related */
  {
    files: ['*.ts', '*.js'],
    // Should be compatible with used Node version.
    //  See https://node.green
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.nodeBuiltin },
    },
    rules: {
      // TODO: only for testing
      //  should be watn in .js files and error in .ts files
      'no-console': ['warn'],
    }
  },

  /* Files: Src */
  {
    files: ['src/*.[jt]s', 'src/**/.[jt]s', 'src/*.vue'], // 'src/**/.vue'
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2021,
        ...globals.browser,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
      },
    },
    rules: {
      'no-console': ['error'],
    },
  },
]);
