import { IMAGES } from '@constants/images'
import { IPrice, IProduct } from '@interfaces/product'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import {
  ArrowLeftCircle,
  MapPin,
  Pin,
  ShoppingCart,
  User,
} from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import {
  Stack,
  YStack,
  Image,
  getTokens,
  Text,
  XStack,
  ScrollView,
  Avatar,
  View,
} from 'tamagui'
import marketImage from '@assets/icons/shopping-cart-icon.svg'

interface Props {
  route: { params: { item: IProduct } }
}

export function ProductDetail({ route }: Props) {
  const {
    params: {
      item: { imageLink, name, description, weight, prices },
    },
  } = route

  const { color } = getTokens()
  const router = useNavigation()
  const [numberOfLines, setNumberOfLines] = useState(3)
  const [lowestPriceMarket, setLowestPriceMarket] = useState<IPrice | null>(
    null,
  )

  function handleToggleSeeMore() {
    if (numberOfLines === 0) {
      setNumberOfLines(3)
    } else {
      setNumberOfLines(0)
    }
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  function findLowestPrice(items: IPrice[]) {
    let lowest = items[0]
    items.forEach((item) => {
      if (item.price < lowest.price) {
        lowest = item
      }
    })
    setLowestPriceMarket(lowest)
  }

  useEffect(() => {
    findLowestPrice(prices)
  }, [])

  return (
    <YStack flex={1} bg={'$color.primary_300'}>
      <StatusBar backgroundColor={color.$primary_300.val} />
      <Stack flex={1} m={20}>
        <TouchableOpacity onPress={() => router.goBack()}>
          <ArrowLeftCircle size={40} color={color.white.val} />
        </TouchableOpacity>
        <XStack flex={1} ai={'center'} jc={'center'}>
          {
            <Image
              source={IMAGES[imageLink]}
              alt=""
              style={{ width: 120, height: 120 }}
            />
          }
        </XStack>
      </Stack>
      <YStack
        pt={32}
        px={20}
        flex={3}
        bg={'$color.white'}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      >
        <YStack>
          <Text fontSize={24} fontWeight={'500'} textTransform={'capitalize'}>
            {name}
          </Text>
          <Text color={'$color.gray_300'} fontSize={16}>
            {weight}
          </Text>
        </YStack>
        <YStack mt={24} gap={6}>
          <Text color={'gray'} fontWeight={'500'} fontSize={18}>
            Descrição
          </Text>
          <YStack gap={2}>
            <Text color={'$gray_300'} numberOfLines={numberOfLines}>
              {description}
            </Text>
            <TouchableOpacity>
              <Text
                fontWeight={'bold'}
                color={'$color.primary_300'}
                onPress={handleToggleSeeMore}
              >
                {numberOfLines === 3 ? 'Ver mais' : 'Ocultar'}
              </Text>
            </TouchableOpacity>

            <YStack gap={8}>
              <Text fontSize={16} fontWeight={'500'}>
                Melhor Local de compra:
              </Text>
              <XStack gap={8} ai={'center'}>
                <Avatar circular size={32}>
                  <Avatar.Image src={marketImage} />
                  <Avatar.Fallback
                    ai={'center'}
                    jc={'center'}
                    bg={getRandomColor()}
                  >
                    <ShoppingCart color={color.white.val} size={16} />
                  </Avatar.Fallback>
                </Avatar>
                <YStack>
                  <Text>{lowestPriceMarket?.market_name}</Text>
                  <XStack gap={4}>
                    <MapPin size={15} color={color.$gray_400.val} />
                    <Text color={'$gray_400'} fontSize={12}>
                      {lowestPriceMarket?.distance}
                    </Text>
                  </XStack>
                </YStack>
                <XStack ai={'flex-end'} jc={'flex-end'} flex={1} gap={4}>
                  <Text fontSize={22} fontWeight={'bold'}>
                    {lowestPriceMarket?.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Text>
                  <Text color={'$color.gray_300'} fontSize={16}>
                    {lowestPriceMarket?.unit}
                  </Text>
                </XStack>
              </XStack>
            </YStack>

            <YStack height={'60%'} gap={12}>
              <Text fontSize={16} fontWeight={'500'}>
                Compare os Preços:
              </Text>
              <FlatList
                data={prices}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View height={16} />}
                keyExtractor={(item, index) => item.market_name + index}
                renderItem={({ item }) => (
                  <XStack gap={8}>
                    <Avatar circular size={32}>
                      <Avatar.Image src={marketImage} />
                      <Avatar.Fallback
                        ai={'center'}
                        jc={'center'}
                        bg={getRandomColor()}
                      >
                        <ShoppingCart color={color.white.val} size={16} />
                      </Avatar.Fallback>
                    </Avatar>
                    <YStack>
                      <Text>{item?.market_name}</Text>
                      <XStack gap={4}>
                        <MapPin size={15} color={color.$gray_400.val} />
                        <Text color={'$gray_400'} fontSize={12}>
                          {lowestPriceMarket?.distance}
                        </Text>
                      </XStack>
                    </YStack>
                    <XStack ai={'flex-end'} jc={'flex-end'} flex={1} gap={4}>
                      <Text fontSize={16} fontWeight={'bold'}>
                        {item?.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </Text>
                      <Text color={'$color.gray_300'} fontSize={14}>
                        {item?.unit}
                      </Text>
                    </XStack>
                  </XStack>
                )}
              />
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </YStack>
  )
}
