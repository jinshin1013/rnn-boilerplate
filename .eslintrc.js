module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Eslint rules
    radix: 'off',
    'lines-between-class-members': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-return-assign': 'off',

    // Import rules
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',

    // React rules
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',

    // TypeScript rules
    '@typescript-eslint/no-use-before-define': 'off',
  },

  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
