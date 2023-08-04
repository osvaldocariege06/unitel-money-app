import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface TaskProps {
  task: string
}

export default function Task({ task }: TaskProps) {
  return (
    <View className="mb-5 flex flex-row items-center justify-between rounded-xl bg-white p-4">
      <View className="items-cente flex flex-row flex-wrap">
        <TouchableOpacity className="mr-3 h-6 w-6 rounded-md bg-cyan-500"></TouchableOpacity>
        <Text className="">{task}</Text>
      </View>
      <View className=" h-3 w-3 rounded-full border-2 border-cyan-500 "></View>
    </View>
  )
}
