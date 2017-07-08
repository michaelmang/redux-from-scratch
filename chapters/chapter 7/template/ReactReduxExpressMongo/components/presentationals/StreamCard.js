import React from 'react';

//Presentational React Component
class StreamCard extends React.Component {
  render() {
    return (
      <div className="stream-cards">
        <a>
          <img
            className="stream-cover"
          />
        </a>
      </div>
    )
  }
}

export default StreamCard
