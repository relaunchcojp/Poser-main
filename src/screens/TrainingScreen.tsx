import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { string } from 'prop-types';
import { SliderBox } from 'react-native-image-slider-box';
import LottieView from 'lottie-react-native';
import { Audio } from 'expo-av';

const images = [
  require('../../assets/Training/1/poser1.jpg'),
  require('../../assets/Training/1/poser2.jpg'),
  require('../../assets/Training/1/poser3.jpg'),
  require('../../assets/Training/1/poser4.jpg'),
];
export default function TrainingScreen(props:any) {
  const [sound, setSound] = useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
    require('../../assets/Voice/TrainingDemo.m4a'),
    );
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync(); }
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.trainingMenu}>
        <View style={styles.trainingInfo}>
          <Text style={styles.trainingMessage}>
            目標点に集中して足をゆっくり伸ばします
          </Text>
        </View>
        <View style={styles.trainingImg}>
          <View style={styles.trainingImgSize}>
            <SliderBox images={images}
              sliderBoxHeight={hp('57%')}
              parentWidth={wp('80%')}
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'cover'}
            />
          </View>
          <LottieView
            source={require('../../assets/Lottie/swipe-left-arrows.json')}
            autoPlay loop
            style={{
              width: 150,
              height: 150,
              position:'absolute',
              left:wp('-3%'),
            }}
          />
          <LottieView
            source={require('../../assets/Lottie/swipe-right-arrows.json')}
            autoPlay loop
            style={{
              width: 150,
              height: 150,
              position:'absolute',
              right:wp('-3%'),
            }}
          />
{/*           <Text style={styles.allowleft}><FontAwesome name=“angle-double-left” size={50} color=‘rgba(0,0,0,0.5)’ /></Text>
          <Text style={styles.allowright}><FontAwesome name=“angle-double-right” size={50} color=‘rgba(0,0,0,0.5)’ /></Text> */}
        </View>
      </View>
      <View style={styles.traininProgress}>
        <Button
          containerStyle={{
            margin:3,
          }}
          raised
          title=　'トレーニングをスタート'
          onPress={playSound}
          style={styles.trainingButton}
        />
{/*         <View style={styles.trainingProgressGage}>
          <FontAwesome name=“circle” size={30} color=“#FFE100”></FontAwesome>
          <FontAwesome name=“circle” size={30} color=“#FFE100”></FontAwesome>
          <FontAwesome name=“circle” size={30} color=“#FFE100”></FontAwesome>
          <FontAwesome name=“circle” size={30} color=“#FFE100”></FontAwesome>
          <FontAwesome name=“circle” size={30} color=“#FFE100”></FontAwesome>
          <FontAwesome name=“circle” size={30} color=“#FFE100”></FontAwesome>
        </View> */}
      </View>
    </View>
  );
}

TrainingScreen.protoTypes={
  fontSize:string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trainingMenu: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  trainingInfo: {
    backgroundColor: 'rgba(61, 61, 61, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width:'100%',
    margin: 0,
    flex: 1,
    borderTopEndRadius:20,
    borderTopStartRadius:20,
  },
  trainingMessage: {
    fontSize: 18,
  },
  trainingImg: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: -30,
  },
  trainingImgSize: {
    resizeMode: 'contain',
    height: '85%',
    margin: 0,
    
  },
  traininProgress: {
    flexDirection: 'row',
    margin: 40,
    marginTop: -5,
    justifyContent: 'center',
    alignContent:'center',
  },
  trainingProgressGage: {
    flexDirection: 'row',
  },
  allowright:{
    position:'absolute',
    right:wp('2%'),
    bottom:hp('30%'),
  },
  allowleft:{
    position:'absolute',
    left:wp('2%'),
    bottom:hp('30%'),
  },
  trainingButton: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
