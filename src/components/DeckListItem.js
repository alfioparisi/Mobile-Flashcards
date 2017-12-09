import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DeckListItem = ({ deck, cardsNumber }) => (
  <TouchableOpacity
    style={styles.listItem}
    onPress={() => alert(`Pressed Deck ${deck}.`)}
  >
    <Text style={styles.itemText}>{deck}</Text>
    <Text style={styles.itemText}>{cardsNumber} cards</Text>
  </TouchableOpacity>
);

// TODO: make list items take all available space. => remove justifyContent
const styles = StyleSheet.create({
  listItem: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  itemText: {
    flex: 1
  }
});

export default DeckListItem;
