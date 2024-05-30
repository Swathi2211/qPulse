import React from 'react';
import Login from './components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinCode from './components/joinCode';
import Anim from './components/anim';
import Vid from './components/video';
import Summa from './components/summa';
import SendMsg from './components/sendMsg';
import SignUp from './components/signup';
import InsertDataScreen from './components/summa';
import NewFeature from './components/newFeature';
import Video from 'react-native-video';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component={JoinCode} options={{ headerShown: false }}/>
        <Stack.Screen name='signup' component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name='Video' component={Vid} options={{ headerShown: false }}/>
        {/* <Stack.Screen name='Video' component={Summa} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
