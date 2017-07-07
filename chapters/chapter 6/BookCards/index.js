import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import BooksApp from './reducers/BooksApp';
import Books from './components/containers/Books';

import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD_G28vy2ksn7ZoiVKyvVprguvsp41p04g",
  authDomain: "book-cards.firebaseapp.com",
  databaseURL: "https://book-cards.firebaseio.com",
  projectId: "book-cards",
  storageBucket: "book-cards.appspot.com",
  messagingSenderId: "123503941995"
};

firebase.initializeApp(config);

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div>
        <Books store={store} />
      </div>
    )
  }
}

//intialize store
let store = createStore(
  BooksApp,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
