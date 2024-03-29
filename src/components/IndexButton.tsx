import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';

export default function IndexButton(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.ButtonContainer} onPress={onPress}>
      <Text style={styles.ButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

IndexButton.protoTypes = {
  label: string.isRequired,
  onPress: func,
};

IndexButton.defalutProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  ButtonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#111111',
  },
});
