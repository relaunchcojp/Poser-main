import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import firebase from 'firebase';

import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import LogInScreen from './src/screens/LogInScreen';
import SingUpScreen from './src/screens/SingUpScreen';
import StartScreen from './src/screens/StartScreen';
import TrainingScreen from './src/screens/TrainingScreen';
import ChatScreen from './src/screens/ChatScreen';
import UserStatusCreate from './src/screens/UserStatusCreate';

// import {firebaseConfig} from './env';

const firebaseConfig = {
   apiKey: "AIzaSyDr1mSS0bwstFpWoYzwmppXlidWe2n7JeU",
   authDomain: "poserappdev.firebaseapp.com",
   projectId: "poserappdev",
   storageBucket: "poserappdev.appspot.com",
   messagingSenderId: "99504722425",
   appId: "1:99504722425:web:4023b6116f44fac6532d28"
};

require('firebase/firestore');

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#eff4ef' },
          headerTitleStyle: { color: '#000000' },
          headerTitle: 'Poser',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUpScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="TrainingScreen" component={TrainingScreen} />
        <Stack.Screen name="UserStatusCreate" component={UserStatusCreate} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
