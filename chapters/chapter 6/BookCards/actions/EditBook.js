//define action within an action creator
function EditBook(firebaseData, authorName) {
  const EDIT_BOOK = 'EDIT_BOOK'
  return {
    type: EDIT_BOOK,
    cover: firebaseData.Cover,
    title: firebaseData.Title,
    author: authorName,
    link: firebaseData.Link
  }
}

export default EditBook
