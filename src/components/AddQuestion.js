import React from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddQuestion = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => alert('Go back to deck view.')}
      >
        <MaterialIcons name='keyboard-arrow-left' size={50} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Add a new question</Text>
    </View>
    <KeyboardAvoidingView style={styles.form} behavior='padding'>
      <View style={styles.formBody}>
        <View style={styles.label}>
          <Text>Question</Text>
          <TextInput
            style={styles.textInput}
            value='Some text.'
          />
        </View>
        <View style={styles.label}>
          <Text>Answer</Text>
          <TextInput
            style={styles.textInput}
            value='Some text.'
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => alert('Add a question.')}
        >
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
    flex: 1,
    textAlign: 'center',
    fontSize: 18
  },
  form: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 3,
    flex: 1
  },
  formBody: {
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
    fontSize: 16
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
