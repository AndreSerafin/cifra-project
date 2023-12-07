// @ts-nocheck
import { IMAGES } from '@constants/images'
import { IHighlightsDay } from '@interfaces/highlightsDay'
import { Stack, Text, Image } from 'tamagui'

interface ICardRecommended {
  item: IHighlightsDay
  onPress: () => void
}

export function CardRecommended({ item, onPress }: ICardRecommended) {
  return (
    <Stack
      onPress={onPress}
      pressStyle={{ bg: '$color.gray_200' }}
      flex={0.5}
      bg="#FFF"
      maxWidth={150}
      h={170}
      p={10}
      borderRadius={15}
      m={10}
      justifyContent="center"
    >
      <Stack
        maxHeight={70}
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          alt=""
          source={IMAGES[item.imageLink]}
          style={{ maxWidth: 100, maxHeight: 80 }}
        />
      </Stack>
      <Stack alignItems={'flex-start'} mt={2}>
        <Text fontSize={15} mt={5} color="#000" textTransform="capitalize">
          {item.name}
        </Text>
        <Text fontSize={10} mt={5} color="#A3A3A3">
          {item.weight}
        </Text>
        <Text color="$color.primary_300" fontWeight={'bold'} mt={5}>
          {item.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
      </Stack>
    </Stack>
  )
}
