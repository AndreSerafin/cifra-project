import { Button as TamaguiButton, ButtonProps, Text } from 'tamagui'

type Props = ButtonProps & {
  title: string
  typeButton?: 'solid' | 'outline'
}

export function Button({ title, typeButton = 'solid', ...rest }: Props) {
  return (
    <TamaguiButton
      mt={15}
      w={350}
      h={50}
      bg={typeButton === 'outline' ? '' : '#1EB211'}
      pressStyle={
        typeButton === 'outline'
          ? { scale: 0.97 }
          : { backgroundColor: '#1ba50e', scale: 0.97 }
      }
      borderColor="#1EB211"
      borderWidth={typeButton === 'outline' ? 2 : 0}
      borderRadius={10}
      {...rest}
    >
      <Text
        fontWeight="bold"
        color={typeButton === 'outline' ? '#1EB211' : '#FFF'}
      >
        {title}
      </Text>
    </TamaguiButton>
  )
}
