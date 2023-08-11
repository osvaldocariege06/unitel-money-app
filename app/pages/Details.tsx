import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native'
import React from 'react'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../assets/types'

import { RouteProp } from '@react-navigation/native'

Feather.loadFont()
FontAwesome.loadFont()
MaterialCommunityIcons.loadFont()

type DetailsRoutePros = RouteProp<RootStackParamList, 'Details'>
type DetailsProps = {
  route: DetailsRoutePros
  navigation: StackNavigationProp<RootStackParamList, 'Details'>
}

export default function Details({ route, navigation }: DetailsProps) {
  const { item } = route.params

  function renderIngredientsItem({ item }) {
    return (
      <View
        className={`mb-2 mr-4 mt-5 h-20 w-24 items-center justify-center rounded-lg bg-white shadow shadow-black ${
          item.id !== 1 ? 'mr-4' : ''
        }`}
      >
        <Image
          source={item.image}
          alt={item.name}
          className="h-20 w-24 rounded"
        />
      </View>
    )
  }

  return (
    <>
      <View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView className="mt-10 flex-row items-center justify-between px-5">
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              className="h-10 w-10 items-center justify-center rounded border-2 border-gray-200"
            >
              <Feather name="chevron-left" size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              className={`h-10 w-10 items-center justify-center rounded  text-white shadow ${
                item.rating >= '5.0' ? 'bg-primary' : 'border border-primary'
              }`}
            >
              {item.rating >= '5.0' ? (
                <FontAwesome
                  name="star"
                  size={14}
                  color={'#fff'}
                  className="text-white"
                />
              ) : (
                <FontAwesome
                  name="star-o"
                  size={14}
                  color={'#F5CA48'}
                  className="text-white"
                />
              )}
            </TouchableOpacity>
          </SafeAreaView>
          {/* TITLE PIZZA */}
          <View className="mt mt-8 px-5">
            <Text className="text-4xl font-bold">{item.title}</Text>
            <Text className="mt-5 max-w-[172px] text-3xl font-semibold text-price">
              {item.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </Text>
          </View>

          {/* INFO PIZZA */}
          <View className="mt mt-8 flex-row items-center justify-between px-5">
            <View className="flex flex-col">
              <View className="mb-5 flex-col">
                <Text className="text-sm font-semibold text-textLight">
                  Size
                </Text>
                <Text className="mt-1 text-base font-semibold text-textDark">
                  {item.sizeName} {item.sizeNumber}
                </Text>
              </View>
              <View className="mb-5 flex-col">
                <Text className="text-sm font-semibold text-textLight">
                  Crust
                </Text>
                <Text className="mt-1 text-base font-semibold text-textDark">
                  {item.crust}
                </Text>
              </View>
              <View className="flex-col">
                <Text className="text-sm font-semibold text-textLight">
                  Delivery in
                </Text>
                <Text className="mt-1 text-base font-semibold text-textDark">
                  {item.deliveryTime} min
                </Text>
              </View>
            </View>
            <Image
              source={item.image}
              alt={item.title}
              className="absolute -right-16 h-[176px] w-full max-w-[346px]"
            />
          </View>

          {/* INGREDIENTS */}
          <View className="mt mt-8 px-5">
            <Text className="text-base font-bold text-textDark">
              Ingredients
            </Text>
            <View>
              <FlatList
                data={item.ingredients}
                renderItem={renderIngredientsItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/* PLACE AN ORDER */}
          <TouchableOpacity
            onPress={() => alert(`${item.title} is placed an order`)}
            className="mx-auto mb-8 mt-16 h-12 w-full max-w-xs flex-row items-center justify-center rounded-md bg-primary"
          >
            <Text className="text-textDark">Place an order</Text>
            <Feather name="chevron-right" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  )
}
