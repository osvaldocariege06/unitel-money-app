import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: '',
      pin: '',
    },
  })

  type FormData = {
    number: string
    pin: string
  }

  const onSubmit = ({ number, pin }: FormData) => {
    navigation.navigate('Home', { number, pin })
    console.log({ number, pin })
  }
  return (
    <View className="relative min-h-full items-center justify-center bg-primary px-8 py-10">
      <StatusBar style="dark" />
      <Image
        source={require('../assets/logo.png')}
        alt="Unitel Money Logo"
        className="-mb-4"
      />
      <Text className="text-[35px] font-semibold text-secondary">
        Bem-vindo!
      </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^(\+244)?[0-9]{9}$/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Seu número"
            className="mt-8 w-full rounded-md bg-white p-3"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            keyboardType="number-pad"
          />
        )}
        name="number"
      />
      {errors.number && (
        <Text className="mt-4 text-sm text-red-500">Campo obrigatório.</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Seu PIN"
            className="mt-4 w-full rounded-md bg-white p-3"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            secureTextEntry={true}
          />
        )}
        name="pin"
      />
      {errors.pin && (
        <Text className="mt-4 text-sm text-red-500">Campo obrigatório.</Text>
      )}

      <Text
        onPress={() => navigation.navigate('ForgotPassword')}
        className="my-6 mt-4 w-full text-right text-sm text-secondary"
      >
        Esqueci o meu PIN!
      </Text>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="mt-4 flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-md bg-secondary p-3"
      >
        <Text className="text-white">Entrar</Text>
        <Image
          source={require('../assets/angle-right.png')}
          alt="angle-right"
          className="h-6 w-6"
        />
      </TouchableOpacity>
      <TouchableOpacity className="mt-4 w-full rounded-md bg-transparent p-2 ">
        <Text className=" mx-auto text-secondary">Criar conta</Text>
      </TouchableOpacity>
      <Text className="mt-16 text-sm text-secondary">
        Copyrigth 2023 Unitel. Todos os direitos reservados
      </Text>
    </View>
  )
}
