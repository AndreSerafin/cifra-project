import { CATEGORYS_LIST } from '@constants/category'
import { FlatList } from 'react-native'
import { YStack, Text } from 'tamagui'
import { CardCategories } from './CardCategories'

export type ListBestPrice = {
  title: string
}

export function ListBestPrice({ title }: ListBestPrice) {
  return (
    <YStack h={200} mx={30}>
      <Text fontSize={15} color="#000" mb={5}>
        {title}
      </Text>

      <FlatList
        data={CATEGORYS_LIST}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardCategories title={item.name} image={item.image} />
        )}
      />
    </YStack>
  )
}
