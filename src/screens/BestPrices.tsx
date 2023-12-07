import { ListBestPrice } from '@components/ListBestPrice'
import { Text, YStack } from 'tamagui'

export function BestPrices() {
  return (
    <YStack bg="3F4F5F6" flex={1} mt={100} alignItems="center">
      <Text color="#000" fontSize={20} mb={20}>
        Melhores Preços
      </Text>
      <ListBestPrice title="Cervejas Geladas" />
      <ListBestPrice title="Destilados" />
      <ListBestPrice title="Vinhos" />
    </YStack>
  )
}
