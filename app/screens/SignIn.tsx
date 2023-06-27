import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

export default function SignIn({ navigation }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      codeBI: '',
      email: '',
      birthsday: '',
      others: '',
    },
  })

  type FormData = {
    name: string
    codeBI: string
    email: string
    birthsday: string
    others: string
  }

  const onSubmit = ({ name, codeBI, email, birthsday, others }: FormData) => {
    navigation.navigate('Home', { name, codeBI, email, birthsday, others })
    console.log({ name, codeBI, email, birthsday, others })
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
            alt="angle-right"
            className="h-6 w-6"
          />
          <Text className="text-secondary">Voltar</Text>
        </TouchableOpacity>
        <Text className="text-secondary">Toggle</Text>
      </View>
      <Text className="text-2xl font-bold text-secondary">Criar conta</Text>
      <Text className="mt-2 leading-relaxed text-zinc-800">
        Cria uma conta Unitel Money e faça pagamentos, transfêrencias e muito
        mais sem saires de casa.
      </Text>
      <View className="mb-6">
        {/* INPUT NAME */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite seu nome"
              className="mt-4 w-full rounded-md bg-white p-3"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="name"
        />

        {/* INPUT CODE BI */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite seu código do BI"
              className="mt-4 w-full rounded-md bg-white p-3"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="codeBI"
        />
        {/* INPUT EMAIL */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite seu email"
              className="mt-4 w-full rounded-md bg-white p-3"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="email"
        />
        {/* INPUT BIRTHSDAY */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite sua data de nascimento"
              className="mt-4 w-full rounded-md bg-white p-3"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="birthsday"
        />
        {/* INPUT OTHERS */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Outros"
              className="mt-4 w-full rounded-md bg-white p-3"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="others"
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="mt-8 flex flex-1 flex-row items-center justify-center gap-2 rounded-lg bg-secondary py-2 pl-5 text-white"
      >
        <Text className="text-white">Criar conta</Text>
        <Image
          source={require('../assets/angle-right.png')}
          alt="angle-right"
          className="h-6 w-6"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        Já tenho uma conta, fazer login
      </TouchableOpacity>
    </View>
  )
}
