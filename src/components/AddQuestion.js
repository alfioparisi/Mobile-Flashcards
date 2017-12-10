import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 'Mh?',
      answer: 'Ah!'
    };
  }

  render() {
    const { question, answer } = this.state;
    const { navigation } = this.props;
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
            onPress={() => navigation.dispatch(NavigationActions.back())}
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

export default AddQuestion;
