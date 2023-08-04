interface CategoryItem {
  id: string
  image: string
  title: string
  selected: boolean
}

const categoriesData: CategoryItem[] = [
  {
    id: '1',
    image: require('../images/pizza-icon.png'),
    title: 'Pizza',
    selected: true,
  },
  {
    id: '2',
    image: require('../images/shrimp-icon.png'),
    title: 'Seafood',
    selected: false,
  },
  {
    id: '3',
    image: require('../images/soda-icon.png'),
    title: 'Soft Drinks',
    selected: false,
  },
]

export default categoriesData
