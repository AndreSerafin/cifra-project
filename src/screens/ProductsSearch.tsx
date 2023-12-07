import { CardRecommended } from '@components/CardRecommended'
import { Loading } from '@components/Loading'
import { IProduct } from '@interfaces/product'
import { useNavigation } from '@react-navigation/native'
import { AppStackNavigatorRoutesProps } from '@routes/app-stack.routes'
import { api } from '@services/api'
import { FlatList } from 'react-native'
import {  useQuery } from 'react-query'
import { Stack, Text } from 'tamagui'

interface Props {
  search: string
}

export function ProductsSearch({ search }: Props) {
  const navigation = useNavigation<AppStackNavigatorRoutesProps>()
  const { data: productsData, isFetching: isLoading } = useQuery<IProduct[]>(
    ['prod-search', search],
    async () => {
      const { data } = await api.get(`/products/?q=${search}`)
      return data
    },
  )

  return (
    <>
      <Text fontSize={20} color="#000" mt={20}>
        Produtos Encontrados
      </Text>
      <Stack mt={20} flex={1}>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={productsData}
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
        )}
      </Stack>
    </>
  )
}
