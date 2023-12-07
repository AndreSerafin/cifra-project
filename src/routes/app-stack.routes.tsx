import { IProducts } from '@interfaces/highlightsDay'
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { ProductDetail } from '@screens/ProductDetail'

type AppStackRoutes = {
  home: undefined
  productDetail: {
    item: IProducts
  }
}

export type AppStackNavigatorRoutesProps =
  NativeStackNavigationProp<AppStackRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AppStackRoutes>()

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="productDetail" component={ProductDetail} />
    </Navigator>
  )
}
