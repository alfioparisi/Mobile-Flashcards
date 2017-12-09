import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainHeader = () => (
  <View sytle={styles.mainHeader}>
    <Text style={styles.title}>Mobile FlashCards</Text>
  </View>
);

const styles = StyleSheet.create({
  mainHeader: {
    flex: 1
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default MainHeader;
