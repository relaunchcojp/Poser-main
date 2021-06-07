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
  SliderBase,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { getDate, addDays, subDays, format, add} from 'date-fns';

import DrawerMenu from '../components/DrawerMenu'
import CircleCreate from '../components/CircleCreate';
import BellButton from '../components/BellButton';
import Loading from '../components/Loading';
import ProgressCircle from '../components/ProgressCircle';

import Svg, { Rect ,Circle, G ,Defs,Use} from 'react-native-svg';

const { width, height, scale } = Dimensions.get('window');
const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function StartScreen(props: { navigation: any; }) {
  const { navigation } = props;
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
     headerRight: () => <DrawerMenu />,
    });
  }, []);
  const currentIndex = 1;

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.scrollingWrapper}>
        <View style={styles.calldender}>
          <Svg width={wp('100%')} height={hp('10%')}>
            <Rect
              x={wp('13.9%')*2}
              height={hp('12%')}
              width={wp('20.85%')}
              fill="lightgreen"
              opacity="0.7"
            />
            <Rect
              x={wp('50%')}
              height={hp('12%')}
              width={wp('20%')}
              fill="gray"
              opacity="0.2"
            />
          </Svg>
        </View>

        <View style={styles.scrollinglist}> 
          <Text style={styles.callenderWeek}>{format(subDays(new Date(),3),'iii')}</Text>
          <Text style={styles.callenderDays}>{getDate(subDays(new Date(),3))}</Text>
        </View>
        <View style={styles.scrollinglist}> 
          <Text style={styles.callenderWeek}>{format(subDays(new Date(),2),'iii')}</Text>
          <Text style={styles.callenderDays}>{getDate(subDays(new Date(),2))}</Text>
        </View>
        <View style={styles.scrollinglist}> 
          <Text style={styles.callenderWeek}>{format(subDays(new Date(),1),'iii')}</Text>
          <Text style={styles.callenderDays}>{getDate(subDays(new Date(),1))}</Text>
        </View>
        <View style={styles.scrollinglistToday}>
          <Text style={styles.callenderWeek}>{format(new Date(),'iii')}</Text>
          <Text style={styles.callenderDaysToday}>{getDate(new Date())}</Text>
        </View>
        <View style={styles.scrollinglist}> 
          <Text style={styles.callenderWeek}>{format(addDays(new Date(),1),'iii')}</Text>
          <Text style={styles.callenderDays}>{getDate(addDays(new Date(),1))}</Text>
        </View>
        <View style={styles.scrollinglist}> 
          <Text style={styles.callenderWeek}>{format(addDays(new Date(),2),'iii')}</Text>
          <Text style={styles.callenderDays}>{getDate(addDays(new Date(),2))}</Text>
        </View>
        <View style={styles.scrollinglist}> 
          <Text style={styles.callenderWeek}>{format(addDays(new Date(),3),'iii')}</Text>
          <Text style={styles.callenderDays}>{getDate(addDays(new Date(),3))}</Text>
        </View>
      </View>
      <View style={styles.ActiveCircle}>
        <BellButton name="bell" />
         <Image
          style={styles.ActiveCircleSize}
          source={require('../../assets/img/img_ActiveCircle.png')}
        />
        <View style={styles.ActiveCircleProgress}>
          <ProgressCircle />
        </View>
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
    position: 'relative'
  },
  userName: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userID: {
    paddingLeft: wp('40%'),
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
    width: hp('33%'),
    resizeMode: 'contain',
    height: hp('33%'),
    marginTop: 5,
    marginLeft: -1,
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
    alignItems: 'center',
  },
  horizonScroll: {
    width: wp('200%'),
    height: hp('8%'),
    position: 'absolute',
  },
  horizonText: {
    fontSize: hp('4%'),
    margin: hp('0.5%'),
    marginTop: -hp('1%'),
    padding: hp('0.5%')
  },
  calldender: {
    height: hp('9%'),
    width: wp('100%'),
    resizeMode: 'contain',
    position: 'absolute',
    marginTop: -hp('1%'),
  },
  ActiveCircleProgress: {
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
    resizeMode: 'contain',
    position: 'absolute',
  },
  scrollingWrapper: {
    flexDirection: 'row',
    alignContent:'center',
  },
  scrollinglist: {
    flexDirection: 'column',
    height:hp('9%'),
    width:wp('13.9%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollinglistToday: {
    flexDirection: 'column',
    height:hp('9%'),
    width:wp('13.9%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b9c42f',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius:12,
  },
  callenderWeek: {
    fontSize:15,
  },
  callenderDays: {
    fontSize: 32,
    marginTop:7,
  },
  callenderDaysToday: {
    fontSize: 32,
    marginTop: 7,
    width: wp('9%'),
    textAlign: 'center',
    color: '#b9c42f',
    fontWeight: '500',
    borderRadius: wp('4.5%'),
    overflow:'hidden',
    backgroundColor:'#ffffff'
  }
}); 