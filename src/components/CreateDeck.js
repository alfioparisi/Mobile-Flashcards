import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, Alert, AsyncStorage } from 'react-native';
import Button from './Button';
import { NavigationActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { createDeck } from '../actions/decks';
import { connect } from 'react-redux';

/**
  Render the form to create a new deck.
  @param {object} : decks
  @param {object} : navigation object
*/
class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckName: ''
    };
  }

  /**
    Add a new deck to both Redux and AsyncStorage, then navigate to its View.
  */
  createDeck = () => {
    const { deckName } = this.state;
    const { navigation, dispatch } = this.props;
    // Dispatch action to create the deck.
    dispatch(createDeck(deckName));

    // Save deck to AsyncStorage.
    const newDeck = {
      [deckName]: {
        title: deckName,
        questions: []
      }
    };
    AsyncStorage.mergeItem('@mobileFlashCards', JSON.stringify(newDeck));

    // Go to deck view.
    navigation.dispatch(NavigationActions.back());
    navigation.navigate('Deck', {
      entryId: deckName,
      deck: deckName
    });
  }

  /**
    Check whether the given name for the deck is available or not.
  */
  checkAvailableName = () => {
    const { deckName } = this.state;
    const { decks } = this.props;
    // If no name is provided notify the user.
    if (!deckName) return alert('A deck needs a name to be created correctly.');
    // If the name already exist ask to replace the old deck with a new empty one.
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
            <Text>Type the name for your new deck</Text>
            <TextInput
              style={styles.textInput}
              value={deckName}
              onChangeText={text => this.setState({deckName: text})}
              placeholder='Zabaglione'
              placeholderTextColor='#f65f57'
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => this.checkAvailableName()}
            text='Create'
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

const mapStateToProps = state => ({
  decks: state.decks
});

export default connect(mapStateToProps)(CreateDeck);
