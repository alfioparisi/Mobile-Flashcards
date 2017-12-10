import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './src/components/DeckList';
import Deck from './src/components/Deck';
import CreateDeck from './src/components/CreateDeck';
import AddQuestion from './src/components/AddQuestion';
import Quiz from './src/components/Quiz';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

const CustomStatusBar = () => (
  <View style={styles.statusBar}>
    <StatusBar traslucent />
  </View>
);

const MainNavigator = StackNavigator({
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
      <View style={styles.container}>
        <CustomStatusBar />
        <MainNavigator />
      </View>
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
