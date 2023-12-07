export type IPrice = {
  market_name: string
  price: number
  unit: string
  distance: string
}

export type IProduct = {
  id: string
  name: string
  imageLink: string
  description: string
  price: number
  weight: string
  prices: IPrice[]
}
