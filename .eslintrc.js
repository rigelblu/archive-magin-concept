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
    'plugin:@next/next/recommended',
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
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'jest', 'jsx-a11y', 'react', 'testing-library'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/restrict-template-expressions': ['error', { allowBoolean: true }],
    '@typescript-eslint/unbound-method': 'off',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'warn',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-undef': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unescaped-entities': ['error', { forbid: ['{', '>', '}'] }],
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
      files: ['src/pages/**/*.ts[x]'],
      rules: { '@typescript-eslint/no-floating-promises': 'off' },
    },
    {
      files: ['tsconfig.json'],
      rules: {
        'json/*': 'off',
      },
    },
  ],
};
