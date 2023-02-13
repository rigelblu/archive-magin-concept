module.exports = {
  files: ['**/*.css', '**/*.scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
  ],
  plugins: ['stylelint-csstree-validator'],
  rules: {
    'function-no-unknown': null,
    'scss/at-import-partial-extension': null,
    'scss/at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'] },
    ],
    'scss/double-slash-comment-empty-line-before': null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
  },
};
