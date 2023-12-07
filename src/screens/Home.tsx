import { FlatList, TouchableOpacity } from 'react-native'
import { Search, ChevronDown, X } from 'lucide-react-native'
import { Input, Stack, Text, YStack, XStack, getTokens } from 'tamagui'
import { CardCategories } from '@components/CardCategories'
import { CATEGORYS_LIST } from '../constants/category'
import { FeaturedProducts } from './FeaturedProducts'
import { useState } from 'react'
import { ProductsSearch } from './ProductsSearch'

export function Home() {
  const { color } = getTokens()
  const [search, setSearch] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <YStack bg="$color.bg" flex={1}>
      <YStack width="100%" px={30} mt={70}>
        <XStack justifyContent="space-between" alignItems="center">
          <YStack>
            <Text fontSize={15} color="$gray_100" mb={6}>
              Endereço atual
            </Text>
            <XStack ai={'center'} gap={8}>
              <Text fontSize={20} color="#000">
                Av. Universitária
              </Text>
              <ChevronDown color={color.$primary_300.val} size={'16px'} />
            </XStack>
          </YStack>
        </XStack>
      </YStack>

      <Stack px={30} mt={20} gap={12}>
        <XStack
          bg="#FFF"
          justifyContent="space-between"
          alignItems="center"
          elevation={5}
          borderRadius={10}
          h={50}
          mt={15}
          pr={19}
          borderWidth={isFocused ? 1 : 0}
          borderColor={'$color.primary_300'}
        >
          <Input
            height={'30px'}
            flex={1}
            placeholder="Procurar produto..."
            borderWidth={0}
            borderColor="#ffffff0"
            h={60}
            value={search}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={(val) => {
              setSearch(val)
            }}
          />
          {search.length === 0 ? (
            <Search
              size={32}
              color={isFocused ? color.$primary_300.val : '#9F9F9F'}
            />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setSearch('')
              }}
            >
              <X
                size={32}
                color={isFocused ? color.$primary_300.val : '#9F9F9F'}
              />
            </TouchableOpacity>
          )}
        </XStack>
        {search.length === 0 && (
          <FlatList
            data={CATEGORYS_LIST}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardCategories title={item.name} image={item.image} />
            )}
          />
        )}
      </Stack>
      {search.length === 0 ? (
        <YStack px={30} height={'55%'}>
          <FeaturedProducts />
        </YStack>
      ) : (
        <YStack px={30} height={'68%'}>
          <ProductsSearch search={search} />
        </YStack>
      )}
    </YStack>
  )
}
