import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MainHeader from './MainHeader';
import DeckListItem from './DeckListItem';
import { Feather } from '@expo/vector-icons';

const data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

// Format the data because FlatList wants an array of objects with a 'key' property.
const listData = Object.keys(data).map(item => ({key: item}));

const DeckList = ({ navigation }) => (
  <View style={styles.container}>
    <MainHeader />
    <FlatList
      contentContainerStyle={styles.deckList}
      data={listData}
      renderItem={({ item }) => (
        <DeckListItem
          deck={item.key}
          cardsNumber={data[item.key].questions.length}
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
