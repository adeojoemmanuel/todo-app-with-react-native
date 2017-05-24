import React, { Component } from 'react';
import {
 AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class NewProject extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text> 
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>D</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.editMethod} style={styles.noteEdit}>
          <Text style={styles.noteEditText}>E</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#e91e63',
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#298069',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteEdit: {
    borderLeftWidth: 10,
    //position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: 'white',
  },
  noteEditText: {
    color: 'white',
  }
});

