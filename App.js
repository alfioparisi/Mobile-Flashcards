import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './src/components/DeckList';
import Deck from './src/components/Deck';
import AddQuestion from './src/components/AddQuestion';
import End from './src/components/End';
// import Quiz from './src/components/Quiz';
import { Constants } from 'expo';

const CustomStatusBar = () => (
  <View style={styles.statusBar}>
    <StatusBar traslucent />
  </View>
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomStatusBar />
        <End />
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
