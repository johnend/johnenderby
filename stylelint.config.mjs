/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard'],
  rules: {
    'import-notation': null,
    'media-feature-range-notation': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'rule-empty-line-before': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.module.css'],
      rules: {
        'selector-class-pattern': [
          '^[a-z][a-zA-Z0-9]*$',
          {
            message: 'Expected CSS Modules class selectors to use camelCase.',
          },
        ],
        'declaration-block-no-redundant-longhand-properties': null,
        'keyframes-name-pattern': null,
      },
    },
    {
      files: ['src/styles/**/*.css'],
      rules: {
        'alpha-value-notation': null,
        'at-rule-empty-line-before': null,
        'comment-empty-line-before': null,
        'custom-property-empty-line-before': null,
        'color-function-alias-notation': null,
        'color-function-notation': null,
        'color-hex-length': null,
        'value-keyword-case': null,
      },
    },
  ],
};

export default config;
