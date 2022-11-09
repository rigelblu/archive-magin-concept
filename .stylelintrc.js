module.exports = {
  files: ['**/*.css', '**/*.scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
  ],
  rules: {
    'function-no-unknown': null,
    'scss/at-import-partial-extension': null,
    'scss/double-slash-comment-empty-line-before': null,
  },
  overrides: [
    {
      files: ['**/*.css'],
      plugins: ['stylelint-csstree-validator'],
      rules: { 'csstree/validator': true },
    },
  ],
};
