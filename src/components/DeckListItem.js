import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const openDeck = (navigation, deck) => {
  return navigation.navigate('Deck', {
    entryId: deck,
    deck
  });
};

const DeckListItem = ({ deck, cardsNumber, navigation }) => (
  <TouchableOpacity
    style={styles.listItem}
    onPress={() => openDeck(navigation, deck)}
  >
    <Text style={styles.itemText}>{deck}</Text>
    <Text style={styles.itemText}>{cardsNumber} cards</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70
  },
  itemText: {
    flex: 1,
    textAlign: 'center'
  }
});

export default DeckListItem;
