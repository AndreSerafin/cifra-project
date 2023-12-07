import { YStack, Stack, Text } from 'tamagui'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function Welcome() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Stack w={300} h={300} bg="#D9D9D9" borderRadius={999} mb={30}></Stack>
      <Text fontSize={17} my={15}>
        BOAS VINDAS
      </Text>
      <Text fontSize={20} fontWeight="bold" textAlign="center">
        Encontre e compare os melhores{'\n'} preços dos supermercados
      </Text>
      <Button
        mt={100}
        title="Acessar minha conta"
        onPress={() => navigation.navigate('signIn')}
      />
      <Button
        mt={20}
        typeButton="outline"
        title="Criar uma nova conta"
        onPress={() => navigation.navigate('signUp')}
      />
    </YStack>
  )
}
