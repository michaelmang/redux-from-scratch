import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TwitchApp from './reducers/TwitchApp';

import Streams from './components/containers/Streams';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Streams store={store} />
      </div>
    )
  }
}

//intialize store
let store = createStore(TwitchApp)

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
=======
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TwitchApp from './reducers/TwitchApp';

import Streams from './components/containers/Streams';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Streams store={store} />
      </div>
    )
  }
}

//intialize store
let store = createStore(TwitchApp)

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
