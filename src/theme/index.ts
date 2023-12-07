import { createTokens } from 'tamagui'
import { size, space, zIndex, radius } from '@tamagui/themes'

export const tokens = createTokens({
  size,
  space,
  zIndex,
  color: {
    black: '#101010',
    white: '#FFF',
    bg: '#f5f5f5',
    gray_100: '#f2f2f2',
    gray_200: '#dedede',
    gray_300: '#B5B5B5',
    gray_400: '#a1a1a1',
    primary_100: '#d5f5ce',
    primary_300: '#48bf00',
  },
  radius,
})
