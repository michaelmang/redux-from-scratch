import axios from 'axios';
import FetchRequest from './FetchRequest';
import FetchSuccess from './FetchSuccess';
import FetchFailure from './FetchFailure';

function RequestApi() {
  return (dispatch) => {
    //API request
    axios.get('https://api.twitch.tv/kraken/streams/featured?&client_id=skawlpb80ixx8e9cxafxepbn66xhe1')
      .then(response => {
        const streams = response.data.featured.map(function(feat) {
          return feat.stream;
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
