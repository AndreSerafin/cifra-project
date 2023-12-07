import { create } from 'zustand'
import { LoginFormProps } from '@interfaces/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface AuthServiceProps {
  userAuth: LoginFormProps | null
  authenticate: (data: LoginFormProps) => void
  logout: () => Promise<void>
}

export const useAuthService = create<AuthServiceProps>((set) => ({
  userAuth: null,

  authenticate: async (data: LoginFormProps) => {
    await AsyncStorage.setItem('userAuthData', JSON.stringify(data))
    set(() => ({ userAuth: data }))
  },

  logout: async () => {
    await AsyncStorage.removeItem('userAuthData')
    set(() => ({ userAuth: null }))
  },
}))
