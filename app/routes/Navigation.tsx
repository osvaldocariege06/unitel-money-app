import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Splash from '../screens/Splash'
import Login from '../screens/Login'
import ForgotPassword from '../screens/ForgotPassword'

const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        ></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
