import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function LogOutButton() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'StartScreen' }],
    });
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <AntDesign name="left" size={40} color="#f8b500" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    flex:1,
    paddingHorizontal: 6,
    paddingBottom:hp('2%'),
  },
});
