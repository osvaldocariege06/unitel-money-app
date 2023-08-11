import * as React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import categoriesData from './../assets/data/CategoriesData'
import popularData from './../assets/data/PopularData'
import colors from '../assets/colors/colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from './../assets/types'
import { Search } from '../components/Search'

Feather.loadFont()
MaterialCommunityIcons.loadFont()

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>
}

export default function Home({ navigation }: HomeProps) {
  const renderCategoryItem = ({ item }) => {
    return (
      <View
        className={`mb-2 mr-3 rounded-2xl p-2 shadow-xl  ${
          item.id !== 1 ? 'ml-2' : 'ml-0'
        } ${item.selected ? 'bg-primary' : 'bg-white'}`}
      >
        <Image
          source={item.image}
          alt=""
          className="mx-5 mt-6 h-16 w-16 self-center"
        />
        <Text className="mt-2 text-center text-sm">{item.title}</Text>
        <View
          className={`my-5 h-6 w-6 items-center justify-center self-center rounded-3xl ${
            item.selected ? 'bg-white' : 'bg-secondary'
          }`}
        >
          <Feather
            name="chevron-right"
            size={8}
            className="self-center"
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    )
  }

  return (
    <View className="flex-1">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <SafeAreaView>
          <View className="mt-8 flex-row items-center justify-between px-5 pt-4">
            <Image
              source={require('../assets/images/profile.png')}
              alt=""
              className="h-10 w-10 rounded-full"
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View className="mt-8 px-5">
          <Text className="text-base font-light text-textDark">Food</Text>
          <Text className="text-3xl font-bold text-price">Delivery</Text>
        </View>

        {/* Search */}
        <View className="ml-2 mt-7 flex-1 flex-row items-center border-b-textLight px-5">
          <Search />
        </View>

        {/* Categories */}
        <View className="mt-8 px-5">
          <Text className="text-lg font-semibold text-textDark">
            Categories
          </Text>
          <View className="py-5">
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View className="mb-8 mt-6 px-8">
          <Text className="text-lg font-semibold text-textDark">Popular</Text>
          {popularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Details', { item })}
            >
              <View
                className={`flex-row overflow-hidden rounded-3xl bg-white pl-5 pt-5 shadow-sm shadow-black ${
                  item.id === 1 ? 'mt-2' : 'mt-5'
                }`}
              >
                <View>
                  <View>
                    <View className="flex-row items-center">
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text className="ml-2 text-sm">top of the week</Text>
                    </View>
                    <View className="mt-5">
                      <Text className="text-sm text-textDark">
                        {item.title}
                      </Text>
                      <Text className="mt-2 text-xs text-textLight">
                        Weight {item.weight}
                      </Text>
                    </View>
                  </View>
                  <View className="-ml-5 mt-2 flex-row items-center">
                    <View className="rounded-bl-3xl rounded-tr-3xl bg-primary px-10 py-5">
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                    <View className="ml-5 flex-row items-center">
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                      />
                      <Text className="ml-2 text-xs text-textDark">
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                </View>

                <View className="ml-10">
                  <Image
                    source={item.image}
                    alt={item.title}
                    className="h-32 w-52 resize object-cover object-center"
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
