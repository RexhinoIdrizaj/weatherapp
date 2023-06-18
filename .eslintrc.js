module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react-native/all',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    'react-native/react-native': true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-unused-styles': 'off',
    'react-native/no-raw-text': [
      'off',
      {
        skip: ['UIText'],
      },
    ],
  },
};
