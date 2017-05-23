import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
    const config = {
         apiKey: 'AIzaSyBMlRsCqI_s6rJ-N7PPCc0F9ygY7g54vhs',
         authDomain: 'manager-130ee.firebaseapp.com',
          databaseURL: 'https://manager-130ee.firebaseio.com',
          projectId: 'manager-130ee',
         storageBucket: 'manager-130ee.appspot.com',
         messagingSenderId: '264672257487'
  };
  firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello!</Text>
                </View>
            </Provider>
        );
    }
}

export default App;
