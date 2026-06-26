import js from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,

  // React — JSX/TSX only
  {
    files: ['**/*.{jsx,tsx}'],
    ...react.configs.flat.recommended,
    settings: { react: { version: 'detect' } },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    ...react.configs.flat['jsx-runtime'], // React 19 automatic runtime: no `import React` needed
  },
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: reactHooks.configs['recommended-latest'].rules,
  },

  // Prettier — last, so eslint-config-prettier can disable conflicting stylistic rules
  prettier,
  {
    // .astro formatting is handled by the Prettier CLI (`npm run format`) with
    // prettier-plugin-astro. Running prettier/prettier through the eslint-astro
    // processor mis-parses inline <script> blocks, so disable it here.
    files: ['**/*.astro', '**/*.astro/**'],
    rules: { 'prettier/prettier': 'off' },
  },
];
