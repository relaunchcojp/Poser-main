/* eslint-disable global-require */
import React, { useState, useEffect, Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';

import DrawerMenu from '../components/DrawerMenu'
import CircleCreate from '../components/CircleCreate';
import BellButton from '../components/BellButton';
import Loading from '../components/Loading';

const { width, height, scale } = Dimensions.get('window');

export default function StartScreen(props: { navigation: any; }) {
  const { navigation } = props;
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
     headerRight: () => <DrawerMenu />,
    });
  }, []);

  return (
    <View style={styles.container}>
        <Loading isLoading={isLoading}/>
      <View>

      </View>
{/*       <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizonScroll}>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
        <Text style={styles.horizonText}>1</Text>
      </ScrollView> */}
      <View style={styles.ActiveCircle}>
        <BellButton name="bell" />
        <Image
          style={styles.ActiveCircleSize}
          source={require('../../assets/img/img_ActiveCircle.png')}
        />
        <View style={styles.CircleInner}>
        </View>
      </View>
      <View style={styles.userDataDisplay}>
        <Text style={styles.userName}>鈴木</Text>
        <Text style={styles.userID}>ID:000000</Text>
        <CircleCreate name="circle" />
      </View>
      <View style={styles.IndexButtonUnder}>
        <View>
          <View style={styles.IndexButton}>
            <View style={styles.innerButton}>
              <TouchableOpacity　onPress={() => { navigation.navigate('ChatScreen');}}>
                <Image
                  style={styles.ButtonSize}
                  source={require('../../assets/btn/btn_menterChat.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.innerButton}>
              <TouchableOpacity onPress={() => { navigation.navigate('ActiveHistory');}}>
                <Image
                  style={styles.ButtonSize}
                  source={require('../../assets/btn/btn_activeLog.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('TrainingScreen');}}>
            <View style={styles.IndexButtonBottom}>
              <Image
                style={styles.ButtonSize}
                source={require('../../assets/btn/btn_training.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.shareBottom}>
              <Image
                style={styles.shareButtonSize}
                source={require('../../assets/btn/btn_share.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF4EF',
  },
  IndexButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  IndexButtonUnder: {
    justifyContent: 'center',
  },
  IndexButtonBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '45deg' }],
    margin: hp('0.5%'),
  },
  ActiveCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('7%'),
  },
  innerButton: {
    transform: [{ rotate: '45deg' }],
    margin: wp('4%'),
  },
  userDataDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: hp('3%'),
    height: hp('6.5%'),
    position:'relative'
  },
  userName: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userID: {
    paddingLeft:wp('40%'),
    fontSize: hp('2%'),
    position: 'absolute',
    letterSpacing: -1,
    fontWeight: '100',
  },
  ButtonSize: {
    width: wp('39%'),
    resizeMode: 'contain',
    height: wp('39%'),
  },
  ActiveCircleSize: {
    width: hp('34%'),
    resizeMode: 'contain',
    height: hp('34%'),
  },
  shareBottom: {
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    right: hp('2%'),
    top: 0 - hp('2%'),
  },
  shareButtonSize: {
    width: hp('11%'),
    resizeMode: 'contain',
    height: hp('11%'),
  },
  CircleInner: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems:'center',
  },
  horizonScroll: {
    width: wp('200%'),
    height: hp('8%'),
    position:'absolute',
  },
  horizonText: {
    fontSize: hp('4%'),
    margin: hp('0.5%'),
    marginTop:-hp('1%'),
    padding:hp('0.5%')
  }
});

