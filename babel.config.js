process.env.TAMAGUI_TARGET = 'native'

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@dtos': './src/dtos',
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@theme': './src/theme',
            '@store': './src/store',
            '@interfaces': './src/interfaces',
            '@constants': './src/constants',
          },
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: ['TAMAGUI_TARGET', 'EXPO_ROUTER_APP_ROOT'],
        },
      ],
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
