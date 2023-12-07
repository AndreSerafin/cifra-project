import { CardRecommended } from '@components/CardRecommended'
import { IProduct } from '@interfaces/product'
import { useNavigation } from '@react-navigation/native'
import { AppStackNavigatorRoutesProps } from '@routes/app-stack.routes'
import { api } from '@services/api'
import { useQuery } from 'react-query'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Stack, Text, YStack } from 'tamagui'

export function FeaturedProducts() {
  const navigation = useNavigation<AppStackNavigatorRoutesProps>()

  const { data: products } = useQuery({
    queryKey: ['fetch-products'],
    queryFn: async () => {
      const { data } = await api.get<IProduct[]>('/featured-products')
      return data
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.info(error)
      }
    },
  })

  return (
    <>
      <Text fontSize={20} color="#000" mt={20}>
        Recomendados
      </Text>
      <Stack mt={20}>
        <FlatList
          data={products}
          numColumns={2}
          horizontal={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardRecommended
              onPress={() => {
                navigation.navigate('productDetail', { item })
              }}
              item={item}
            />
          )}
        />
      </Stack>
    </>
  )
}
