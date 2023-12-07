import { useState } from 'react'
import { Button, Input, Stack, Text, YStack } from 'tamagui'
import { useNavigation } from '@react-navigation/native'

import { useAuthService } from '@store/useAuth'
import { LoginFormProps } from '@interfaces/auth'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function SignUp() {
  const { authenticate } = useAuthService()

  const [formData, setFormData] = useState<LoginFormProps>({
    username: '',
    email: '',
    password: '',
  })

  const handleInputChange = (field: any, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  function handleSignUp() {
    authenticate(formData)
  }

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  return (
    <Stack flex={1} justifyContent="center" alignItems="center">
      <Text color="green" fontWeight="bold" fontSize={30}>
        Cifra
      </Text>
      <Text color="black" fontSize={20}>
        O seu comparador de preços.
      </Text>

      <YStack w="100%" px={20} mt={60}>
        <YStack>
          <Text mb={5}>Digite o seu nome: </Text>
          <Input
            h={50}
            mb={20}
            placeholder="Nome: "
            value={formData.username}
            onChangeText={(text) => handleInputChange('username', text)}
          />
        </YStack>
        <YStack>
          <Text mb={5}>Digite o seu email: </Text>
          <Input
            h={50}
            mb={20}
            placeholder="Email: "
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </YStack>
        <YStack>
          <Text mb={5}>Digite a sua senha: </Text>
          <Input
            h={50}
            secureTextEntry
            placeholder="Senha: "
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
        </YStack>
        <Button mt={20} bg="green" onPress={handleSignUp}>
          <Text color="white" fontWeight="bold">
            CADASTRAR
          </Text>
        </Button>
      </YStack>

      <Text
        onPress={() => navigation.navigate('signIn')}
        mt={20}
        fontWeight="bold"
        fontSize={15}
      >
        Já tem uma conta? Faça login.
      </Text>
    </Stack>
  )
}
