import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import { resetScore } from '../actions/score';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers';

/**
  Final view of the quiz showing the score, a button to restart the quiz and one
  to go back to the deck view.
  @param {number} : score in %
*/
class End extends Component {
  componentDidMount() {
    clearLocalNotification()
    .then(setLocalNotification);
  }

  /**
    Reset the score and restart the quiz.
  */
  restart = (navigation, dispatch) => {
    dispatch(resetScore());
    return navigation.navigate('Front');
  }

  /**
    Reset the score and go back to the deck view using the main navigation.
  */
  goBack = (dispatch, { rootNavigation }) => {
    dispatch(resetScore());
    return rootNavigation.goBack();
  }

  render() {
    const { navigation, score, dispatch, screenProps } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Finish</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.percContainer}>
            <Text>Congratulations.</Text>
            <Text>You completed</Text>
            <Text style={styles.percText}>{score}%</Text>
            <Text>of the questions</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button
              onPress={() => this.restart(navigation, dispatch)}
              text='Restart'
            />
            <Button
              onPress={() => this.goBack(dispatch, screenProps)}
              text='Go back'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#f65f57',
    borderBottomWidth: 1
  },
  headerText: {
    fontSize: 20,
    padding: 10
  },
  body: {
    flex: 1
  },
  percContainer: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  percText: {
    color: '#f83926'
  },
  btnContainer: {
    flex: 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ebeaea'
  }
});

const mapStateToProps = (state, ownProps) => ({
  score: Math.round(state.score / ownProps.screenProps.questions.length * 100)
});

export default connect(mapStateToProps)(End);
