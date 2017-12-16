import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { createDeck } from '../actions/decks';
import { connect } from 'react-redux';

import store from '../store';

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckName: 'Zabaglione'
    };
  }

  createDeck = () => {
    const { deckName } = this.state;
    const { navigation } = this.props;
    // dispatch action
    store.dispatch(createDeck(deckName));

    // save deck to AsyncStorage
    const newDeck = {
      [deckName]: {
        title: deckName,
        questions: []
      }
    };
    AsyncStorage.mergeItem('@mobileFlashCards', JSON.stringify(newDeck));

    // go back to deck view
    navigation.dispatch(NavigationActions.back())
  }

  checkAvailableName = () => {
    const { deckName } = this.state;
    const { decks } = this.props;
    if (decks[deckName]) {
      Alert.alert(
        'Warning',
        'A deck with the provided name is already present. Click OK to replace it.',
        [
          {text: 'Cancel', onPress: () => {}},
          {text: 'OK', onPress: () => this.createDeck()}
        ],
        {
          onDismiss: () => {}
        }
      );
      return;
    }
    return this.createDeck();
  }

  render() {
    const { deckName } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.body}>
          <View style={styles.label}>
            <Text>Choose a name</Text>
            <TextInput
              style={styles.textInput}
              value={deckName}
              onChangeText={text => this.setState({deckName: text})}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.checkAvailableName()}
          >
            <Text style={styles.btnText}>Create</Text>
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

const mapStateToProps = state => ({
  decks: state.decks
});

export default connect(mapStateToProps)(CreateDeck);
