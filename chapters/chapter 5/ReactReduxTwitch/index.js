import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Raven from "raven-js";
import createRavenMiddleware from "raven-for-redux";

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

Raven.config('https://50ade61bac124605878ae86df7fb1cea@sentry.io/188244').install()

//intialize store
let store = createStore(
  TwitchApp,
  applyMiddleware( thunk, logger, createRavenMiddleware(Raven, {}) )
);

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
