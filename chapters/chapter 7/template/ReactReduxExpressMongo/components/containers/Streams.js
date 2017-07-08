import React from 'react';
import { getState } from 'redux';

import Loader from '../presentationals/Loader';
import StreamCard from  '../presentationals/StreamCard';
import Alert from  '../presentationals/Alert';


//Provider/Container React Component
class Streams extends React.Component {

  componentWillMount () {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  render() {
    const stateProps = this.props.store.getState();
    const status = stateProps.status;
    const streamCardItems = stateProps.streams.map((stream) =>
      <StreamCard
        key = { stream }
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
