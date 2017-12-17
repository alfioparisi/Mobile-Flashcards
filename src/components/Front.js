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
        <MaterialIcons name='cancel' size={55} color='#c6c0bf' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  body: {
    flex: 1
  },
  questionContainer: {
    borderStyle: 'solid',
    borderBottomColor: '#c6c0bf',
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingLeft: 5,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    fontSize: 20
  },
  showAnswer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 12
  },
  btnText: {
    fontSize: 17,
    color: '#f65f57'
  },
  undo: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    zIndex: 999
  }
});

export default connect()(Front);
