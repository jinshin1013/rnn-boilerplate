module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.tsx', '.ts', '.ios.tsx', '.android.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'],
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    'react-native-reanimated/plugin',
  ],
}
