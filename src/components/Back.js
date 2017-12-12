import React, { Component } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { increaseScore } from '../actions/score';
import { connect } from 'react-redux';

class Back extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: false
    };
  }

  goToNext = () => {
    const { correct } = this.state;
    const { navigation, dispatch } = this.props;
    const { current } = navigation.state.params;
    const { questions } = this.props.screenProps;
    // If the answer is correct, increment the score.
    if (correct) dispatch(increaseScore());

    if (current === questions.length - 1) return navigation.navigate('End');
    return navigation.navigate('Front', {current: current + 1});
  }

  render() {
    const { correct } = this.state;
    const { questions } = this.props.screenProps;
    const { current } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{current + 1} of {questions.length}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>{questions[current].answer}</Text>
          </View>
          <View style={styles.guess}>
            <Text>Switch on if correct</Text>
            <Switch
              value={correct}
              onValueChange={correct => this.setState({correct})}
            />
          </View>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => this.goToNext()}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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

const mapStateToProps = state => ({
  score: state.score
});

export default connect(mapStateToProps)(Back);
