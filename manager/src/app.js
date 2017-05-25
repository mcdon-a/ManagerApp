import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './Components/LoginForm';
import RouterComponent from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            //The second argument is an initial state that we want to pass
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}

export default App;
