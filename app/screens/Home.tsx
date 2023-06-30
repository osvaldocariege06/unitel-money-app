import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Image } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View className="relative min-h-full bg-primary">
      <StatusBar style="auto" />
      <View className="relative -top-4 mb-14 mt-4 flex h-[290px] w-full flex-row items-start justify-between rounded-b-[20px] bg-main px-8 py-10 pt-12">
        <Image
          source={require('../assets/Ellipse2.png')}
          alt="Unitel Money Logo"
          className="absolute left-[-60px] top-[-60px] h-[200px] w-[200px] rounded-full bg-red-300 object-cover object-center"
        />
        <Image
          source={require('../assets/Ellipse2.png')}
          alt="Unitel Money Logo"
          className="absolute bottom-[60px] right-[-30px] h-[132px] w-[132px] rounded-full bg-red-300 object-cover object-center"
        />
        <View className="flex w-full flex-row justify-between">
          <View className="mt-8 flex flex-row items-center justify-center gap-4">
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
            className="mt-4"
          />
        </View>
        <View className=" absolute bottom-[-60px] left-[5%] h-[225px] w-[370px]  rounded-[20px] bg-secondary/95 p-4">
          <View className="flex w-full flex-row items-center justify-between">
            <Text className="text-base font-bold text-main">Conta Pessoal</Text>
            <Image
              source={require('../assets/star.png')}
              alt="Unitel Money Logo"
            />
          </View>
          <View className="mt-8 flex w-full flex-row items-center">
            <Text className="text-5xl font-bold text-white">100.000</Text>
            <Text className="text-base font-bold text-white">,00 Kz</Text>
          </View>
          <View className="w-full flex-row justify-between gap-4">
            <Text className="text-lg font-bold text-main">****</Text>
            <Text className="text-lg font-bold text-main">****</Text>
            <Text className="text-lg font-bold text-main">****</Text>
            <Text className="text-lg font-bold text-main">0000</Text>
          </View>
          <Text className="mt-6 text-sm text-zinc-400">20-06-2023</Text>
        </View>
      </View>

      <View className="mt-8 flex w-full flex-col gap-1 px-8">
        <Text className="text-2xl font-bold text-secondary">
          Outros serviços
        </Text>
        <View className=" flex w-full flex-row flex-wrap justify-center gap-4">
          <View className="flex h-[80px] w-[80px] items-center justify-center gap-2 rounded-lg bg-white shadow-sm">
            <Image source={require('../assets/qrcode.png')} alt="QR Code" />
            <Text className="text-center font-semibold text-secondary">
              Ler Código QR
            </Text>
          </View>
          <View className="flex h-[80px] w-[80px] items-center justify-center gap-2 rounded-lg bg-white shadow-sm">
            <Image source={require('../assets/chromecast.png')} alt="QR Code" />
            <Text className="text-center font-semibold text-secondary">
              Receber
            </Text>
          </View>
          <View className="flex h-[80px] w-[80px] items-center justify-center gap-2 rounded-lg bg-white shadow-sm">
            <Image source={require('../assets/download.png')} alt="QR Code" />
            <Text className="text-center font-semibold text-secondary">
              Depósito
            </Text>
          </View>
          <View className="flex h-[80px] w-[80px] items-center justify-center gap-2 rounded-lg bg-white p-2 shadow-sm">
            <Image
              source={require('../assets/hand-holding-usd.png')}
              alt="QR Code"
            />
            <Text className="text-center font-semibold text-secondary">
              Levantamento
            </Text>
          </View>
          <View className="flex h-[80px] w-[80px] items-center justify-center gap-2 rounded-lg bg-white shadow-sm">
            <Image
              source={require('../assets/transgender-alt.png')}
              alt="QR Code"
            />
            <Text className="text-center font-semibold text-secondary">
              Transfêrencia
            </Text>
          </View>
          <View className="flex h-[80px] w-[80px] items-center justify-center gap-2 rounded-lg bg-white shadow-sm">
            <Image
              source={require('../assets/money-bill-wave.png')}
              alt="QR Code"
            />
            <Text className="text-center font-semibold text-secondary">
              Pagar
            </Text>
          </View>
        </View>
      </View>
      <View className="absolute bottom-0 flex h-[60px] w-full flex-row justify-between rounded-t-xl bg-secondary/30 p-3">
        <View className="flex flex-col items-center justify-center">
          <Image
            source={require('../assets/money-bill-wave.png')}
            alt="Payments"
          />
          <Text className="text-sm text-white">Pagamentos</Text>
        </View>
        <View className="ab flex flex-col items-center justify-center">
          <View className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-main p-3">
            <Image
              source={require('../assets/donate.png')}
              alt="Payments"
              className="h-[20px] w-[20px] "
            />
          </View>
          <Text className="text-sm text-main">Carteira</Text>
        </View>
        <View className="flex flex-col items-center justify-center shadow-md">
          <Image
            source={require('../assets/money-bill-wave.png')}
            alt="Payments"
            className=""
          />
          <Text className="text-sm text-white">Pagamentos</Text>
        </View>
      </View>
    </View>
  )
}
