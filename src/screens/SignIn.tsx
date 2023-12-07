import { Stack, Text, YStack, XStack } from 'tamagui'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import {
  Apple,
  ArrowLeftCircle,
  Mail,
  Chrome,
  LockIcon,
} from 'lucide-react-native'
import { CardAuthSocialMedia } from '@components/CardAuthSocialMedia'
import { useEffect } from 'react'
import { useAuthService } from '@store/useAuth'

export function SignIn() {
  const { authenticate } = useAuthService()
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  useEffect(() => {
    const checkAuthData = async () => {
      const storedAuthData = await AsyncStorage.getItem('userAuthData')
      if (storedAuthData) {
        const parsedAuthData = JSON.parse(storedAuthData)
        authenticate(parsedAuthData)
      }
    }

    checkAuthData()
  }, [])

  return (
    <Stack flex={1} mt={50}>
      <XStack
        w="50%"
        justifyContent="space-between"
        h={60}
        alignItems="flex-end"
      >
        <Stack onPress={() => navigation.goBack()}>
          <ArrowLeftCircle size={35} style={{ marginLeft: 20 }} />
        </Stack>
        <Text color="#000" fontWeight="bold" fontSize={20}>
          LOGIN
        </Text>
      </XStack>

      <YStack
        w="100%"
        px={20}
        mt={60}
        bg="#DCDCDC"
        flex={1}
        borderTopLeftRadius={35}
        borderTopRightRadius={35}
      >
        <YStack>
          <YStack my={25}>
            <Text fontWeight="bold" fontSize={30} color="#000000">
              Acesse sua conta
            </Text>
            <Text color="#696969" fontSize={18}>
              Escolha como deseja continuar
            </Text>
          </YStack>
          <YStack>
            <Input
              placeholder="Seu email"
              icon={<Mail color="#747474" size={28} />}
            />
          </YStack>
          <YStack>
            <Input
              placeholder="Sua senha"
              icon={<LockIcon color="#747474" size={28} />}
            />
          </YStack>
          <Button width="100%" title="Continuar" />
        </YStack>

        <XStack justifyContent="center" alignItems="center" my={30}>
          <Stack w={170} h={3} bg="#FFF"></Stack>
          <Text mx={10}>Ou</Text>
          <Stack w={170} h={3} bg="#FFF"></Stack>
        </XStack>

        <YStack>
          <CardAuthSocialMedia
            text="Continuar com Google"
            icon={<Chrome size={28} />}
          />
          <CardAuthSocialMedia
            text="Continuar com Apple"
            icon={<Apple size={28} />}
          />
        </YStack>

        <Text textAlign="center" mt={20}>
          Termos de serviço. Política de Privacidade.
        </Text>
      </YStack>
    </Stack>
  )
}
