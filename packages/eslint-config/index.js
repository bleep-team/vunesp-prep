import js from '@eslint/js'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import importX from 'eslint-plugin-import-x'
import reactHooks from 'eslint-plugin-react-hooks'
import turbo from 'eslint-plugin-turbo'
import tseslint from 'typescript-eslint'

const sharedRules = {
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/consistent-type-imports': 'error',
}

// Files whose framework/tooling contract requires a default export.
const defaultExportFiles = [
  '**/app/**/{page,layout,loading,error,global-error,not-found,template,default}.{ts,tsx}',
  '**/app/**/{sitemap,robots,manifest,icon,apple-icon}.{ts,tsx}',
  '**/app/**/{opengraph-image,twitter-image}.{ts,tsx}',
  '**/{proxy,middleware,instrumentation}.ts',
  '**/*.config.{js,mjs,ts}',
]

/** Base config — TypeScript packages (libraries, `@vunesp/ui`). */
export const base = tseslint.config(
  { ignores: ['dist/**', '.turbo/**', 'coverage/**'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  turbo.configs['flat/recommended'],
  reactHooks.configs.flat['recommended-latest'],
  {
    plugins: { 'import-x': importX },
    rules: {
      ...sharedRules,
      'import-x/no-default-export': 'error',
    },
  },
  { files: defaultExportFiles, rules: { 'import-x/no-default-export': 'off' } },
  prettier,
)

/** Next.js config — `eslint-config-next` (core web vitals + TS) plus repo rules. */
export const nextjs = [
  { ignores: ['.next/**', 'out/**', 'next-env.d.ts', '.turbo/**', 'coverage/**'] },
  ...nextVitals,
  ...nextTs,
  turbo.configs['flat/recommended'],
  {
    rules: {
      ...sharedRules,
      'import/no-default-export': 'error',
    },
  },
  { files: defaultExportFiles, rules: { 'import/no-default-export': 'off' } },
  prettier,
]
