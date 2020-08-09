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
  ],
}
