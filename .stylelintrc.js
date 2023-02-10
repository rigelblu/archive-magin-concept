module.exports = {
  files: ['**/*.css', '**/*.scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
  ],
  plugins: ['stylelint-csstree-validator'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['apply', 'tailwind'] }],
    'csstree/validator': [
      true,
      { syntaxExtensions: ['sass'] },
      { ignoreAtrules: ['@apply', '@tailwind'] },
    ],
    'function-no-unknown': null,
    'scss/at-import-partial-extension': null,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['apply', 'tailwind'] }],
    'scss/double-slash-comment-empty-line-before': null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
  },
  overrides: [
    {
      files: ['src/styles/tailwind.css'],
      rules: { 'csstree/validator': [{ atrules: false }] },
    },
  ],
};
