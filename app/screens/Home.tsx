
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, TextInput, Image, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'


export default function Home({ navigation }) {
  return (
    <View className='relative min-h-full items-center justify-center bg-primary px-8 py-10'>
      <StatusBar style='auto' />
      <Image source={require('../assets/logo.png')} className='-mb-4' />
      <Text className='text-[35px] text-secondary font-semibold'>Bem-vindo!</Text>
      <TextInput placeholder='Seu número' className='bg-white p-3 rounded-md w-full mt-8' />
      <TextInput placeholder='Seu PIN' className='bg-white p-3 rounded-md w-full mt-4' />
      <Text className='text-sm text-secondary text-right w-full mt-4'>Esqueci o meu PIN!</Text>
      <TouchableOpacity className='flex justify-center items-center w-full mt-4 bg-secondary p-4 rounded-md'>
        <Text className='text-white'>Entrar</Text>
        {/* <Image source={require('../assets/angle-right.png')} className='h-6 w-6' /> */}
      </TouchableOpacity>
      <TouchableOpacity className='w-full mt-4 bg-transparent p-4 rounded-md '>
        <Text className=' text-secondary mx-auto'>Criar conta</Text>
      </TouchableOpacity>
      <Text className='text-sm text-secondary mt-16'>Copyrigth 2023 Unitel. Todos os direitos reservados</Text>
     
    </View>
  )
}