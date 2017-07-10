import axios from 'axios';
import FetchRequest from './FetchRequest';
import FetchSuccess from './FetchSuccess';
import FetchFailure from './FetchFailure';

//refresh readers on actions from ReactReduxTwitch
//update code below for our API

function RequestApi() {
  return (dispatch) => {
    //API request
    axios.get('http://localhost:3000/api/streams')
      .then(response => {
        console.log(response);
        const streams = response.data.map(function(stream) {
          return stream;
        });
        //dispatch FetchSuccess, order 2
        dispatch(FetchSuccess(streams))
      })
      .catch(e => {
        //dispatch FetchFailure, order 3
        dispatch(FetchFailure(e))
      });

    //dispatch FetchRequest, order 1
    dispatch(FetchRequest())
  }
}

export default RequestApi
