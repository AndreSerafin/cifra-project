import { Spinner, Stack } from 'tamagui'
import { Loader2 } from 'lucide-react-native'

export function Loading() {
  return (
    <Stack flex={1} justifyContent="center" alignItems="center">
      <Spinner size="large" color="$color.primary_300" />
    </Stack>
  )
}
