import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

/**
  Render a question as item of the modal list.
  @param {string} : question
*/
const QuestionsListItem = ({ question }) => (
  <View
    style={styles.listItem}
  >
    <Text style={styles.itemText}>{question}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    minHeight: 50,
    marginTop: 10
  },
  itemText: {
    color: '#f71308',
    paddingLeft: 8,
    paddingRight: 8
  }
});

export default QuestionsListItem;
