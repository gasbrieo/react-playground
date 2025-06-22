import eslint from '@eslint/js';
import query from '@tanstack/eslint-plugin-query';
import router from '@tanstack/eslint-plugin-router';
import importer from 'eslint-plugin-import';
import jestDom from 'eslint-plugin-jest-dom';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import tailwind from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      importer.flatConfigs.recommended,
      jestDom.configs['flat/recommended'],
      jsxA11y.flatConfigs.recommended,
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
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
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
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            // eg. src/features/auth should not import from src/features/users, etc.
            {
              target: './src/features/users',
              from: './src/features',
              except: ['./users'],
            },
            // e.g. src/app can import from src/features but not the other way around
            {
              target: './src/features',
              from: './src/app',
            },
            // e.g src/features and src/app can import from these shared modules but not the other way around
            {
              target: ['./src/components', './src/hooks', './src/lib', './src/types', './src/utils'],
              from: ['./src/features', './src/app'],
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
