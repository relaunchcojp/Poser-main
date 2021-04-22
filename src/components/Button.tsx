/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';

export default function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.ButtonContainer} onPress={onPress}>
      <Text style={styles.ButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.protoTypes = {
  label: string.isRequired,
  onPress: func,
};

Button.defalutProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: 'rgba(146, 195, 51, 0.9)',
    borderRadius: 50,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  ButtonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});
