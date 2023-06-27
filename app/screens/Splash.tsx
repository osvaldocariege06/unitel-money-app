import React, { useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000)
  }, [])
  return (
    <View className='relative flex-1 items-center bg-primary px-8 py-10'>
      <StatusBar style='auto' />
      <Image source={require('../assets/logo.png')} className='mx-auto m-auto' />
      <Text className='text-sm text-secondary'>Carregando..</Text>
    </View>
  );
}
