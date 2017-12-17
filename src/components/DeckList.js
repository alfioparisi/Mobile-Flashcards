import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import DeckListItem from './DeckListItem';
import { Ionicons } from '@expo/vector-icons';
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
        {decks && (
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
        )}
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('CreateDeck')}
        >
          <Ionicons name='md-add-circle' size={55} color='#f83926' />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deckList: {
    backgroundColor: '#ebeaea'
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
