/* eslint-disable react/require-default-props */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function CircleButton(props) {
  const { style, name, onPress ,colorName} = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <FontAwesome name={name} size={hp('3%')} color={colorName} />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultprops = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#FFFFFF',
    width: hp('3%'),
    height: hp('3%'),
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  circleButtonlabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
