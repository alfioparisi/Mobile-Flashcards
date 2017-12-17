import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { addQuestion } from '../actions/decks';
import { connect } from 'react-redux';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
  }

  addQuestion = () => {
    const { question, answer } = this.state;
    const { dispatch, navigation } = this.props;
    const deck = navigation.state.params.deck;
    if (!question || !answer) return alert('You need to provide both question and answer.')
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
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.addQuestion()}
          >
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
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
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  }
});

export default connect()(AddQuestion);
