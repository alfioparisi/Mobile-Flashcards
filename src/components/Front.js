import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { resetScore } from '../actions/score';
import { connect } from 'react-redux';

const stopQuiz = (rootNavigation, dispatch) => {
  dispatch(resetScore());
  return rootNavigation.goBack();
};

const Front = ({ navigation, screenProps, dispatch }) => {
  const { questions, rootNavigation } = screenProps;
  const current = navigation.state.params ? navigation.state.params.current : 0;
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{questions[current].question}</Text>
        </View>
        <TouchableOpacity
          style={styles.showAnswer}
          onPress={() => navigation.navigate('Back', {current})}
        >
          <Text style={styles.btnText}>Show answer</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.undo}
        onPress={() => stopQuiz(rootNavigation, dispatch)}
      >
        <MaterialIcons name='cancel' size={50} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flex: 1,
    justifyContent: 'center'
  },
  body: {
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 3,
    flex: 1
  },
  questionContainer: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    fontSize: 20
  },
  showAnswer: {
    flex: 1,
    alignItems: 'center'
  },
  btnText: {},
  undo: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    zIndex: 999
  }
});

export default connect()(Front);
