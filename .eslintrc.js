module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:json/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    project: ['tsconfig.json'], // Use tsconfig.json for storybook, and tsconfig.vite.json
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'jest', 'jsx-a11y', 'react', 'testing-library'],
  rules: {
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'warn',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-no-undef': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    react: { version: 'detect' },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },

  overrides: [
    {
      files: ['tsconfig.json', 'tsconfig.*.json'],
      rules: {
        'json/*': 'off',
      },
    },
  ],
};
