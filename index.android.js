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

//import Firebase from 'firebase';
var Firebase = require("firebase");

  var config = {
    apiKey: "AIzaSyArbO2fNTtgOg7N-dEfas1Nm4TzysBwQIs",
    authDomain: "reactdb-9396d.firebaseapp.com",
    databaseURL: "https://reactdb-9396d.firebaseio.com",
    projectId: "reactdb-9396d",
    storageBucket: "reactdb-9396d.appspot.com",
    messagingSenderId: "474700356403"
  };
  


  const firebaseApp = Firebase.initializeApp(config);

import Note from './app/components/Note';

export default class NewProject extends Component {
  constructor(props) {
    super(props);
     var fireConnection = Firebase.database().ref();

      fireConnection.set({
        title: 'hello world',
        author: 'imm'
      });
  }

  state = {
    noteArray:[{'date': 'testdate', 'note': 'testing 1'}],
    noteText: '',
  }

  render() {
    let notes = this.state.noteArray.map((val, key)=>{
        return <Note key={key} keyval={key} val={val} deleteMethod={ ()=>this.deleteNote(key) } />
    })
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>-note-</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput style={styles.textInput}
            onChangeText={(noteText)=> this.setState({noteText})} value={this.state.noteText}
            placeholder='Input text' placeholderTextColor='white' underlineColorAndroid='transparent'>
          </TextInput>
        </View>

      </View>
    );
  }
  addNote(){
      if(this.state.noteText){
          var d = new Date();
          this.state.noteArray.push( {'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(), 'note': this.state.noteText} );
          this.setState({ noteArray: this.state.noteArray})
          this.setState({ noteText: '' });
      }
  }
  deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd', 
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  }
});

AppRegistry.registerComponent('NewProject', () => NewProject);
