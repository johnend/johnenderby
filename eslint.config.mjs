import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        },
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-restricted-syntax': [
        'warn',
        {
          selector: "JSXAttribute[name.name='href'][value.value='#']",
          message:
            'Avoid placeholder links. Use a real route, a disabled non-link element, or omit the link until it has a destination.',
        },
      ],
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'coverage/**', 'archive/**', 'next-env.d.ts']),
]);

export default eslintConfig;
