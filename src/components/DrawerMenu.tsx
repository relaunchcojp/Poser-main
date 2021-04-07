import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import { useNavigation ,NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LogOutButton from './LogOutButton'

export default function DrawerMenu() {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();

  function handlePress() {
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="LogOutButton" component={LogOutButton} />
      </Drawer.Navigator>
    </NavigationContainer>
/*     firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      }); */
    
  }

  return (
    <TouchableOpacity onPress={navigation.openDrawer} style={styles.container}>
      <Ionicons name="reorder-two-outline" size={40} color="#f8b500" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    paddingHorizontal: 12,
    paddingBottom:hp('2%'),
  },
});
