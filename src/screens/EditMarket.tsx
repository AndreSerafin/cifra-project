import { LoginFormProps } from '@interfaces/auth'
import { useAuthService } from '@store/useAuth'
import { useState } from 'react'
import { Button, Input, Stack, Text, YStack } from 'tamagui'

export function EditMarket() {
  const { userAuth } = useAuthService()

  const [formData, setFormData] = useState<LoginFormProps>({
    username: userAuth?.username,
    email: userAuth?.email,
    password: userAuth?.password,
  })

  const handleInputChange = (field: any, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  return (
    <Stack bg="$bg" flex={1} justifyContent="center" alignItems="center">
      <Text>Editar Mercado</Text>

      <Stack flex={1} justifyContent="center" alignItems="center">
        <Text color="green" fontWeight="bold" fontSize={30}>
          Cifra
        </Text>
        <Text color="black" fontSize={20}>
          Editar o seu perfil.
        </Text>

        <YStack w={400} px={20} mt={60}>
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
          <Button mt={20} bg="green">
            <Text color="white" fontWeight="bold">
              EDITAR
            </Text>
          </Button>
        </YStack>
      </Stack>
    </Stack>
  )
}
