import eslint from '@eslint/js';
import query from '@tanstack/eslint-plugin-query';
import router from '@tanstack/eslint-plugin-router';
import boundaries from 'eslint-plugin-boundaries';
import jestDom from 'eslint-plugin-jest-dom';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importer from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import tailwind from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'coverage'] },
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      jestDom.configs['flat/recommended'],
      jsxA11y.flatConfigs.recommended,
      importer.flatConfigs.recommended,
      prettier,
      query.configs['flat/recommended'],
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      router.configs['flat/recommended'],
      sonarjs.configs.recommended,
      tailwind.configs['flat/recommended'],
      testingLibrary.configs['flat/react'],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      boundaries,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
      'boundaries/ignore': ['src/main.tsx', 'src/vite-env.d.ts', 'vite.config.ts'],
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**' },
        { type: 'features', pattern: 'src/features/**' },
        { type: 'lib', pattern: 'src/lib/**' },
        { type: 'routes', pattern: 'src/routes/**' },
        { type: 'testing', pattern: 'src/testing/**' },
        { type: 'types', pattern: 'src/types/**' },
      ],
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'boundaries/no-unknown-files': 'error',
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: 'app',
              allow: ['app', 'lib', 'testing'],
            },
            {
              from: 'features',
              allow: ['features', 'lib', 'testing', 'types'],
            },
            {
              from: 'lib',
              allow: ['lib'],
            },
            {
              from: 'routes',
              allow: ['routes', 'features'],
            },
            {
              from: 'testing',
              allow: ['testing', 'lib', 'types'],
            },
            {
              from: 'types',
              allow: ['types'],
            },
          ],
        },
      ],
      'boundaries/entry-point': [
        2,
        {
          default: 'disallow',
          rules: [
            {
              target: ['features'],
              allow: '**/index.{ts,tsx}',
            },
            {
              target: ['lib', 'testing', 'types'],
              allow: '**/*.{ts,tsx}',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      'sonarjs/no-nested-functions': 'off',
    },
  },
);
