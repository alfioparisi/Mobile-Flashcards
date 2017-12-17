import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Button from './Button';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0)
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck
  })

  startQuiz(navigation, cardsNumber, deck) {
    if (cardsNumber) return navigation.navigate('Quiz', {deck});
    return alert('This deck is empty.');
  }

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, {toValue: 1, duration: 1000}).start();
  }

  render() {
    const { opacity } = this.state;
    const { navigation, cardsNumber, deck } = this.props;
    return (
      <Animated.View style={[styles.container, {opacity}]}>
        <View style={styles.subHeader}>
          <Text style={styles.headerText}>This deck contains {cardsNumber} cards</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.btnContainer}>
            <Button
              onPress={() => this.startQuiz(navigation, cardsNumber, deck)}
              text='Start quiz'
            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              onPress={() => navigation.navigate('AddQuestion', {deck})}
              text='Add a card'
            />
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subHeader: {
    borderStyle: 'solid',
    borderBottomColor: '#f65f57',
    borderBottomWidth: 3,
    backgroundColor: '#f71308',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 12,
    height: 50,
  },
  headerText: {
    color: '#ebeaea'
  },
  body: {
    flex: 1
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebeaea',
    borderStyle: 'solid',
    borderBottomColor: '#f65f57',
    borderBottomWidth: 1
  }
});

const mapStateToProps = (state, ownProps) => ({
  deck: ownProps.navigation.state.params.deck,
  cardsNumber: state.decks[ownProps.navigation.state.params.deck].questions.length
});

export default connect(mapStateToProps)(Deck);
