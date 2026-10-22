export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        // Packages
        'typescript-config',
        'eslint-config',
        'ui',
        // Apps
        'web',
        // Cross-cutting
        'ci',
        'deps',
        'repo',
      ],
    ],
    'scope-empty': [1, 'never'],
  },
}
