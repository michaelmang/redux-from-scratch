//define action within an action creator
function FetchFailure(error) {
  const FETCH_FAILURE = 'FETCH_FAILURE'
  return {
    type: FETCH_FAILURE,
    status: "error",
    error
  }
}

export default FetchFailure
