import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Image } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View className="relative min-h-full items-center justify-center bg-primary px-8 py-10">
      <StatusBar style="auto" />
      <Image
        source={require('../assets/logo.png')}
        alt="Unitel Money Logo"
        className="-mb-4"
      />
      <Text className="text-[35px] font-semibold text-secondary">HOme</Text>
    </View>
  )
}
