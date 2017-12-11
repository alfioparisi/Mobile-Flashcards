import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './src/components/DeckList';
import Deck from './src/components/Deck';
import CreateDeck from './src/components/CreateDeck';
import AddQuestion from './src/components/AddQuestion';
import Quiz from './src/components/Quiz';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import store from './src/store';

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
      title: 'Quiz'
    }
  }
});

export default class App extends React.Component {
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
