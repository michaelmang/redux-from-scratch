//define action within an action creator
function FetchSuccess(streams) {
  const FETCH_SUCCESS = 'FETCH_SUCCESS'
  return {
    type: FETCH_SUCCESS,
    status: "success",
    streams
  }
}

export default FetchSuccess
