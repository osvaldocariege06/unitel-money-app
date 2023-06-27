import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 2000)
  }, [navigation])
  return (
    <View className="relative flex-1 items-center bg-primary px-8 py-10">
      <StatusBar style="auto" />
      <Image
        source={require('../assets/logo.png')}
        alt="Unitel Money Logo"
        className="m-auto mx-auto"
      />
      <Text className="text-sm text-secondary">Carregando..</Text>
    </View>
  )
}
