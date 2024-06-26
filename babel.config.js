module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['.'],
        alias: {
          '@ModuleApp': './src/module',
          '@CoreApp': './src/core',
          '@Shared': './src/shared',
          '@Root': './src',
        },
      },
    ],
  ],
};
