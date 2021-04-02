import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";

import firebase from 'firebase';
import { AntDesign } from '@expo/vector-icons';

import LogInScreen from './src/screens/LogInScreen';
import SingUpScreen from './src/screens/SingUpScreen';
import StartScreen from './src/screens/StartScreen';
import TrainingScreen from './src/screens/TrainingScreen';
import { ChatScreen } from './src/screens/ChatScreen';
import UserStatusCreate from './src/screens/UserStatusCreate';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from './src/components/Button';
import logoutButton from './src/components/LogOutButton';

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

function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        //ヘッダータイトルのスタイル
        headerStyle: { backgroundColor: '#eff4ef'},
        headerTitleStyle: { color: '#000000' ,fontSize:20,marginBottom:hp('2%')},
        headerTitle: '',
        //戻るボタンのスタイル
        headerBackTitleVisible: false,
        //ヘッダーの高さ
        headerStatusBarHeight: hp('10%'),
        //遷移時のアニメーション
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{
          headerShown: false,
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
      <Stack.Screen
        name="TrainingScreen"
        component={TrainingScreen}
        options={{
          headerTitle:'ポージング',
        }}
      />
      <Stack.Screen name="UserStatusCreate" component={UserStatusCreate} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: 'メンターチャットルーム',
        }}
      />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="logout" component={logoutButton} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
