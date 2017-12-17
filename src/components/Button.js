import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Button = ({ onPress, text }) => (
  <TouchableOpacity
    style={styles.btn}
    onPress={onPress}
  >
    <Text style={styles.btnText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    borderStyle: 'solid',
    borderColor: '#c6c0bf',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#f83926',
    width: Dimensions.get('window').width / 1.7,
    height: Dimensions.get('window').height / 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  }
});

export default Button;
