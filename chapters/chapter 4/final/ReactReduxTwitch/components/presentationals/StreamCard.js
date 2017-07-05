import React from 'react';

//Presentational React Component
class StreamCard extends React.Component {
  render() {
    return (
      <div className="stream-cards">
        <a href={this.props.streamLink}>
          <img
            className="stream-cover"
            src={this.props.streamCover}
          />
        </a>
      </div>
    )
  }
}

export default StreamCard
