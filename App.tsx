import { StatusBar } from 'react-native'
import { Routes } from '@routes/index'
import { Loading } from '@components/Loading'
import { useFonts } from 'expo-font'
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ReactQueryProvider } from '@components/providers/reactQueryProvider'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return
  }

  return (
    <ReactQueryProvider>
      <TamaguiProvider config={config}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <SafeAreaView style={{ flex: 1 }}>
          {loaded ? <Routes /> : <Loading />}
        </SafeAreaView>
      </TamaguiProvider>
    </ReactQueryProvider>
  )
}
