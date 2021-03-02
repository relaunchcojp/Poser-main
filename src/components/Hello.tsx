import React from 'react';
import { View, Text, StyleSheet, Shape } from 'react-native';
import { string, bool, shape } from 'prop-types';
function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

Hello.propTypes = {
  children: String.isReqired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: '#111111',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
