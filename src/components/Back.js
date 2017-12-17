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
              thumbTintColor='#f71308'
              onTintColor='#f83926'
            />
          </View>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => this.goToNext()}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    alignItems: 'flex-end',
    paddingRight: 12,
    marginTop: 10,
    justifyContent: 'flex-end',
    borderStyle: 'solid',
    borderBottomColor: '#f71308',
    borderBottomWidth: 0.7
  },
  headerText: {
    fontSize: 16
  },
  body: {
    flex: 1
  },
  answerContainer: {
    borderStyle: 'solid',
    borderBottomColor: '#c6c0bf',
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 5,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  answer: {
    fontSize: 20
  },
  guess: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  nextBtn: {
    flex: 1,
    alignItems: 'center',
    marginTop: 12
  },
  btnText: {
    fontSize: 17,
    color: '#f65f57'
  }
});

const mapStateToProps = state => ({
  score: state.score
});

export default connect(mapStateToProps)(Back);
