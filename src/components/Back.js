import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const Back = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>1 of x</Text>
    </View>
    <View style={styles.body}>
      <View style={styles.answerContainer}>
        <Text style={styles.answer}>Answer.</Text>
      </View>
      <View style={styles.guess}>
        <Text>Switch on if correct</Text>
        <Switch
          onValueChange={() => {}}
        />
      </View>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => alert('Go to next question.')}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    alignItems: 'flex-end',
    paddingRight: 12,
    marginTop: 10
  },
  headerText: {
    fontSize: 16
  },
  body: {
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 3,
    flex: 1
  },
  answerContainer: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  answer: {
    fontSize: 20
  },
  guess: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 3,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  nextBtn: {
    flex: 1,
    alignItems: 'center'
  },
});

export default Back;
