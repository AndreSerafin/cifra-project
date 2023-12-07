import { ReactElement } from 'react'
import { XStack, StackProps, Text } from 'tamagui'

type Props = StackProps & {
  icon: ReactElement
  text: string
}

export function CardAuthSocialMedia({ icon, text, onPress }: Props) {
  return (
    <XStack
      onPress={onPress}
      bg="#FFF"
      mt={12}
      borderWidth={1}
      h={50}
      justifyContent="center"
      alignItems="center"
      borderRadius={10}
    >
      {icon}
      <Text ml={5} fontWeight="bold" fontSize={15}>
        {text}
      </Text>
    </XStack>
  )
}
