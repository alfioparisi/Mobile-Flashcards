import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { resetScore } from '../actions/score';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers';

class End extends Component {
  componentDidMount() {
    clearLocalNotification()
    .then(setLocalNotification);
  }

  restart = (navigation, dispatch) => {
    dispatch(resetScore());
    return navigation.navigate('Front');
  }

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
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.restart(navigation, dispatch)}
            >
              <Text style={styles.btnText}>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.goBack(dispatch, screenProps)}
            >
              <Text style={styles.btnText}>Go back</Text>
            </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebeaea',
    borderStyle: 'solid',
    borderBottomColor: '#f65f57',
    borderBottomWidth: 1
  },
  btn: {
    borderStyle: 'solid',
    borderColor: '#c6c0bf',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#f83926',
    width: Dimensions.get('window').width / 1.7,
    height: Dimensions.get('window').height / 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  }
});

const mapStateToProps = (state, ownProps) => ({
  score: Math.round(state.score / ownProps.screenProps.questions.length * 100)
});

export default connect(mapStateToProps)(End);
