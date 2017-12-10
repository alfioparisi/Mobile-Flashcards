import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class Deck extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck
  })

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Text>This deck contains {navigation.state.params.cardsNumber} cards</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Quiz')}
            >
              <Text style={styles.btnText}>Start quiz</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('AddQuestion', {deck: navigation.state.params.deck})}
            >
              <Text style={styles.btnText}>Add a card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  subHeader: {
    borderStyle: 'solid',
    borderColor: 'orange',
    borderWidth: 3,
    alignItems: 'flex-end',
    paddingRight: 12
  },
  body: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 3,
    flex: 1
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

export default Deck;
