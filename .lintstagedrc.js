module.exports = {
  '**/*.{html,js,jsx,json,md,ts,tsx}': 'yarn lint:next',
  '**/*.{css,scss}': 'yarn lint:style',
  '**/*': 'yarn prettier',
};

// Required by NextJS
const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
