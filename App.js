import React from 'react';
import { StyleSheet, View, StatusBar, AsyncStorage } from 'react-native';
import DeckList from './src/components/DeckList';
import Deck from './src/components/Deck';
import CreateDeck from './src/components/CreateDeck';
import AddQuestion from './src/components/AddQuestion';
import Quiz from './src/components/Quiz';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import store from './src/store';
import { importInitialState } from './src/actions/decks';

const CustomStatusBar = () => (
  <View style={styles.statusBar}>
    <StatusBar traslucent />
  </View>
);

const MainNavigation = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: 'Home'
    }
  },
  Deck: {
    screen: Deck
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      title: 'Create a new Deck'
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      title: 'Add Question'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      header: null
    }
  }
});

export default class App extends React.Component {
  componentDidMount() {
    AsyncStorage.clear();
    const initialState = {
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
    AsyncStorage.getItem('@mobileFlashCards')
    .then(existingState => {
      if (existingState) return store.dispatch(importInitialState(JSON.parse(existingState)));
      AsyncStorage.setItem('@mobileFlashCards', JSON.stringify(initialState));
      return store.dispatch(importInitialState(initialState));
    })
    .catch(err => {
      console.error(err);
      return store.dispatch(importInitialState(initialState));
    });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CustomStatusBar />
          <MainNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'black',
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
