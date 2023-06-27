import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Image } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View className="relative min-h-full bg-primary">
      <StatusBar style="auto" />
      <View className="absolute -top-4 mt-4 flex h-[317px] w-full flex-row items-center justify-between rounded-b-[20px] bg-main px-8 py-10 pt-12">
        <View className="flex flex-row items-center justify-center gap-2">
          <Image
            source={require('../assets/avatar.png')}
            alt="Unitel Money Logo"
            className="h-10 w-10 rounded-full bg-red-300 object-cover object-center"
          />
          <View className="flex flex-col">
            <Text className="text-xl font-semibold leading-relaxed text-white">
              Osvaldo Cariege
            </Text>
            <Text className="text-sm leading-relaxed text-white">
              +244 933 728 754
            </Text>
          </View>
        </View>
        <Image
          source={require('../assets/menu-icon.png')}
          alt="Unitel Money Logo"
          className=""
        />
      </View>
    </View>
  )
}
