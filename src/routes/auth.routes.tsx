import { NavigationContainer } from '@react-navigation/native'
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'
import { Welcome } from '@screens/Welcome'

type AuthRoutes = {
  welcome: undefined
  signIn: undefined
  signUp: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="welcome" component={Welcome} />
        <Screen name="signIn" component={SignIn} />
        <Screen name="signUp" component={SignUp} />
      </Navigator>
    </NavigationContainer>
  )
}
