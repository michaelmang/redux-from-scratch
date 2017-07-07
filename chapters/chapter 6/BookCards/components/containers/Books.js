import React from 'react';

import { getState } from 'redux';

import AddBook from '../../actions/AddBook';
import DeleteBook from '../../actions/DeleteBook';
import EditBook from '../../actions/EditBook';
import RequestApi from '../../actions/RequestApi';

import BookCard from  '../presentationals/BookCard';

//Provider/Container React Component
class Books extends React.Component {

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
    this.props.store.dispatch(RequestApi())
  }

  dispatchAction (input) {
    switch (input) {
      case "TRASH":
        this.props.store.dispatch(DeleteBook());
        break;
      case "PLUS":
        this.props.store.dispatch(RequestApi());
        break;
      case "PENCIL":
        this.props.store.dispatch(EditBook());
        break;
    }
  }

  render() {
    const stateProps = this.props.store.getState();
    const bookItems = stateProps.books.map((book) =>
      <BookCard
        key = { book }
        count = { book }
        stateProps = { stateProps }
        dispatchAction = {this.dispatchAction.bind(this)}
      />
    );
    return (
      <div className="books-container">
        {bookItems}
      </div>
    )
  }
}

export default Books
