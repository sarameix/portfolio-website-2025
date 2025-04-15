import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const esLintConfig = [
  {
    ignores: [
      '**/.next/',
      '**/.pipeline/',
      '**/.vscode/',
      '**/.snapshots/',
      '**/node_modules/',
      '**/coverage/',
      '**/build/',
      '**/dist/',
      '**/*.min.js',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'prettier'),
  {
    plugins: {
      prettier,
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],

      'import/first': ['error', 'absolute-first'],
      'import/newline-after-import': 'error',
      'prefer-template': 'error',

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'block',
        },
        {
          blankLine: 'always',
          prev: 'block',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'block-like',
        },
        {
          blankLine: 'always',
          prev: 'block-like',
          next: '*',
        },
      ],

      '@next/next/no-img-element': 'off',
      '@next/next/link-passhref': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default esLintConfig;
