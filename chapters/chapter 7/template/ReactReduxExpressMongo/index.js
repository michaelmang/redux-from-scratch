import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import ApiApp from './reducers/ApiApp';

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
let store = createStore(
  TwitchApp,
  applyMiddleware( thunk, logger )
);

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
