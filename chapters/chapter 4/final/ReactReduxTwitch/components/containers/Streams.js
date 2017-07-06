<<<<<<< HEAD
import React from 'react';
import { getState } from 'redux';
import axios from 'axios';

import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';

import Loader from '../presentationals/Loader';
import StreamCard from  '../presentationals/StreamCard';
import Alert from  '../presentationals/Alert';


//Provider/Container React Component
class Streams extends React.Component {

  componentWillMount () {
    this.props.store.subscribe(this.forceUpdate.bind(this));
    this.apiRequest();
    this.dispatchFetchRequest();
  }

  apiRequest () {
    axios.get('https://api.twitch.tv/kraken/streams/featured?&client_id=skawlpb80ixx8e9cxafxepbn66xhe1')
      .then(response => {
        console.log(response);
        const streams = response.data.featured.map(function(feat) {
          return feat.stream;
        });
        this.dispatchFetchSuccess(streams);
      })
      .catch(e => {
        this.dispatchFetchFailure(e);
      });
  }

  dispatchFetchRequest () {
    this.props.store.dispatch(FetchRequest());
  }

  dispatchFetchSuccess (streams) {
    this.props.store.dispatch(FetchSuccess(streams));
  }

  dispatchFetchFailure (error) {
    this.props.store.dispatch(FetchFailure(error));
  }

  render() {
    const stateProps = this.props.store.getState();
    const status = stateProps.status;
    const streamCardItems = stateProps.streams.map((stream) =>
      <StreamCard
        key = { stream._id }
        streamCover = { stream.preview.medium }
        streamLink = { stream.channel.url }
      />
    );
    const error = stateProps.error;
    return (
      <div>
      {status === "loading" ? (
         <Loader />
       ) : (
          status === "success" ? (
            <div className="stream-cards">
            {streamCardItems}
            </div>
          ) : (
            status === "error" ? (
              <div>
                <Alert error = { error } />
              </div>
            ) : (
              <div></div>
            )
          )
        )
      }
      </div>
    )
  }
}

export default Streams
=======
import React from 'react';
import { getState } from 'redux';
import axios from 'axios';

import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';

import Loader from '../presentationals/Loader';
import StreamCard from  '../presentationals/StreamCard';
import Alert from  '../presentationals/Alert';


//Provider/Container React Component
class Streams extends React.Component {

  componentWillMount () {
    this.props.store.subscribe(this.forceUpdate.bind(this));
    this.apiRequest();
    this.dispatchFetchRequest();
  }

  apiRequest () {
    axios.get('https://api.twitch.tv/kraken/streams/featured?&client_id=skawlpb80ixx8e9cxafxepbn66xhe1')
      .then(response => {
        console.log(response);
        const streams = response.data.featured.map(function(feat) {
          return feat.stream;
        });
        this.dispatchFetchSuccess(streams);
      })
      .catch(e => {
        this.dispatchFetchFailure(e);
      });
  }

  dispatchFetchRequest () {
    this.props.store.dispatch(FetchRequest());
  }

  dispatchFetchSuccess (streams) {
    this.props.store.dispatch(FetchSuccess(streams));
  }

  dispatchFetchFailure (error) {
    this.props.store.dispatch(FetchFailure(error));
  }

  render() {
    const stateProps = this.props.store.getState();
    const status = stateProps.status;
    const streamCardItems = stateProps.streams.map((stream) =>
      <StreamCard
        key = { stream._id }
        streamCover = { stream.preview.medium }
        streamLink = { stream.channel.url }
      />
    );
    const error = stateProps.error;
    return (
      <div>
      {status === "loading" ? (
         <Loader />
       ) : (
          status === "success" ? (
            <div className="stream-cards">
            {streamCardItems}
            </div>
          ) : (
            status === "error" ? (
              <div>
                <Alert error = { error } />
              </div>
            ) : (
              <div></div>
            )
          )
        )
      }
      </div>
    )
  }
}

export default Streams
>>>>>>> b4094a4fa9e55bd6c362c1cfbb0fdf8199fa870f
