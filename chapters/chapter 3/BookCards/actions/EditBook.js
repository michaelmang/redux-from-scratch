//define action within an action creator
function EditBook() {
  const EDIT_BOOK = 'EDIT_BOOK'
  return {
    type: EDIT_BOOK,
    cover: "https://s3.amazonaws.com/titlepages.leanpub.com/learnreactvr/hero?1496886273",
    title: "Learn React VR",
    author: "Mike Mangialardi",
    link: "https://leanpub.com/learnreactvr"
  }
}

export default EditBook
