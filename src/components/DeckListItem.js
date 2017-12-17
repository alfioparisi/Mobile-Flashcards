import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
  When the list item is clicked navigate to the View representing this deck.
  @param {object} : navigation object passed by `StackNavigator`
  @param {string} : name of the deck
*/
const openDeck = (navigation, deck) => {
  return navigation.navigate('Deck', {
    entryId: deck,
    deck
  });
};

/**
  Render the single list item of the decks list.
  @param {string} : name of the deck corresponding to this list item
  @param {number} : number of cards of the deck
  @param {object} : navigation object passed by `StackNavigator`
*/
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
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    marginTop: 10
  },
  itemText: {
    textAlign: 'center',
    color: '#f71308'
  }
});

export default DeckListItem;
