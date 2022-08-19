import 'react-native-gesture-handler'; // As per the documentation this has to be at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StartScreen, Main, MuteScreen } from './src/Screens';
import { mainScreen, startScreen, muteScreen } from './src/Utils/Constants/ScreenNames';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={startScreen} component={StartScreen} />
        <Stack.Screen name={mainScreen} component={Main} />
        <Stack.Screen name={muteScreen} component={MuteScreen} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        {/* <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

