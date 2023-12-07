import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode, useState } from 'react'

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
