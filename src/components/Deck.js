import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Deck = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => alert('Go back to deck list.')}
      >
        <MaterialIcons name='keyboard-arrow-left' size={50} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Deck Header</Text>
    </View>
    <View style={styles.subHeader}>
      <Text>cards number here</Text>
    </View>
    <View style={styles.body}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => alert('Start quiz.')}
        >
          <Text style={styles.btnText}>Start quiz</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => alert('Add a card.')}
        >
          <Text style={styles.btnText}>Add a card</Text>
        </TouchableOpacity>
      </View>
    </View>
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
