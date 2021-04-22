import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { string } from 'prop-types';
import { SliderBox } from 'react-native-image-slider-box';
import CircleActive from '../components/CircleActive';
import { FontAwesome } from '@expo/vector-icons';

import BackButton from '../components/BackButton'


export default function ActiveHistory(props: any) {
  const [sound, setSound] = useState();
  const { navigation } = props;
  
  useEffect(() => {
        navigation.setOptions({
            headerLeft:() => <BackButton/>,
        });
    }, []);

  return (
    <View style={styles.container}>
      <View style={styles.NextPoser}>
        <View style={styles.circleStyle}>
          <CircleActive name="circle" colorName="#d0d0d0" />
        </View>
        <View style={styles.lockIcon}>
            <FontAwesome name="lock" size={hp('3.2%')} color="#d0d0d0" />
        </View>
        <Text style={styles.NextPoserText}>
          NEXT POSER
        </Text>
      </View>
      {/* トレーニング表示のかたまり */}
      <View>
        <View style={styles.ActiveHistoryIndex}>
          <View style={styles.circleStyle}>
            <CircleActive name="circle" colorName="#b9c42f"/>
          </View>
          <Text style={styles.ActiveHistoryIndexTxt}>
            基礎バランス1
          </Text>
          <Text style={styles.ActiveHistoryIndexTime}>
            2min
          </Text>
          <Text style={styles.ActiveHistoryIndexGood}>
            ×256
          </Text>
        </View>
        <View style={styles.ActiveHistoryBody}>
          <View style={styles.ActiveHistoryBodyBar}></View>
          <View style={styles.ActiveHistoryBodyImgBox}>
            <Image
              style={styles.ActiveHistoryBodyOutImg}
              source={require('../../assets/Training/1/poser1.jpg')}
            />
            <Text style={styles.ActiveHistoryBodyTxt}>実行中のトレーニング</Text>
          </View>
          <View style={styles.ActiveHistoryBodyShare}>
            <Image
              style={styles.ActiveHistoryBodyShareImg}
              source={require('../../assets/Training/1/poser1.jpg')}
            />
            <Image
              style={styles.ActiveHistoryBodyShareImg}
              source={require('../../assets/Training/1/poser2.jpg')}
            />
          </View>
        </View>
      </View>
      {/* トレーニング表示のかたまり */}
      <View>
        <View style={styles.ActiveHistoryIndex}>
          <View style={styles.circleStyle}>
            <CircleActive name="circle" colorName="#4db56a"/>
          </View>
          <Text style={styles.ActiveHistoryIndexTxt}>
            基礎バランス2
          </Text>
          <Text style={styles.ActiveHistoryIndexTime}>
            2min
          </Text>
          <Text style={styles.ActiveHistoryIndexGood}>
            ×256
          </Text>
        </View>
        <View style={styles.ActiveHistoryBody}>
          <View style={styles.ActiveHistoryBodyBarAfter}></View>
          <View style={styles.ActiveHistoryBodyImgBox}>
          <Image
            style={styles.ActiveHistoryBodyOutImg}
            source={require('../../assets/Training/1/poser1.jpg')}
          />
          <Text style={styles.ActiveHistoryBodyTxt}>クリア後のトレーニング</Text>
          </View>
          <View style={styles.ActiveHistoryBodyCam}>
            <View>
              <Image
                style={styles.ActiveHistoryBodyCamImg}
                source={require('../../assets/Training/1/poser1.jpg')}
              />
              <Image
                style={styles.ActiveHistoryBodyCamImg}
                source={require('../../assets/Training/1/poser2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ActiveHistoryBodyCamImg}
                source={require('../../assets/Training/1/poser3.jpg')}
              />
              <Image
                style={styles.ActiveHistoryBodyCamImg}
                source={require('../../assets/Training/1/poser4.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
{/*       <View>
        <View style={styles.ActiveHistoryIndex}>
          <View style={styles.circleStyle}>
            <CircleActive name="circle" colorName="#4db56a"/>
          </View>
        </View>
        <View style={styles.ActiveHistoryBody}>
        </View>
      </View> */}
    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NextPoser: {
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    height: hp('6%'),
    width:wp('90%'),
    marginTop: hp('3%'),
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    borderTopEndRadius:10,
    borderTopStartRadius: 70,
    borderBottomStartRadius: 70,
    borderBottomEndRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection:'row',
  },
  circleStyle: {
    marginTop:hp('1.5%'),
    marginLeft: wp('2%'),
  },
  lockIcon: {
    marginTop:hp('1.4%'),
    marginLeft: wp('5.5%'),
  },
  NextPoserText: {
    marginTop:hp('1.6%'),
    marginLeft: wp('2.4%'),
    fontSize: hp('1.8%'),
    color:"#d0d0d0",
  },
  ActiveHistoryIndex: {
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    height: hp('6%'),
    width:wp('90%'),
    marginTop: hp('1.5%'),
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    borderTopEndRadius:10,
    borderTopStartRadius: 70,
    borderBottomStartRadius: 70,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection:'row',
  },
  ActiveHistoryBody: {
    width: wp('79.946%'),
    height: hp('18%'),
    backgroundColor: '#FFFFFF',
    marginTop:-hp('0.2%'),
    marginLeft: wp('15%'),
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    position: 'relative',
    flexDirection:'row',
  },
  ActiveHistoryIndexTxt: {
    marginTop:hp('1.9%'),
    marginLeft: wp('5.5%'),
    fontSize: hp('1.8%'),
    color:"#000000",
  },
  ActiveHistoryIndexTime: {
    marginTop:hp('1.9%'),
    marginLeft: wp('5.5%'),
    fontSize: hp('1.8%'),
    color:"#000000",
  },
  ActiveHistoryIndexGood: {
    flex: 1,
    textAlign: 'right',
    marginTop:hp('1.6%'),
    marginRight:hp('1%'),
    fontSize: hp('1.9%'),
    color:"#000000",
  },
  ActiveHistoryBodyBar: {
    width: wp('1.5%'),
    height: hp('17%'),
    backgroundColor: "#b9c42f",
    marginTop: hp('0.2%'),
    borderTopEndRadius: 3,
    borderTopStartRadius: 3,
    borderBottomStartRadius: 3,
    borderBottomEndRadius: 3,
    opacity:0.6,
    marginLeft: wp('1.5%'),
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection:'row',
  },
  ActiveHistoryBodyImgBox: {
    
  },
  ActiveHistoryBodyOutImg: {
    width: wp('32%'),
    height: hp('15.3%'),
    resizeMode: 'contain',
  },
  ActiveHistoryBodyTxt: {
    marginLeft: hp('0.4%'),
    fontSize: hp('1%')
  },
    ActiveHistoryBodyBarAfter: {
    width: wp('1.5%'),
    height: hp('17%'),
    backgroundColor: "#4db56a",
    marginTop: hp('0.2%'),
    borderTopEndRadius: 3,
    borderTopStartRadius: 3,
    borderBottomStartRadius: 3,
    borderBottomEndRadius: 3,
    opacity:0.6,
    marginLeft: wp('1.5%'),
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection:'row',
  },
  ActiveHistoryBodyShare: {
    width: wp('40%'),
    height: hp('100%'),
    resizeMode: 'contain',
    flexDirection:'row',
  },
  ActiveHistoryBodyShareImg:{
    width: wp('10%'),
    height: wp('35.5%'),
    // borderWidth:0.5,
  },
  ActiveHistoryBodyCam: {
       width: wp('40%'),
    height: hp('100%'),
    resizeMode: 'contain',
    flexDirection:'row', 
  },
  ActiveHistoryBodyCamImg: {
    width: wp('10%'),
    height: wp('17,7%'),
  },
});
