import React from 'react';
import Front from './Front';
import Back from './Back';
import End from './End';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

const QuizNavigation = StackNavigator({
  Front: {
    screen: Front
  },
  Back: {
    screen: Back
  },
  End: {
    screen: End
  }
}, {
  navigationOptions: {
    header: null
  }
});

const Quiz = ({ questions }) => (
  <QuizNavigation screenProps={{questions}} />
);

const mapStateToProps = (state, ownProps) => ({
  questions: state.decks[ownProps.navigation.state.params.deck].questions
});

export default connect(mapStateToProps)(Quiz);
