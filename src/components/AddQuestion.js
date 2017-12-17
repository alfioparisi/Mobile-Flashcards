import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import Button from './Button';
import { NavigationActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { addQuestion } from '../actions/decks';
import { connect } from 'react-redux';

/**
  Render the form to add a new question to a deck.
*/
class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
  }

  /**
    Add the question to Redux and AsyncStorage, then navigate back to the deck view.
  */
  addQuestion = () => {
    const { question, answer } = this.state;
    const { dispatch, navigation } = this.props;
    const deck = navigation.state.params.deck;
    // If either the question or the answer is not provided, notify the user.
    if (!question || !answer) return alert('You need to provide both question and answer.');
    // Update Redux.
    dispatch(addQuestion(deck, question, answer));

    // Update AsyncStorage.
    AsyncStorage.getItem('@mobileFlashCards')
    .then(jsonState => JSON.parse(jsonState))
    .then(state => {
      state[deck].questions = [
        ...state[deck].questions,
        {
          question,
          answer
        }
      ]
      AsyncStorage.setItem('@mobileFlashCards', JSON.stringify(state));
    })
    .catch(err => console.error(err));

    // Navigate to `Deck`.
    navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.body}>
          <View style={styles.label}>
            <Text>Question</Text>
            <TextInput
              style={styles.textInput}
              value={question}
              onChangeText={text => this.setState({question: text})}
              placeholder='Mh?'
              placeholderTextColor='#f65f57'
            />
          </View>
          <View style={styles.label}>
            <Text>Answer</Text>
            <TextInput
              style={styles.textInput}
              value={answer}
              onChangeText={text => this.setState({answer: text})}
              placeholder='Ah!'
              placeholderTextColor='#f65f57'
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => this.addQuestion()}
            text='Add'
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeaea'
  },
  body: {
    flex: 2
  },
  label: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15
  },
  textInput: {
    fontSize: 16,
    padding: 12
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

export default connect()(AddQuestion);
