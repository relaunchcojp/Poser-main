import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { string, shape, func } from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

const { width, height, scale } = Dimensions.get('window');

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <FontAwesome name={name} size={height * 0.09} color="#94AA44" />
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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0 - height * 0.062,
  },
  circleButtonlabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
