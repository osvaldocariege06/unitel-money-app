import { View, TextInput, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import popularData from '../assets/data/PopularData'
import colors from '../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'

Feather.loadFont()

export function Search() {
  const [searchData, setSearchData] = useState('')

  const filterPizza = popularData.filter((pizza) =>
    pizza.title.toLowerCase().includes(searchData.toLowerCase()),
  )

  function renderItem({ item }) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }

  return (
    <View className="flex-1">
      <View className="flex-1 flex-row items-center">
        <Feather name="search" size={16} color={colors.textDark} />
        <View className="ml-2 flex-1 border-b-2 border-b-textLight text-textLight">
          <TextInput
            placeholder="Search"
            onChangeText={(text) => setSearchData(text)}
            value={searchData}
          />
        </View>
      </View>
      <View className="mt-4 px-8">
        <FlatList
          data={filterPizza}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}
