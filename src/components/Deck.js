import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Animated } from 'react-native';
import Button from './Button';
import QuestionsListItem from './QuestionsListItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

/**
  Render a deck. Each deck has a button to start the quiz and one to add a new
  card. Also there is a button to show a list of all available questions for the
  deck within a modal.
  @param {string} : deck name
  @param {number} : number of cards of this deck
  @param {array} : questions for this deck
  @param {object} : navigation object passed by `StackNavigator`
*/
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      showModal: false
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
    const { opacity, showModal } = this.state;
    const { navigation, cardsNumber, deck, questions } = this.props;
    return (
      <Animated.View style={[styles.container, {opacity}]}>
        <View style={styles.subHeader}>
          <Text style={styles.headerText}>This deck contains {cardsNumber} cards</Text>
          <TouchableOpacity
            onPress={() => this.setState({showModal: true})}
          >
            <MaterialCommunityIcons name='cards' size={30} color='#ebeaea' />
          </TouchableOpacity>
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
        <Modal
          visible={showModal}
          onRequestClose={() => this.setState({showModal: false})}
          animationType='slide'
        >
          <View
            style={styles.modalHeader}
          >
            <Text style={styles.modalHeaderText}>{deck} questions</Text>
          </View>
          {questions && (
            <FlatList
              style={styles.list}
              data={questions}
              renderItem={({ item }) => (
                <QuestionsListItem
                  question={item.key}
                />
              )}
            />
          )}
        </Modal>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 15,
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
  },
  modalHeader: {
    flex: 0.2,
    justifyContent: 'center'
  },
  modalHeaderText: {
    fontSize: 18,
    paddingLeft: 15
  },
  list: {
    backgroundColor: '#ebeaea'
  }
});

const mapStateToProps = (state, ownProps) => ({
  deck: ownProps.navigation.state.params.deck,
  cardsNumber: state.decks[ownProps.navigation.state.params.deck].questions.length,
  questions: state.decks[ownProps.navigation.state.params.deck].questions.map(obj => ({key: obj.question}))
});

export default connect(mapStateToProps)(Deck);
