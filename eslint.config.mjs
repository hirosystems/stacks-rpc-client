// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // jest file config
  {
    files: ['**/jest.*.{js,mjs}'],
    languageOptions: {
      globals: { process: true, console: true },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  }
);
