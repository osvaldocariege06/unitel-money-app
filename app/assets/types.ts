// types.ts
export type PopularDataProps = {
  id: number
  image: string
  title: string
  weight: string
  rating: string
  price: number
  sizeName: string
  sizeNumber: number
  crust: string
  deliveryTime: number
  ingredients: { id: number; name: string; image: string }[]
}

export type RootStackParamList = {
  Home: undefined
  Details: { item: PopularDataProps }
}
