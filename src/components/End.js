import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { resetScore } from '../actions/score';
import { connect } from 'react-redux';

const restart = (navigation, dispatch) => {
  dispatch(resetScore());
  return navigation.navigate('Front');
};

const goBack = (dispatch, { rootNavigation }) => {
  dispatch(resetScore());
  return rootNavigation.goBack();
}

const End = ({ navigation, score, dispatch, screenProps }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Finish</Text>
    </View>
    <View style={styles.body}>
      <View style={styles.percContainer}>
        <Text>{score}%</Text>
        <ProgressBar progess={0.4} color='black' animated={false} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => restart(navigation, dispatch)}
        >
          <Text>Restart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => goBack(dispatch, screenProps)}
        >
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flex: 1
  },
  header: {
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 3,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    padding: 10
  },
  body: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 3,
    flex: 1
  },
  percContainer: {
    borderStyle: 'solid',
    borderColor: 'orange',
    borderWidth: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btnContainer: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 3,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = (state, ownProps) => ({
  score: Math.round(state.score / ownProps.screenProps.questions.length * 100)
});

export default connect(mapStateToProps)(End);
