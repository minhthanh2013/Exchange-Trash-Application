import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './src/screens'
import bottomTab from './src/components/bottombar'
import Point from './src/screens/Point';
import Amount from './src/screens/Amount';
import Details from './src/screens/Details'
import Intro from './src/components/Intro';
import Setting from './src/components/Setting1/Setting'
import ScanScreen from './src/screens/ScanScreen'
// Shopping Screen
import Shopping from './src/screens/Shopping'
import ShoppingDetails from './src/screens/ShoppingDetails'
import ShoppingCart from './src/screens/ShoppingCart'
import searchBar from './src/screens/searchBar'
import map from './src/screens/map'
import DestDetail from './src/screens/DestDetail'
//import Home from './src/components/Home'
const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="RegisterScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Amount" component={Amount} />
           <Stack.Screen name="Point" component={Point} /> 
          <Stack.Screen name="Home" component={bottomTab} />
          <Stack.Screen name="map" component={map} />
          <Stack.Screen name="DestDetail" component={DestDetail} />
          <Stack.Screen name="searchBar" component={searchBar} /> 
          <Stack.Screen name="ScanScreen" component={ScanScreen} />
          <Stack.Screen name="Profile" component={bottomTab} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Shopping" component={Shopping} />
          <Stack.Screen name="ShoppingDetails" component={ShoppingDetails} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />

          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
