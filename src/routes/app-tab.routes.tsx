import { NavigationContainer } from '@react-navigation/native'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { BestPrices } from '@screens/BestPrices'
import { EditMarket } from '@screens/EditMarket'

import { CircleDollarSign, Home as House, User } from 'lucide-react-native'
import { View, getTokens } from 'tamagui'
import { AppStackRoutes } from './app-stack.routes'

type AppTabRoutes = {
  home: undefined
  stack: undefined
  bestPrices: undefined
  editMarket: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppTabRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppTabRoutes>()

export function AppTabRoutes() {
  const { color } = getTokens()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#FFF',
        tabBarStyle: {
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          height: 68,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              bg={focused ? '$color.primary_100' : 'transparent'}
              p={8}
              borderRadius={999}
            >
              <House
                size={focused ? 26 : 20}
                color={focused ? color.primary_300.val : '#000'}
              />
            </View>
          ),
        }}
      />
      <Screen
        name="stack"
        component={AppStackRoutes}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="bestPrices"
        component={BestPrices}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              bg={focused ? '$color.primary_100' : 'transparent'}
              p={8}
              borderRadius={999}
            >
              <CircleDollarSign
                size={focused ? 26 : 20}
                color={focused ? '#1EB211' : '#000'}
              />
            </View>
          ),
        }}
      />
      <Screen
        name="editMarket"
        component={EditMarket}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              bg={focused ? '$color.primary_100' : 'transparent'}
              p={8}
              borderRadius={999}
            >
              <User
                size={focused ? 26 : 20}
                color={focused ? '#1EB211' : '#000'}
              />
            </View>
          ),
        }}
      />
    </Navigator>
  )
}
