import * as firebase from "firebase";
import EditBook from './EditBook';
import AddBook from './AddBook';

function RequestApi() {
  return (dispatch, getState) => {
//connect to database
const database = firebase.database();

//make references to outermost objects of JSON tree
const books = database.ref('Books');
const authors = database.ref('Authors');

//function with promise to retrieve book info except author
function retrieveBookInfo(index) {
  let promise = new Promise((resolve, reject) => {
    books.on('value', function(snapshot) {
      console.log(snapshot.val()[0]);
      const firebaseData = snapshot.val()[index];
      resolve(firebaseData);
    });
  });

  return promise;
}

    // //function takes author id from Authors object within books (authors of one book)
    // //then retrieves author name from Authors outermost object (all authors in database)
    function retrieveAuthorsName(firebaseData) {
      let promise = new Promise((resolve, reject) => {
        const bookAuthors = Object.getOwnPropertyNames(firebaseData.Authors);
        authors.on('value', function(snapshot) {
          bookAuthors.map((bookAuthor) => {
            const authorObj = Object.assign({}, snapshot.val()[bookAuthor]);
            const authorName = authorObj["name"];
            resolve([firebaseData, authorName]);
          });
        });
      });

      return promise;
    }

    //dispatch edit book action to update state with book info
    function dispatchEditBook(bookInfoAry) {
      //bookInfoAry[1] = firebaseData
      //bookInfoAry[2] = authorName
      let promise = new Promise((resolve, reject) => {
        dispatch(EditBook(bookInfoAry[0], bookInfoAry[1]));
        resolve();
      });
      return promise;
    }

    //add book to books array in state
    function dispatchAddBook() {
      let promise = new Promise((resolve, reject) => {
        dispatch(AddBook());
        resolve();
      });
      return promise;
    }

    //call all the promises in order
    retrieveBookInfo(getState().books.length)
      .then(retrieveAuthorsName)
      .then(dispatchEditBook)
      .then(dispatchAddBook)
  }
}

export default RequestApi
