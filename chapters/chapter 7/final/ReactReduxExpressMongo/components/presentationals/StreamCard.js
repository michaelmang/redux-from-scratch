import React from 'react';

//Presentational React Component
class StreamCard extends React.Component {
  render() {
    return (
      <div className="stream-cards">
        <img
          className="stream-cover"
          src={this.props.image}
        />
        <br/>
        <h4 className="stream-name">Stream: {this.props.name}</h4>
        <h4 className="stream-viewers">Viewers: {this.props.viewers}</h4>
      </div>
    )
  }
}

export default StreamCard
