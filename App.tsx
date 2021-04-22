import React, { Component } from 'react';
import { useWindowDimensions } from 'react-native';
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

import LogInScreen from './src/screens/LogInScreen';
import SingUpScreen from './src/screens/SingUpScreen';
import StartScreen from './src/screens/StartScreen';
import TrainingScreen from './src/screens/TrainingScreen';
import { ChatScreen } from './src/screens/ChatScreen';
import UserStatusCreate from './src/screens/UserStatusCreate';
import ActiveHistory from './src/screens/ActiveHistory';

import TrainingScreenStand1 from './src/screens/TrainingScreenStand1';
import TrainingScreenStand2 from './src/screens/TrainingScreenStand2';
import TrainingScreenStand4 from './src/screens/TrainingScreenStand4';
import TrainingScreenStand5 from './src/screens/TrainingScreenStand5';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
      <Stack.Screen
        name="ActiveHistory"
        component={ActiveHistory}
        options={{
          headerTitle:'活動履歴',
        }}
      />
      <Stack.Screen
        name="TrainingScreenStand1"
        component={TrainingScreenStand1}
        options={{
          headerTitle:'立位ヨコ_ポーズ１',
        }}
      />
      <Stack.Screen
        name="TrainingScreenStand2"
        component={TrainingScreenStand2}
        options={{
          headerTitle:'立位ヨコ_ポーズ2',
        }}
      />
      <Stack.Screen
        name="TrainingScreenStand4"
        component={TrainingScreenStand4}
        options={{
          headerTitle:'立位ヨコ_ポーズ4',
        }}
      />
      <Stack.Screen
        name="TrainingScreenStand5"
        component={TrainingScreenStand5}
        options={{
          headerTitle:'立位ヨコ_ポーズ5',
        }}
      />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();
export default function App() {

  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="logout"
          component={LogInScreen}
          options={{ drawerLabel: 'logout' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
