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
      question: 'Mh?',
      answer: 'Ah!'
    };
  }

  addQuestion = () => {
    const { question, answer } = this.state;
    const { dispatch, navigation } = this.props;
    // Update Redux.
    dispatch(addQuestion(navigation.state.params.deck, question, answer));

    // Update AsyncStorage.
    AsyncStorage.getItem('@mobileFlashCards')
    .then(jsonState => JSON.parse(jsonState))
    .then(state => state.questions = [
      ...state.questions,
      {
        question,
        answer
      }
    ])
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
            />
          </View>
          <View style={styles.label}>
            <Text>Answer</Text>
            <TextInput
              style={styles.textInput}
              value={answer}
              onChangeText={text => this.setState({answer: text})}
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
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flex: 1
  },
  body: {
    borderStyle: 'solid',
    borderColor: 'orange',
    borderWidth: 3,
    flex: 2
  },
  label: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15
  },
  textInput: {
    fontSize: 16,
    padding: 5
  },
  btnContainer: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flex: 1,
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
  },
  btnText: {
    fontSize: 18
  }
});

export default connect()(AddQuestion);
