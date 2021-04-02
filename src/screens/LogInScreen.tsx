import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Button,CheckBox}from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import firebase from 'firebase';

const { width, height, scale } = Dimensions.get('window');

export default function LoginInScreen(props: { navigation: any; }) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [passward, setPassward] = useState('');
  const [checkbox, setCheckBox] =useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        });
      }
    });
    return unsubscribe;
  }, []);

  function handlePress() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, passward)
      .then((useCredential) => {
        const { user } = useCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        });
      })
      .catch((error) => {
        Alert.alert(error.code);
      });
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/img_logInBack.png')}
        style={{ width: wp('101%'), height: hp('35%') }}
      />
      <View style={styles.inner}>
        <View style={styles.ID}>
          <Image
            style={styles.LogInIcon}
            source={require('../../assets/icon/icon_logInID.png')}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email Address"
            textContentType="emailAddress"
          />
        </View>
        <View style={styles.ID}>
          <Image
            style={styles.LogInIcon}
            source={require('../../assets/icon/icon_logInPW.png')}
          />
            <TextInput
              style={styles.input}
              value={passward}
              onChangeText={(text) => {
                setPassward(text);
              }}
              autoCapitalize="none"
              placeholder="Passward"
              secureTextEntry
              textContentType="password"
            />
        </View>
        <View style={styles.submitBox}>
          <TouchableOpacity onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'StartScreen' }],
                });
              }}>
            <Image
              style={styles.submit}
              source={require('../../assets/btn/btn_logIn.png')}
            />
          </TouchableOpacity>
        </View>
        <CheckBox
              center
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              title='ログイン情報を記憶する'
            />
        <View style={styles.footer}>
          <Text style={styles.footerText}></Text>
          <TouchableOpacity>
            <Button
              raised
              large
              backgroundColor="#8ac34a"
              title="アカウントを作成する"
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'SingUp' }],
                });
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  input: {
    fontSize: 16,
    height: hp('5%'),
    flex: 1,
    borderBottomColor: '#8FC31F',
    borderColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: hp('2%'),
    marginLeft: wp('3%'),
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    borderColor: '#8FC31F',
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    margin:wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogInIcon: {
    width: wp('13%'),
    resizeMode: 'contain',
    height: hp('6%'),
    padding: wp('3%'),
  },
  ID: {
    flexDirection: 'row',
  },
  submit: {
    width: wp('87%'),
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'contain',
    marginTop: 0 - hp('2%'),
    marginBottom: -hp('4%'),
  },
  submitBox: {
    paddingBottom: hp('2%'),
  },
});
