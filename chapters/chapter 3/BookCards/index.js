import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import BooksApp from './reducers/BooksApp';

import Books from './components/containers/Books';

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
let store = createStore(BooksApp)
console.log(store.getState());

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
