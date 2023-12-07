import { ReactElement } from 'react'
import { Input as TamaguiInput, InputProps, XStack } from 'tamagui'

type Props = InputProps & {
  placeholder: string
  icon: ReactElement
}

export function Input({ icon, placeholder }: Props) {
  return (
    <XStack
      h={50}
      mb={20}
      borderWidth={1}
      borderColor="#747474"
      borderRadius={10}
      alignItems="center"
      px={10}
    >
      {icon}
      <TamaguiInput
        placeholder={placeholder}
        width={400}
        h={50}
        borderWidth={0}
        placeholderTextColor="#747474"
        color="#747474"
      />
    </XStack>
  )
}
