//define the initial state
const initialState = {
  books: [],
  cover: [],
  title: [],
  author: [],
  link: []
}

//define a reducer with an intitalized state and logic to handle action
function BooksApp(state = initialState, action) {
  switch(action.type) {
    case 'ADD_BOOK':
      let incremented = Object.assign({}, state)
      incremented.books.push(incremented.books.length)
      return incremented
    case 'DELETE_BOOK':
      let decremented = Object.assign({}, state)
      decremented.books.pop()
      return decremented
    case 'EDIT_BOOK':
      let edited = Object.assign({}, state)
      edited.cover.push(action.cover)
      edited.title.push(action.title)
      edited.author.push(action.author)
      edited.link.push(action.link)
      return edited
    default:
      return state
  }
}

export default BooksApp
