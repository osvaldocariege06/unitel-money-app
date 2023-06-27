import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

export default function ForgotPassword({ navigation }) {
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
    code: string
  }

  const onSubmit = ({ number, code }: FormData) => {
    navigation.navigate('Home', { number, code })
    console.log({ number, code })
  }
  return (
    <View className="flex-1 bg-primary px-6 py-10">
      <View className="mb-14 flex flex-row items-center justify-between py-4">
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className="flex flex-row items-center gap-2"
        >
          <Image
            source={require('../assets/angle-left.jpg')}
            alt="angle-left"
            className="h-6 w-6"
          />
          <Text className="text-secondary">Voltar</Text>
        </TouchableOpacity>
        <Text className="text-secondary">Toggle</Text>
      </View>
      <View className="flex flex-col items-center gap-2">
        <Text className="text-3xl font-bold text-secondary">
          Esqueceu sua senha?
        </Text>
        <Text className="text-base leading-relaxed text-zinc-600">
          Para poderes ter novamento o acesso a sua conta Unitel Money, terás
          que introduzir o seu número de telefone conectado a sua conta e de
          seguida enviaremos uma SMS para o seu cartão SIM.
        </Text>
        <View className="mb-6 w-full">
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^(\+244)?[0-9]{9}$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Digite seu número"
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
            <Text className="mt-4 text-sm text-red-500">
              Campo obrigatório.
            </Text>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Digite seu código secreto"
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
            <Text className="mt-4 text-sm text-red-500">
              Campo obrigatório.
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className=" flex w-full cursor-pointer flex-row items-center justify-center gap-3 rounded-md bg-secondary p-4"
        >
          <Text className="text-white">Próximo</Text>
          <Image
            source={require('../assets/angle-right.png')}
            alt="angle-right"
            className="h-6 w-6"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className=" flex w-full cursor-pointer flex-row items-center justify-center"
        >
          <Text className="text-secondary">
            Ainda não tenho uma conta,{' '}
            <Text className="font-semibold text-main">criar conta</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
