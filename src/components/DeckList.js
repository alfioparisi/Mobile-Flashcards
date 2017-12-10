import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MainHeader from './MainHeader';
import DeckListItem from './DeckListItem';
import { Feather } from '@expo/vector-icons';

import store from '../store';

class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: []
    }
  }

  componentDidMount() {
    // Get the initial decks (eventually from AsyncStorage)
    const decks = store.getState().decks;
    // Format the data because FlatList wants an array of objects with a 'key' property.
    const listData = Object.keys(decks).map(item => ({key: item}));
    return this.setState({
      decks: listData
    })
  }

  render() {
    const { decks } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <MainHeader />
        <FlatList
          contentContainerStyle={styles.deckList}
          data={decks}
          renderItem={({ item }) => (
            <DeckListItem
              deck={item.key}
              cardsNumber={store.getState().decks[item.key].questions.length}
              navigation={navigation}
            />
          )}
        />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('CreateDeck')}
        >
          <Feather name='plus-circle' size={50} color='green' />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 3
  },
  deckList: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3
  },
  addBtn: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    zIndex: 999
  }
});

export default DeckList;
