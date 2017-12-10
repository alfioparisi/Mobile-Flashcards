import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MainHeader from './MainHeader';
import DeckListItem from './DeckListItem';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';

class DeckList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { decks, navigation } = this.props;
    const decksList = Object.keys(decks).map(item => ({key: item}));
    return (
      <View style={styles.container}>
        <MainHeader />
        <FlatList
          contentContainerStyle={styles.deckList}
          data={decksList}
          renderItem={({ item }) => (
            <DeckListItem
              deck={item.key}
              cardsNumber={decks[item.key].questions.length}
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

const mapStateToProps = state => ({
  decks: state.decks
});

export default connect(mapStateToProps)(DeckList);
